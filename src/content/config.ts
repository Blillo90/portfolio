import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
schema: z.object({    
    name: z.string(),
    date: z.string(),
    state: z.enum(['Terminado', 'En proceso'])

  }),
});

export const collections = { projects } 