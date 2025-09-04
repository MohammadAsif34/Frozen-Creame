import React, { useState, useEffect } from "react";

const ImageUploadInput = ({ label, values, onChange }) => {
  const [preview, setPreview] = useState(values || null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onChange(file);
    }
  };

  useEffect(() => {
    if (values && typeof values === "string") {
      setPreview(values); // if parent sets initial value
    }
  }, [values]);

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <div className="w-full border border-gray-300 rounded-lg px-4  outline-0 focus:ring-2 focus:ring-rose-400 focus:border-rose-400">
        {/* className="p-1 flex items-center gap-2 mb-2 border border-gray-300 rounded-lg group focus-within:ring-2 focus-within:ring-rose-400 focus-within:border-red-400" */}
        <span className="pl-2 text-rose-400 font-semibold border-r border-gray-300 pr-4 py-2 cursor-defaul">Picture</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="flex-1 outline-0 px-3 py-2 cursor-pointer"
        />
      </div>

      {preview && (
        <div className="p-5">
          <img
            src={preview}
            alt="preview"
            className="w-full h-72 bg-gray-200 rounded-lg object-center object-contain"
          />
          <em className="text-gray-400 block mt-1">
            {typeof values === "string" ? "Uploaded from URL" : "Preview"}
          </em>
        </div>
      )}
    </div>
  );
};

export default ImageUploadInput;
