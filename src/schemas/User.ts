import { z } from "zod";

// start of auth schema
export const loginSchema = z.object({
  username: z.string().min(1, { message: "username is required" }),
  password: z.string().min(1, { message: "password is required" }),
});

export const registerSchema = z.object({
  firstName: z.string().min(1, { message: "firstName is required" }),
  lastName: z.string().min(1, { message: "lastName is required" }),
  username: z.string().min(1, { message: "username is required" }),
  email: z.string().email().min(1, { message: "email is required" }),
  password: z.string().min(1, { message: "password is required" }),
});
// end of auth schema

export type LoginFormType = z.infer<typeof loginSchema>;
export type RegisterFormType = z.infer<typeof registerSchema>;
