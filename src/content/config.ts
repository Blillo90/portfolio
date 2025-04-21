import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
schema: z.object({    
    name: z.string(),
    date: z.string(),
    state: z.enum(['Terminado', 'En proceso']),
    img: z.string().optional(),
    prog_logos: z.array(z.string()).optional(),
    url: z.string().url().optional(),
  }),
});

export const collections = { projects } 