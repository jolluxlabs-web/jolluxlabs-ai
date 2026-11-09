import { getCollection, type CollectionEntry } from 'astro:content';

export type SectionKey = 'notes' | 'techniques' | 'prompts' | 'experiments';
export type Entry = CollectionEntry<SectionKey>;

export const sections: Record<SectionKey, { title: string; intro: string; icon: string }> = {
  notes: {
    title: 'Notes',
    intro: 'Concepts I have worked through, including the parts I still don’t understand.',
    icon: '/tiles/book.svg',
  },
  techniques: {
    title: 'Techniques',
    intro: 'Approaches I have used more than once, and when not to use them.',
    icon: '/tiles/hammer.svg',
  },
  prompts: {
    title: 'Prompts',
    intro: 'Templates to copy. Anything you need to fill in is marked with braces.',
    icon: '/tiles/paper.svg',
  },
  experiments: {
    title: 'Experiments',
    intro: 'Hypothesis, method, result, and what to change. Failures stay in.',
    icon: '/tiles/flask.svg',
  },
};

export const sectionKeys = Object.keys(sections) as SectionKey[];

export async function getEntries(section: SectionKey): Promise<Entry[]> {
  const entries = await getCollection(section, ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const entryUrl = (entry: Entry) => `/${entry.collection}/${entry.id}/`;

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
