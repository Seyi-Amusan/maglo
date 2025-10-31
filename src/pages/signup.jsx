import React, { useState } from "react";
import AuthLayout from "../components/authLayout";
import InputField from "../components/inputField";
import Button from "../components/button";
import clockImage from "../assets/images/image.png";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup:", formData);
    // TODO: integrate Appwrite signup later
  };

  return (
    <AuthLayout image={clockImage}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-gray-500">Get started with your free account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Full Name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />

          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <Button text="Sign up" type="submit" />
        </form>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-lime-500 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </AuthLayout>
  );
}
