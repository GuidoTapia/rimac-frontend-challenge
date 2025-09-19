import z from 'zod';

export const userSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  birthDay: z.string().date(),
});

export type UserSchemaDTO = z.infer<typeof userSchema>;
