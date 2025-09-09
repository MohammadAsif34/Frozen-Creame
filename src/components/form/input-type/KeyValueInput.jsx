import React from "react";

const KeyValueInput = ({ label, obj, onChange }) => {
  const handleChange = (key, value) => {
    onChange({ ...obj, [key]: value });
  };

  return (
    <div className="mb-4">
      <h3 className="block text-gray-700 font-semibold mb-4">{label}</h3>
      {Object.entries(obj).map(([key, value], index) => (
        <div key={index} className="flex gap-2 mb-2">
          <label className="min-w-30  capitalize">{key}</label>
          <span className="px-2">:</span>
          <input
            type="number"
            value={value}
            onChange={(e) => handleChange(key, e.target.value)}
            className="w-full border border-gray-300 text-gray-500 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:border-rose-400 focus:ring-rose-400"
          />
        </div>
      ))}
    </div>
  );
};

export default KeyValueInput;
