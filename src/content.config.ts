import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const entries = (folder: string) =>
  defineCollection({
    loader: glob({ pattern: '**/*.md', base: `./src/content/${folder}` }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
  });

export const collections = {
  notes: entries('notes'),
  techniques: entries('techniques'),
  prompts: entries('prompts'),
  experiments: entries('experiments'),
};
