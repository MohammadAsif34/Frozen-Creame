import React from "react";

const KeyValueInput = ({ label, obj, onChange }) => {
  const handleChange = (key, value) => {
    onChange({ ...obj, [key]: value });
  };

  return (
    <div className="mb-4">
      <h3 className="block text-gray-700 font-semibold mb-2">{label}</h3>
      {Object.entries(obj).map(([key, value], index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            type="text"
            value={key}
            readOnly
            className="w-1/3 border rounded-lg px-2 py-1 bg-gray-100"
          />
          <input
            type="number"
            value={value}
            onChange={(e) => handleChange(key, e.target.value)}
            className="w-2/3 border rounded-lg px-2 py-1 focus:ring-2 focus:ring-rose-400"
          />
        </div>
      ))}
    </div>
  );
};

export default KeyValueInput;
