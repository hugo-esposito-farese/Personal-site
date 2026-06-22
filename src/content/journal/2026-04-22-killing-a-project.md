---
title: "Killing a project deliberately"
date: 2026-04-22
tags: ["failure", "decision-making", "norminette-lsp"]
project: "norminette-lsp"
excerpt: "I killed the Norminette LSP project. Here's why that felt like the right call."
---

I killed the Norminette LSP project today.

Not by letting it rot — by making an active decision to stop and document why. That distinction matters to me.

The latency problem wasn't a bug. It was a constraint baked into the architecture. Python startup time means you can never get the sub-100ms response LSP clients expect. The only real fix — porting norminette to TypeScript — is a weeks-long project I don't want to take on right now.

So I stopped.

**What I'm taking from this:**

The mistake wasn't building the wrong thing. The mistake was spending two weeks on the wrong layer of the stack. I built the VS Code extension before I understood the fundamental constraint. If I'd started with a benchmark — *how fast is norminette, actually?* — I'd have found the problem in 20 minutes and either pivoted or stopped immediately.

Validate foundations first. Build user-facing things second.

The project is archived with a proper README explaining what happened. Someday someone might solve it better — or use it as a cautionary tale. Either way, it's not a dead repo with no context.

Moving on to building something with more upside.
