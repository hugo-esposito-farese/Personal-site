#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const today = new Date();
const dateStr = today.toISOString().split('T')[0];
const isoDate = today.toISOString().split('T')[0];

const title = process.argv[2] ?? 'New entry';
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .slice(0, 60);

const filename = `${dateStr}-${slug}.md`;
const targetDir = path.join(__dirname, '../src/content/journal');
const targetPath = path.join(targetDir, filename);

if (fs.existsSync(targetPath)) {
  console.error(`File already exists: ${targetPath}`);
  process.exit(1);
}

const template = `---
title: "${title}"
date: ${isoDate}
tags: []
excerpt: ""
---

Write your entry here.
`;

fs.writeFileSync(targetPath, template);
console.log(`Created: src/content/journal/${filename}`);
