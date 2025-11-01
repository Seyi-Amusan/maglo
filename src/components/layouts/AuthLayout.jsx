import React from "react";

export default function AuthLayout({ children, imageSrc, logoSrc }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left section — form */}
      <div className="flex-1 flex items-center justify-center bg-white p-6 sm:p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          {logoSrc && (
            <div className="mb-8 flex justify-start md:justify-start">
              <img src={logoSrc} alt="Logo" className="h-8 w-auto" />
            </div>
          )}

          {/* Form content */}
          <div className="flex flex-col justify-center">
            {children}
          </div>
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