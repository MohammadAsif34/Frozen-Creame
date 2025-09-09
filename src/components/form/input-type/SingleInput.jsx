import React from "react";

export const SingleInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-1">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-10 border border-gray-300 rounded-lg px-4  outline-0 focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-all duration-300"
        required
      />
    </div>
  );
};
