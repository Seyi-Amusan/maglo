import React from "react";

export default function AuthLayout({ children, imageSrc, logoSrc }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left section — form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white p-8">
        <div className="max-w-md w-full">
          {/* Logo */}
          {logoSrc && (
            <div className="mb-8 flex justify-start">
              <img src={logoSrc} alt="Logo" className="h-8 w-auto" />
            </div>
          )}

          {/* Form content */}
          {children}
        </div>
      </div>

      {/* Right section — image */}
      <div className="hidden md:flex md:w-1/2">
        <img
          src={imageSrc}
          alt="Auth illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
