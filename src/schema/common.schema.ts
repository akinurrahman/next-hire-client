import { z } from "zod";

export const sanitizeEmail = (email: string) => email.toLowerCase().trim();

export const emailSchema = z
  .string({ required_error: "Email is required" })
  .email("Not a valid email")
  .transform(sanitizeEmail);
