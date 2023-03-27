---
title: Liar's Dice AI
iconPath: /icons/github.svg
description: Bayesian agent capable of beating humans in the game of Liar's Dice. It was later used to train a deep reinforcement learning model.
langs: [Python, C++]
tools: [Tensorflow, OpenAI Gym]
githubURL: https://github.com/ibigio/deep-learning-final
---

During my exploration of artificial intelligence in gaming, I developed a Bayesian agent for the game of Liar's Dice, which is capable of beating (some) human players. Liar's Dice is a game where players make wagers about how many dice of a particular face value are present, while only knowing their own hand. The game proceeds in a circle with each player increasing the quantity or face value of their wager until someone decides to call it, and then everyone's dice are revealed and verified.

To create this AI, I first encoded the rules of the game and developed a basic strategy to play the most likely results, which involved solving various combinatorics problems. The AI makes decisions by comparing different outcomes such as calling six sixes versus seven twos, or calling a bluff, while taking its own hand into consideration. When I tested the AI against real players, it performed surprisingly well, proving its effectiveness.

In a later project, I used this Liar's Dice AI as an opponent against a deep reinforcement learning model that I developed using Python, C++, TensorFlow, and OpenAI Gym. The goal of this project was to train the deep learning model through playing against the Liar's Dice AI, which allowed the model to learn from the AI's strategies and improve its gameplay.
