import {
  loginSchema,
  RegisterFormState,
  registerSchema,
} from "@/lib/definitions";
import { prisma } from "@/lib/prisma";
import { createSession, deleteSession } from "@/lib/session";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function signup(formData: FormData, state: RegisterFormState) {
  const validatedFields = registerSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, username, email, password } =
    validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return {
      errors: {
        email: ["Email is already in use."],
      },
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    },
  });

  createSession(newUser.id);
  redirect("/dashboard");
}

export async function signin() {}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
