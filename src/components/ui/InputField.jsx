// src/components/InputField.jsx
import React from "react";

export default function InputField({
  id,
  label,
  type = "text",
  placeholder,
  register,
  required = false,
  error,
  ...rest
}) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-offset-1
          ${error ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-green-300"}
        `}
        {...(register ? register(id, { required }) : {})}
        {...rest}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error.message || "This field is required"}</p>}
    </div>
  );
}
