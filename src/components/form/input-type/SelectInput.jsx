import React from "react";

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
}) => {
  return (
    <div>
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-0 text-gray-500 
                   focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-white"
        required
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value || opt}>
            {opt.label || opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
