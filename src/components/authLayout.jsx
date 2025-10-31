import React from "react";

export default function AuthLayout({ children, image }) {
  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="max-w-sm w-full">{children}</div>
      </div>
      <div className="hidden md:flex w-1/2 h-screen">
        <img src={image} alt="Illustration" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
