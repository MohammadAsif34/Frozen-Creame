import React, { useState } from "react";



export default function CakeForm() {
  const [formData, setFormData] = useState({
    id: "",
    sku: "",
    name: "",
    description: "",
    price: "",
    price_after_discount: "",
    discount_percent: "",
    picture: "",
    album: "",
    allergens: "",
    creme: "",
    rating: "",
    reviews: "",
    pound: "",
    sold_count: "",
    prepare_time: "",
    tags: "",
    flavour: "",
    isEggless: false,
    manufacturer: "",
    origin: "",
    featured: false,
    date_added: "",
    date_updated: "",
    ingredients: "",
    nutrition_calories: "",
    nutrition_fat: "",
    nutrition_sugar: "",
    customizable: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
    console.log("Cake Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 border border-rose-200"
    >
      <h2 className="text-2xl font-bold text-rose-500 mb-6">Add New Cake</h2>

      <InputField
        label="ID"
        name="id"
        value={formData.id}
        onChange={handleChange}
      />
      <InputField
        label="SKU"
        name="sku"
        value={formData.sku}
        onChange={handleChange}
      />
      <InputField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <InputField
        label="Price"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
      />
      <InputField
        label="Price After Discount"
        name="price_after_discount"
        type="number"
        value={formData.price_after_discount}
        onChange={handleChange}
      />
      <InputField
        label="Discount Percent"
        name="discount_percent"
        type="number"
        value={formData.discount_percent}
        onChange={handleChange}
      />
      <InputField
        label="Picture URL"
        name="picture"
        value={formData.picture}
        onChange={handleChange}
      />
      <InputField
        label="Album (comma-separated)"
        name="album"
        value={formData.album}
        onChange={handleChange}
      />
      <InputField
        label="Allergens (comma-separated)"
        name="allergens"
        value={formData.allergens}
        onChange={handleChange}
      />
      <InputField
        label="Creme Types (comma-separated)"
        name="creme"
        value={formData.creme}
        onChange={handleChange}
      />
      <InputField
        label="Rating"
        name="rating"
        type="number"
        step="0.1"
        value={formData.rating}
        onChange={handleChange}
      />
      <InputField
        label="Reviews Count"
        name="reviews"
        type="number"
        value={formData.reviews}
        onChange={handleChange}
      />
      <InputField
        label="Pound"
        name="pound"
        type="number"
        value={formData.pound}
        onChange={handleChange}
      />
      <InputField
        label="Sold Count"
        name="sold_count"
        type="number"
        value={formData.sold_count}
        onChange={handleChange}
      />
      <InputField
        label="Prepare Time"
        name="prepare_time"
        value={formData.prepare_time}
        onChange={handleChange}
      />
      <InputField
        label="Tags (comma-separated)"
        name="tags"
        value={formData.tags}
        onChange={handleChange}
      />
      <InputField
        label="Flavour"
        name="flavour"
        value={formData.flavour}
        onChange={handleChange}
      />

      <div className="mb-4">
        <label className="block text-rose-500 font-medium mb-1">Eggless</label>
        <input
          type="checkbox"
          name="isEggless"
          checked={formData.isEggless}
          onChange={handleChange}
          className="mr-2"
        />
      </div>

      <InputField
        label="Manufacturer"
        name="manufacturer"
        value={formData.manufacturer}
        onChange={handleChange}
      />
      <InputField
        label="Origin"
        name="origin"
        value={formData.origin}
        onChange={handleChange}
      />

      <div className="mb-4">
        <label className="block text-rose-500 font-medium mb-1">Featured</label>
        <input
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
          className="mr-2"
        />
      </div>

      <InputField
        label="Date Added"
        name="date_added"
        type="date"
        value={formData.date_added}
        onChange={handleChange}
      />
      <InputField
        label="Date Updated"
        name="date_updated"
        type="date"
        value={formData.date_updated}
        onChange={handleChange}
      />
      <InputField
        label="Ingredients (comma-separated)"
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
      />
      <InputField
        label="Nutrition Calories"
        name="nutrition_calories"
        type="number"
        value={formData.nutrition_calories}
        onChange={handleChange}
      />
      <InputField
        label="Nutrition Fat"
        name="nutrition_fat"
        value={formData.nutrition_fat}
        onChange={handleChange}
      />
      <InputField
        label="Nutrition Sugar"
        name="nutrition_sugar"
        value={formData.nutrition_sugar}
        onChange={handleChange}
      />

      <div className="mb-4">
        <label className="block text-rose-500 font-medium mb-1">
          Customizable
        </label>
        <input
          type="checkbox"
          name="customizable"
          checked={formData.customizable}
          onChange={handleChange}
          className="mr-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-rose-400 text-white font-semibold py-2 rounded hover:bg-rose-500 transition"
      >
        Save Cake
      </button>
    </form>
  );
}
