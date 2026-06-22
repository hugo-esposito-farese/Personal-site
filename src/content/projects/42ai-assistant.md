---
title: "42 AI Assistant"
description: "A CLI tool that helps 42 students understand project subjects, explore man pages, and get unstuck — without giving them the answer."
status: "active"
startDate: 2026-03-15
endDate: null
featured: true
technologies: ["Python", "Claude API", "Click", "Rich"]
links:
  github: "https://github.com/hugo-ef/42ai"
revenue: "€0"
updates:
  - date: 2026-04-01
    text: "Shipped v0.1 to 12 students in my cluster. Got solid feedback — the 'explain the subject' feature is the most used."
  - date: 2026-05-10
    text: "Added man page lookup and project-specific context. 30+ active users now."
  - date: 2026-06-05
    text: "Considering whether to open source it fully or build a web version. Talking to a few people about it."
---

## What I built

42 Paris gives you complex C projects and a manual page. No tutorials, no Stack Overflow shortcuts — just you and the norm. I kept getting stuck not on the code itself, but on understanding what exactly was being asked.

I built 42 AI Assistant to fill that gap: a terminal tool that reads your project subject, helps you understand what you're actually supposed to build, and can look up functions from man pages in plain English. It deliberately does not write code for you.

## Why it matters

The goal is to preserve the learning that makes 42 valuable while removing the friction of deciphering dense documentation alone. Most people either give up or cheat. This tries to create a third path.

## What I learned

- Working with structured prompts to preserve pedagogical intent is hard. It took about 20 iterations to get a prompt that helps without hand-holding.
- Distribution in a closed campus environment is basically word-of-mouth. No marketing, just asking people in the cluster.
- Students want confidence, not answers. The most successful feature is the one that says "here's what this project is really asking you to do."

## What's next

I want to understand if this is a real product or just a useful personal tool. Getting to 100 users will tell me a lot.
