
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Toaster } from "sonner";
import { useAuthStore } from "@/store/authStore";
import AuthLayout from "@/components/layouts/AuthLayout";
import logo from "@/assets/Logo.png";
import image from "@/assets/images/Image.png";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";

export default function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { login } = useAuthStore();
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      await login(data.email, data.password);
      navigate("/dashboard");
    } catch (error) {
      // Error is already handled in the store
      console.error("Login error:", error);
    }
  }

  return (
    <>
      <Toaster />
      <AuthLayout imageSrc={image} logoSrc={logo}>
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back</h1>
          <p className="text-sm text-gray-500 mb-8">
            Welcome back! Please enter your details
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              register={register}
              required
              error={errors.email}
            />

            <InputField
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              register={register}
              required
              error={errors.password}
            />

            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                <span>Remember for 30 Days</span>
              </label>
              <a href="/forgot" className="underline hover:text-gray-900">
                Forgot password
              </a>
            </div>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Don't have an account?{" "}
              <a href="/auth/signup" className="text-gray-900 font-medium underline hover:text-gray-700">
                Sign up for free
              </a>
            </p>
          </form>
        </div>
      </AuthLayout>
    </>
  );
}