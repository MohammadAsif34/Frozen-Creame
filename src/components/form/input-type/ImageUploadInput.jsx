import React, { useState } from "react";

const ImageUploadInput = ({
  label,
  name,
  values,
  onChange,
  single = false,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      if (single) {
        onChange(inputValue.trim());
      } else {
        onChange([...values, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const handleRemove = (index) => {
    const updated = values.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <div className="p-1 flex gap-2 mb-2 border border-gray-300 rounded-lg group focus-within:ring-2 focus-within:ring-rose-400 focus-within:border-red-400">
        <input
          type="text"
          name={name}
          placeholder="Enter image URL"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 outline-0 px-3"
        />
        <button
          type="button"
          onClick={handleAdd}
          className="px-4 py-1 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
        >
          Add
        </button>
      </div>
      {!single ? (
        <div className="flex flex-wrap gap-2">
          {values.map((val, index) => (
            <div key={index} className="relative">
              <img
                src={val}
                alt="preview"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      ) : (
        values && (
          <img
            src={values}
            alt="preview"
            className="w-40 h-40 rounded-lg object-cover"
          />
        )
      )}
    </div>
  );
};

export default ImageUploadInput;
