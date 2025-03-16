"use client";
import { useActionState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signup } from "@/lib/actions";

export function RegisterForm() {
  const [state, action, pending] = useActionState(signup, undefined);
  return (
    <section className="w-full">
      <form action={action} className="flex flex-col gap-5">
        <div>
          <Label>First Name (Optional)</Label>
          <Input name="firstName" placeholder="John" type="text" />
        </div>
        {state?.errors?.firstName && <p>{state.errors.firstName}</p>}
        <div>
          <Label>Last Name (Optional)</Label>
          <Input name="lastName" placeholder="Doe" type="text" />
        </div>
        {state?.errors?.lastName && <p>{state.errors.lastName}</p>}
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            name="username"
            placeholder="johndoe123"
            type="text"
            required
          />
        </div>
        {state?.errors?.username && <p>{state.errors.username}</p>}
        <div>
          <Label htmlFor="email">Email </Label>
          <Input
            name="email"
            placeholder="johndoe@mail.com"
            type="email"
            required
          />
        </div>
        {state?.errors?.email && <p>{state.errors.email}</p>}
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            placeholder="Password"
            type="password"
            required
          />
        </div>
        {state?.errors?.password && <p>{state.errors.password}</p>}
        <Button disabled={pending} type="submit">
          Register
        </Button>
      </form>
    </section>
  );
}
