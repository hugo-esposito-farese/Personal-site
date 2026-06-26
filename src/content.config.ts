import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['active', 'shipped', 'paused', 'abandoned', 'demo']),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional().nullable(),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
    technologies: z.array(z.string()),
    links: z
      .object({
        live: z.string().optional(),
        github: z.string().optional(),
        demo: z.string().optional(),
      })
      .optional(),
    revenue: z.string().optional(),
    logo: z.string().nullish(),
    updates: z
      .array(
        z.object({
          date: z.coerce.date(),
          text: z.string(),
        })
      )
      .optional()
      .default([]),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    project: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { projects, journal };
