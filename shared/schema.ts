import { z } from "zod";

export const contactMessages = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
  createdAt: z.date().default(() => new Date()),
});

export const insertContactMessageSchema = contactMessages.omit({ id: true, createdAt: true });

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = z.infer<typeof contactMessages>;
