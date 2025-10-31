import React from "react";

export default function InputField({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-lime-400 focus:outline-none"
      />
    </div>
  );
}
