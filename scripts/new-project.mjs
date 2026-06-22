#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const today = new Date().toISOString().split('T')[0];

const title = process.argv[2] ?? 'New Project';
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .slice(0, 60);

const filename = `${slug}.md`;
const targetDir = path.join(__dirname, '../src/content/projects');
const targetPath = path.join(targetDir, filename);

if (fs.existsSync(targetPath)) {
  console.error(`File already exists: ${targetPath}`);
  process.exit(1);
}

const template = `---
title: "${title}"
description: "One-sentence description."
status: "active"
startDate: ${today}
endDate: null
featured: false
technologies: []
links:
  github: ""
  live: ""
updates: []
---

## What I built

...

## What I learned

...
`;

fs.writeFileSync(targetPath, template);
console.log(`Created: src/content/projects/${filename}`);
