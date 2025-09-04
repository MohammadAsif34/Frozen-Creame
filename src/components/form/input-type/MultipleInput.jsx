import React, { useState } from "react";

const MultipleInput = ({ label, name, values, onChange, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      onChange([...values, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  const handleRemove = (index) => {
    const updated = values.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>

      {/* Input + Add button */}
      <div className="p-1 flex gap-2 mb-2 border border-gray-300 rounded-lg group focus-within:ring-2 focus-within:ring-rose-400 focus-within:border-rose-400">
        <input
          type="text"
          name={name}
          placeholder={placeholder || "Enter value"}
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-4 py-1 outline-none"
        />
        <button
          type="button"
          onClick={handleAdd}
          className="px-4 bg-rose-400 text-white rounded-md hover:bg-rose-600 transition-all cursor-pointer"
        >
          Add
        </button>
      </div>

      {/* Display chips */}
      <div className="flex flex-wrap gap-2">
        {values.map((val, index) => (
          <span
            key={index}
            className="px-2 py-0.5 bg-neutral-200 text-gray-700 rounded-md text-sm flex items-center gap-2 cursor-default"
          >
            {val}
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="text-red-500 font-bold cursor-pointer"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MultipleInput;
