import { z } from "zod";
import { emailSchema } from "./common.schema";

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(6),
});

export type LoginFormData = z.infer<typeof loginSchema>;