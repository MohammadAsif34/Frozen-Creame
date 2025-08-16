import React from "react";

const CheckboxInput = ({ label, name, checked, onChange }) => {
  return (
    <div className="flex items-center gap-2 mb-3">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-rose-500 focus:ring-rose-400 rounded"
      />
      <label htmlFor={name} className="text-gray-700 font-medium">
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
