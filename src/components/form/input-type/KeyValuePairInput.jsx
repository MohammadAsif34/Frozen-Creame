import React, { useState } from "react";

export const KeyValuePairInput = ({ item }) => {
  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");

  //   const handleAdd = () => {
  //     if (!title || !description) return;
  //     onAdd({ title, description });
  //     setTitle("");
  //     setDescription("");
  //   };

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleAdd}
        className="bg-pink-500 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>
    </div>
  );
};
