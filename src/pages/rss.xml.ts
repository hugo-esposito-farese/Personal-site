import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const journal = await getCollection('journal');
  const sorted = journal.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: 'Hugo EF — Journal',
    description:
      'Build-in-public updates, reflections on projects, and things I\'m learning.',
    site: context.site!,
    items: sorted.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.excerpt ?? entry.data.title,
      link: `/journal/${entry.id}/`,
      categories: entry.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
