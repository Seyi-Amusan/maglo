import React from "react";

export default function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-lime-400 hover:bg-lime-500 text-white font-semibold py-2 px-4 rounded-lg transition"
    >
      {text}
    </button>
  );
}
