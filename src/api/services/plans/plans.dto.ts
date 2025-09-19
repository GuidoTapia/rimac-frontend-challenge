import z from 'zod';

export const planSchema = z.object({
  name: z.string(),
  price: z.number(),
  description: z.array(z.string()),
  age: z.number(),
});

export type PlanSchemaDTO = z.infer<typeof planSchema>;
