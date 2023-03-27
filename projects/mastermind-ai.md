---
title: Mastermind AI
iconPath: /icons/github.svg
description: Near-optimal agent optimized to play and win faster than humans. Ported from Python to Golang to leverage goroutine parallelism.
langs: [Go, Python]
tools: [PyPy]
githubURL: https://github.com/ibigio/mastermind-ai
---

Mastermind AI is a near-optimal agent designed to play and win the classic game of Mastermind faster than humans. For those unfamiliar with the game, one player selects a secret code consisting of four colored pegs, and the other player attempts to guess the code in a series of turns. My AI employs concepts from information theory to search for guesses that maximize the expected number of potential secret codes that can be discarded. This strategy enables the AI to efficiently narrow down the possibilities and solve the puzzle in a minimal number of turns.

Originally implemented in Python, I decided to port the code to Golang to harness the power of goroutine parallelism. This allowed the AI to fully optimize its performance by running in parallel on however many CPUs are available. While good human players often finish the game in 4-5 turns, they can sometimes take longer. My AI consistently outperforms these players, as it almost always finishes the game in just 4 turns.
