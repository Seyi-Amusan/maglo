


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import AuthLayout from "@/components/layouts/AuthLayout";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import { toast } from "sonner";

import logo from "@/assets/Logo.png";
import image from "@/assets/images/image.png";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const { signUp } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate form
      if (!formData.fullName || !formData.email || !formData.password) {
        toast.error("Please fill in all fields");
        return;
      }

      if (formData.password.length < 8) {
        toast.error("Password must be at least 8 characters long");
        return;
      }

      // Create account with Appwrite
      await signUp(formData.email, formData.password, formData.fullName);
      
      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      // Error is already handled in the store
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
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
          required
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          required
          minLength="8"
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>

      <p className="text-sm text-gray-500 text-center mt-4">
        Already have an account?{" "}
        <a href="/auth/login" className="text-lime-500 font-medium hover:text-lime-600">
          Sign in
        </a>
      </p>
    </AuthLayout>
  );
}