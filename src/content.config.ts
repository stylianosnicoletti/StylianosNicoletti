import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    order: z.number().int().positive(),
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    slug: z.string(),
  }),
});

export const collections = { projects: projectsCollection };
