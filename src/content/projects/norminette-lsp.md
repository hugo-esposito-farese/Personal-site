---
title: "Norminette LSP"
description: "A Language Server Protocol implementation for 42's norminette, bringing real-time style checking directly into VS Code and Neovim."
status: "abandoned"
startDate: 2026-01-10
endDate: 2026-02-28
featured: false
technologies: ["TypeScript", "LSP", "Python", "Node.js"]
links:
  github: "https://github.com/hugo-ef/norminette-lsp"
updates:
  - date: 2026-01-20
    text: "Got basic diagnostics working in VS Code. Slow — 800ms per save."
  - date: 2026-02-10
    text: "Tried caching but the latency is a fundamental issue with spawning a Python process per-save."
  - date: 2026-02-28
    text: "Abandoned. A better approach would be to port norminette to TypeScript or use a daemon. Not worth the effort for now."
---

## What I tried to build

42's norminette enforces a strict C style guide. The feedback loop is broken: you write code, you run `norminette` manually, you fix errors, you repeat. I wanted to bring that feedback into the editor in real time — red underlines as you type, just like a linter.

## Why I abandoned it

The latency problem was fundamental, not fixable with hacks. Norminette is a Python tool. Every save spawned a new Python process, which took 600–900ms. LSP expects sub-100ms. I tried a daemon approach but norminette's architecture made it painful to keep alive as a persistent process.

The right fix — porting norminette to TypeScript — is a larger project than I wanted to take on.

## What I learned

**Validate the technical foundation before building the UX.** I spent two weeks on a VS Code extension before I understood the latency problem. Twenty minutes of benchmarking upfront would have changed my entire approach.

This was the first project I killed deliberately instead of leaving to rot. That felt like progress.
