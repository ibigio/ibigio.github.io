---
title: Reverse engineering Lyft bikes for fun (and profit)
slug: lyft-bikes
date: January 2026
---
One cold San Francisco summer morning in Haight-Ashbury, my commute down to Market was interrupted by the sight of a lucky duck taking the last Lyft bike – again.

"I should really just wake up 15 minutes earlier", I thought, fleetingly. Then instead proceeded to spend the next month learning

- how to reverse engineer the Lyft Bikes private endpoints,
- tinkering with wifi proxies and custom SSL certificates to bypass encryption,
- chasing loose bikes across the city,
- causing an incident at Lyft,
- getting flagged,
- and somehow making a profit.

I learned a ton, so I'm sharing the journey in case you may too.

[Skip to technical summary →](https://www.notion.so/Reverse-engineering-lyft-bikes-for-fun-and-profit-2db9f6a8122080049bd3e61b3238f00e?pvs=21)

> **Disclaimer:** This writeup is meant for education purposes only. Any vulnerabilities were disclosed and patched in 2018.
> 

## Table Of Contents

## The Acquisition

Back in 2018 Lyft Bikes (BayWheels) used to be [Ford GoBikes](https://automotive.lulop.com/en_EN/post/show/131501/ford-gobike-launching-in-bay-a.html), and used to be unlocked on a per-station basis. You'd generate a temporary code for a specific station on your app, then punch it into that station which would release a random bike.

<img src="/images/blog/lyft-bikes/ford-gobikes.webp" alt="Ford GoBikes" style="border-radius: 4px">

My goal was to make sure nobody could take a bike while I was on-route to the station, so what if I just kept manually generating codes until I arrived? Maybe that might block others from doing so. So I tried it. No luck. Generating a code didn't block others, and that was the only way to unlock bikes. Welp, nothing left to try...

...until the next day, when [Lyft acquired Ford GoBikes](https://www.lyft.com/blog/posts/lyft-to-acquire-us-bikeshare-leader) and the whole unlock mechanism changed. All hail Lyft.

The new Lyft map also showed bikes at stations, but now you'd unlock a bike directly by scanning a QR code on it. Each bike also had 4-digit number you could use in case scanning didn't work. Maybe if I typed a bike's code into my app when I left, it would be unlocked (and hopefully still there) by the time I arrived? So I tried it.

`You are too far from this station.`

They had geofenced it. I spent a solid day Googling how to spoof GPS on iPhone but no luck. "I wonder what the app is actually sending to Lyft during an unlock." And so my journey of snooping encrypted iOS traffic began.

## Intercepting iOS App Requests

If you've used [Chrome DevTools](https://developer.chrome.com/docs/devtools) (aka `Inspect Element`) you may have noticed a `Network` tab that lets you see the traffic between a website and its backend. Unfortunately it's not so simple for iOS. Some helpful Reddit posts led me to [Charles Proxy](https://www.charlesproxy.com/) which lets you see *all* traffic from your computer, and a friendly [eight sentences](https://www.charlesproxy.com/documentation/faqs/using-charles-from-an-iphone/) explained how to wire it up to my phone's traffic. It's basically a consensual [man-in-the-middle attack](https://www.notion.so/Reverse-engineering-lyft-bikes-for-fun-and-profit-2db9f6a8122080049bd3e61b3238f00e?pvs=21).

First I had to forward my phone's traffic to Charles on my laptop. To do this I enabled "HTTP Proxy" on my phone's wifi settings, and set the the `[ip]:[port]` to `192.168.0.7:8888`:

- `192.168.0.7` is my laptop's local IP which I got by running `ipconfig getifaddr en0`
- `8888` is the port Charles Proxy is running on

![Screenshot 2026-01-01 at 2.18.19 PM.png](/images/blog/lyft-bikes/Screenshot_2026-01-01_at_2.18.19_PM.png)

Now my traffic was being forwarded to Charles Proxy and huzzah! I could see all requests coming out of my phone. But... I can't see the content? Oh, right. SSL encryption. The thing making sure we can trust the internet was getting in my way.

## Spoofing SSL Root Certificate Authorities

SSL ensures traffic from the Lyft app is encrypted using the `lyft.com` public key, so only `lyft.com` can decrypt it [^1](https://www.notion.so/ilanbigio/Simplification.). All modern applications & websites do this, and you can find the public key on a website's [SSL certificate](https://www.notion.so/Reverse-engineering-lyft-bikes-for-fun-and-profit-2db9f6a8122080049bd3e61b3238f00e?pvs=21).

<picture>
  <source srcset="/images/blog/lyft-bikes/Screenshot_2026-01-01_at_2.12.36_PM.png" media="(prefers-color-scheme: dark)">
  <img src="/images/blog/lyft-bikes/Screenshot_2026-01-01_at_2.12.36_PM.png" alt="SSL Certificate" width="50%">
</picture>

In theory, this means my traffic is perfectly un-snoopable, even by me. However, Charles has a workaround: by enabling `SSL Proxying`, Charles will prevent the real `lyft.com` SLL certificate from making it back to your phone, and instead sends a new one it generates on the fly.

![Screenshot 2026-01-01 at 2.09.23 PM.png](/images/blog/lyft-bikes/Screenshot_2026-01-01_at_2.09.23_PM.png)

This means your phone is now encrypting `lyft.com` traffic with Charles's public key, so Charles can decrypt it, save it, then re-encrypt with the *real* `lyft.com` cert and forward it along.

![Screenshot 2026-01-01 at 2.09.30 PM.png](/images/blog/lyft-bikes/Screenshot_2026-01-01_at_2.09.30_PM.png)

But there's a catch – your phone will reject a certificate unless it's been signed by a Certificate Authority, endorsing it actually belongs to `lyft.com`. These CAs are third-party organizations acting like notaries that issue "root certificates", and your phone comes with many trusted CA root certificates pre-installed. So Charles just asks you to install one more root certificate – the Charles Root Certificate, used to sign all the other certificates Charles creates. And just like that, my phone trusts Charles, and I can see SSL traffic.

## Anatomy of a Lyft Request

So, let's unlock a bike shall we?

`Vehicle not found.`

Right. Well, I used `12345` as the bike ID, so that's expected. Charles managed to capture some traffic anyway. Let's see if we can find the unlock request.

![api-routes.png](/images/blog/lyft-bikes/api-routes.png)

So many requests and API routes! I see one endpoint called `rent`, which I bet is the unlock request. Let’s look at the contents.

```json
POST "https://layer.bicyclesharing.net/mobile/v2/fgb/rent"

HEADERS
{
  "api-key": "API_KEY_123",
  "authorization": "API_TOKEN_123",
  ...
}

DATA
{
  "userLocation": { "lat": 37.7714859, "lon": -122.4449036 },
  "qrCode": { "memberId": "mem123", "qrCode": "12345" },
  ...
}
```

Yup, looks like it is. Look at these fields (*I omitted the unrelated, redacted the sensitive.*) There's some auth in the headers (`api-key`, `authorization`), the dummy bike `qrCode` I used (`12345`), a `memberId` which I assume identifies my account, and... `userLocation` coordinates! Bingo. Now I just need to replay that request with a python script, but set the `lat`, `lon` to be right next to the station (whose coordinates I got using google maps).

```python
import requests

url="https://layer.bicyclesharing.net/mobile/v2/fgb/rent"

headers={
  "api-key": "API_KEY_123",
  "authorization": "API_TOKEN_123",
}

station_coords = { "lat": 37.7730627, "lon": -122.4390777 }    # from maps
bike_id = "12345"                                              # dummy id

data={
  "userLocation": station_coords,
  "qrCode": { "memberId": "mem123", "qrCode":  bike_id},
}

requests.post(url, headers=headers, json=data)
```

Sweet, now I just needed a real `bike_id` to test it on. It was very late at night [^2] but I was excited, so out I went with my PJs, flip flops, and laptop to squat by my target bike. I found its ID, entered it into my script, hit run, and holy shit it worked. The bike unlocked. I re-locked it, ran back to my apartment, hit run again, ran back, and there she was. Unlocked, and inconspicuously so. Nobody would think to take it… but me.

We’re in business.

## I Promise it’s not a Denial of Service Attack

Except… the bike IDs are only printed on the bikes. How would I know what `bike_id` to use without going to the station? Maybe some other request Charles captured might have all the bike IDs at a station? Short answer – no. Two days of digging through captured traffic yielded no way to fetch bike IDs. [^3]

After considering many fruitless ideas, like hiding a little camera pointed at the bikes and using OCR, I thought… could I just try all IDs? Five digits, that’s 100,000 combinations… and thinking back, I had only seen IDs between `10000` and `20000`. 10,000 loop iterations is not *that* many for python!

This runs in less than a second:

```python
for i in range(10_000, 20_000):
    print(i)
```

This, however, takes a second *per request*. So… ~three hours for 10,000 requests.

```python
def payload(i):
    return {
        "userLocation": station_coords,
        "qrCode": { "memberId": "mem123", "qrCode":  i},
    }

def send_one(i):
    requests.post(url, headers=headers, json=payload(i))

for i in range(10_000, 20_000):
    send_one(i)
```

But we don’t have to wait for each request to come back – we can run them in parallel. After trying `multiprocessing` and `threading`, I massaged a stack overflow code snippet using `aiohttp` to start a bunch of requests without blocking on a response. Here’s a simplified version.[^4]

```python
import asyncio, aiohttp

async def send_one(session, i):                              # non-blocking
  async with session.post(url, headers=headers, json=payload(i)): pass

async def main():
  async with aiohttp.ClientSession() as s:
    tasks = [send_one(s, i) for i in range(10_000, 20_000)]  # start all
    await asyncio.gather(*tasks)                             # wait for all

asyncio.run(main())
```

I benchmarked this against [Postman’s API](https://www.postman.com/) (meant for testing) and it ran in 15 seconds! That’s 650 RPM. Hm… is that too much for their servers? In April of 2018 [there were an average of 3,370 trips per weekday](https://www.sfmta.com/media/14273/download?inline=) So even if 80% of those all happened during rush hour (8-10am, 5-7pm) that’s still a whopping 11 RPM. I’d be single-handedly 60x-ing their peak traffic.

In practice, however, this hit a ton of limits and failures caused by going this hard. The solution was to cap at ~1000 connections, which brought execution to  ~30 minutes

But as days passed by, and I played with unlocking different bikes I noticed a pattern which slowly turned into a suspicion. `13576`. `17364`. `18921`. `13224`. `16618`… do you see it? All IDs seemed to sit roughly between `10000` and `20000`– that’s just 10,000! A whole order of magnitude less. 

 So for days I checked every bike I passed.  Wait, are these *all* between `10,000` and `20,000`?

- this is how tracked united healthcare murderer on lyft bikes
- putting camera on station?
- not that many ids...
- emails to companies
- fast async requests
- unlocked extra bike? huh

## The Good Days

- bike always there, would re-lock second unlocked bike
- unlocked e-bike, saw someone take it
- eleanor tells me
- panic

## Man on the Inside

- hacker 1 disclosure -> not even eligible?
- non-brute force guidelines
- roommate telling me about discussion at lyft about me
- bounty
- lyft intern party

# Technical Breakdown

Breakdown

# Notes

- make the -f+d in git diff formatting

# Dump

a sight I had been dreading: an empty Lyft Bike station. I had checked the app at 8:24am, there had been two bikes there. Yet when I arrived five minutes later, they were gone. Snagged before I arrived. [^1](https://www.notion.so/ilanbigio/Simplification.)

[^2]: 10:30pm in San Francisco.

[^3]: Except for eBikes, which were very few at this point, and which flash very conspicuously when unlocked as I found out after having to trek to re-lock one I accidentally unlocked across the city during testing.

[^4]: semaphores