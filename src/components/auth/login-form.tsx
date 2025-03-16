"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form method="post">
      <div>
        <Label htmlFor="username">Username</Label>
        <Input required placeholder="username" type="text" maxLength={20} />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input required type={showPassword ? "text" : "password"} />
      </div>
    </form>
  );
}
