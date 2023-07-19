---
title: AI Shell Assistant
description: A delightfully minimal, yet remarkably powerful AI Shell Assistant.
langs: [Go]
tools: [OpenAI API, Bubble Tea]
githubURL: https://github.com/ibigio/shell-ai
favorite: true
---

<img src="https://user-images.githubusercontent.com/25421602/247963139-f480db5d-3787-49d8-b1bc-a027f65858e6.gif" />

A delightfully minimal, yet remarkably powerful AI Shell Assistant.

# Why

I use the Terminal a lot, and forget commands a lot, so end up sifting through pages on Google... a lot. I got tired, so I built this. :)

# How

Shell AI uses the OpenAI API to turn natural language instructions into shell commands, and answer reference questions that commonly come up during software development. I built it with extreme focus on developer experience, keeping the interaction and output as minimal (and stylish) as possible.

This project was originally written in Javascript and run on Deno, but I opted to re-write it in Go to leverage the beautiful styling in [Glamour](https://github.com/charmbracelet/glamour) and the screen control in [Bubble Tea](https://github.com/charmbracelet/bubbletea). ([charm.sh](https://charm.sh/) is so cool)

(Displaying the streaming response was a bit of a pain, but it makes it feel so much snappier.)

# Open Source!

The project is Open Source and available on Homebrew. Installation instructions in the repo!
