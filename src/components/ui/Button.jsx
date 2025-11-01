// src/components/Button.jsx
import React from "react";

export default function Button({ children, variant = "primary", ...props }) {
  const classes =
    variant === "primary"
      ? "w-full rounded-lg py-3 text-center font-medium text-gray-900 bg-lime-300 hover:opacity-95 transition"
      : "inline-block rounded-md px-4 py-2 border";

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
