---
title: Course Registration Tool
iconPath: /icons/github.svg
description: SMS-based service that allowed students to request to be notified when a spot opens up in a capped class.
langs: [Python, Bash]
tools: [Heroku, Twilio]
githubURL: https://github.com/ibigio/course-lookout
favorite: true
---

# Overview

I created this course registration tool to notify me when someone drops a capped class so I could immediately register for it, saving me the burden of continous checking by hand. The most recent version of this tool allows Brown students to text a course code to a specific phone number using traditional SMS. Then, I use Twilio and Heroku to handle the requests, confirming that the course is being monitored, and eventually sending a text as soon as a spot opens up.

I first created this tool freshamn year using Bash, and re-implemented twice after in Python, integrating Twilio and Heroku. Each iteartion cleaned up code, simplified logic, added features such as texting and public usage, or fixed access to deprecated endpoints.

# First Iteration: Bash

While enrolling for classes during my first semester at Brown, I realized some of the courses I wanted to take had an enrollment cap. After spending a day refreshing the registration page every five minutes, I decided there had to be a better way.

At that time the only computer science experience I had was playing around with OS X's terminal, so I decided to use Bash (since it was the only language I knew). I knew little about browsers and network requets, but some Googling led me to a Firefox plugin that showed me all of the requests going to a single URL. Turns out all registration data was stored in a single huge JSON. (Jackpot!)

...except I did not know know about JSON at the time, so I just iterated over the string in a Bash for loop, looking for a specific sequence representing the course's ID. It took 4 minutes to run, but it technically worked! My first successful test just so happened to coincide with a slot opening up in a multivariable calculus class, which I promptly registered for.

# Second Iteration: Python

Sophmore year
