import React, { useState } from "react";
import AuthLayout from "../components/authLayout";
import InputField from "../components/inputField";
import Button from "../components/button";
import clockImage from "../assets/images/image.png"; // use your uploaded image

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <AuthLayout image={clockImage}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-gray-500">Please enter your details</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-lime-400" />
              <span>Remember for 30 days</span>
            </label>
            <a href="#" className="text-lime-500 hover:underline">
              Forgot password
            </a>
          </div>
          <Button text="Sign in" type="submit" />
        </form>
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="#" className="text-lime-500 hover:underline">
            Sign up for free
          </a>
        </p>
      </div>
    </AuthLayout>
  );
}
