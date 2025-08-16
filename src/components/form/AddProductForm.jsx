import React, { useEffect, useState } from "react";
import { SingleInput } from "./input-type/SingleInput";
import MultipleInput from "./input-type/MultipleInput";
import CheckboxInput from "./input-type/CheckboxInput";
import KeyValueInput from "./input-type/KeyValueInput";
import ImageUploadInput from "./input-type/ImageUploadInput";

const defaultForm = {
  name: "",
  sku: "",
  description: "",
  price: 0,
  discount_percent: 0,
  prepare_time_min: 0,
  unit: "kg",
  category: "",
  sub_category: "",
  flavour: "",
  weight: "",
  stock: "",
  tags: [],
  ingredients: [],
  customizable: false,
  featured: false,
  isAvailable: true,
  isEggless: false,
  allergens: [],
  creme: [],
  nutrition_info: {
    calories: 0,
    sugar_g: 0,
    fat_g: 0,
    protein_g: 0,
  },
  picture: "",
  album: [],
};
const AddProductForm = () => {
  const [formData, setFormData] = useState(defaultForm);
  const unicode = "FZ00";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };
  useEffect(() => {
    if (formData.name.trim() !== "") {
      const generatedSku =
        "FZ00_" +
        formData.name
          .trim()
          .toUpperCase()
          .replace(/\s+-/g, "_")
          .replace(/[^A-Z0-9_-]/g, "5");

      setFormData((prev) => ({
        ...prev,
        sku: generatedSku,
      }));
    }
  }, [formData.name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Product Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>

      {/* Single Inputs */}
      <div className="w-full grid grid-cols-2 gap-4 py-4">
        <SingleInput
          label="Product Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <SingleInput
          label="Sku"
          name="sku"
          value={formData.sku}
          //   onChange={handleChange2}
        />
      </div>
      <SingleInput
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      {/* grid-3  */}
      <div className="w-full grid grid-cols-3 gap-4 py-4">
        <SingleInput
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
        />
        <SingleInput
          label="Discount (%)"
          name="discount_percent"
          type="number"
          value={formData.discount_percent}
          onChange={handleChange}
        />
        <SingleInput
          label="Prepare Time (minutes)"
          name="prepare_time_min"
          type="number"
          value={formData.prepare_time_min}
          onChange={handleChange}
        />
        <SingleInput
          label="Unit"
          name="unit"
          value={formData.unit}
          onChange={handleChange}
        />
        <SingleInput
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <SingleInput
          label="Sub Category"
          name="sub_category"
          value={formData.sub_category}
          onChange={handleChange}
        />
        <SingleInput
          label="Stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
        />
      </div>

      {/* Multi Inputs */}
      {/* grid-2  */}
      <div className="w-full grid grid-cols-2 gap-4 py-4">
        <MultipleInput
          label="Tags"
          values={formData.tags}
          onChange={(newValues) =>
            setFormData({ ...formData, tags: newValues })
          }
        />
        <MultipleInput
          label="Ingredients"
          values={formData.ingredients}
          onChange={(newValues) =>
            setFormData({ ...formData, ingredients: newValues })
          }
        />
        <MultipleInput
          label="Allergens"
          values={formData.allergens}
          onChange={(newValues) =>
            setFormData({ ...formData, allergens: newValues })
          }
        />
        <MultipleInput
          label="Creme"
          values={formData.creme}
          onChange={(newValues) =>
            setFormData({ ...formData, creme: newValues })
          }
        />
      </div>

      {/* Boolean Checkboxes */}
      <div className="w-full grid grid-cols-3 gap-4 py-4">
        <CheckboxInput
          label="Customizable"
          name="customizable"
          checked={formData.customizable}
          onChange={handleChange}
        />
        <CheckboxInput
          label="Featured"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
        />
        <CheckboxInput
          label="Available"
          name="isAvailable"
          checked={formData.isAvailable}
          onChange={handleChange}
        />
        <CheckboxInput
          label="Eggless"
          name="isEggless"
          checked={formData.isEggless}
          onChange={handleChange}
        />
      </div>

      {/* Nutrition Info */}
      <KeyValueInput
        label="Nutrition Info"
        obj={formData.nutrition_info}
        onChange={(newObj) =>
          setFormData({ ...formData, nutrition_info: newObj })
        }
      />

      {/* Images */}
      <ImageUploadInput
        label="Main Picture"
        values={formData.picture}
        onChange={(val) => setFormData({ ...formData, picture: val })}
        single
      />
      <ImageUploadInput
        label="Album Images"
        values={formData.album}
        onChange={(val) => setFormData({ ...formData, album: val })}
      />

      <button
        type="submit"
        className="mt-6 px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 cursor-pointer"
      >
        Save Product
      </button>
      <button
        type="submit"
        className="mt-6 ml-4 px-6 py-2 border text-rose-500  rounded-lg hover:bg-rose-400 hover:text-white transition-all cursor-pointer"
      >
        Cancel
      </button>
    </form>
  );
};

export default AddProductForm;
