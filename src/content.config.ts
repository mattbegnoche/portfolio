import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.string(),
    role: z.string(),
    year: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    icon: z.string().optional(),
    mockup: z.string().optional(),
    quote: z.string().optional(),
    attribution: z.string().optional(),
    avatar: z.string().optional(),
    repoUrl: z.url().optional(),
    liveUrl: z.url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
