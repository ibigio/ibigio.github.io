---
title: Messing with Lyft Bikes
iconPath: /icons/bike.svg
description: I reverse engineered Lyft Bikes API to add remote-unlock functionality, and in the process discovered (and disclosed) a vulnerability.
langs: [Python]
tools: [AsyncIO, CharlesProxy]
githubURL: https://github.com/ibigio/baywheels
favorite: true
---

<img src="/images/bikes.jpeg" />

During my internship at Twitter in San Francisco, I used Citi Bikes to commute to work. However, I often found that bikes would be taken before I could get to them, even though they appeared available on the app's map. Instead of waking up earlier, I decided to reverse engineer the system to remotely unlock a bike for myself.

To do this, I set up a man-in-the-middle setup with Charles Proxy, including SSL decryption using a custom certificate, to inspect my own traffic from the Lyft app while making a request. I examined the API endpoints for bike lists, stations, and other relevant data. I discovered that location-locking was implemented by sending GPS coordinates as part of the request, making it easy to bypass proximity checks by emulating any location.

One night, I found myself in pajamas and sandals at 10pm, squatting in front of a row of bikes with my laptop, testing my reverse-engineered solution. I initially struggled to find the bike IDs remotely from the API, as users typically scanned a QR code to send the bike ID. However, I realized the range of IDs was limited to around twenty thousand. This allowed me to brute force the IDs by sending thousands of asynchronous requests per second using a custom Python library with AsyncIO.

As this could potentially be seen as a denial-of-service (DOS) attack, I proactively emailed Lyft and the API hosting company to clarify my intentions and explain that it was a student project. Upon testing my solution, I inadvertently unlocked two bikes instead of one, which should not have been possible for a single account.

My friend at Lyft informed me that the spike in traffic had been flagged and was under investigation. To ensure transparency and responsibility, I submitted a vulnerability report through HackerOne.com, detailing my findings. In recognition of my efforts, I received a $500 bounty for discovering and disclosing the vulnerability.
