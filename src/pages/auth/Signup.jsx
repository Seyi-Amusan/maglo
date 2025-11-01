import React, { useState } from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";

import logo from "@/assets/logo.png";
import image from "@/assets/images/image.png";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    // later: integrate with Appwrite Auth here
  };

  return (
    <AuthLayout logoSrc={logo} imageSrc={image}>
      <h2 className="text-2xl font-semibold mb-2">Create new account</h2>
      <p className="text-gray-500 mb-6">
        Welcome back! Please enter your details
      </p>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          name="fullName"
          placeholder="Mahfuzul Nabil"
          value={formData.fullName}
          onChange={handleChange}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
        />

        <Button type="submit">Create Account</Button>
      </form>

      <p className="text-sm text-gray-500 text-center mt-4">
        Already have an account?{" "}
        <a href="/auth/login" className="text-lime-500 font-medium">
          Sign in
        </a>
      </p>
    </AuthLayout>
  );
}
