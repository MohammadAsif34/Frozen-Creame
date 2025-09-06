import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import // GetSingleProductsAPI,
// UpdateProductAPI,
"../../services/product.services";
import HeaderBack from "../navbar/HeaderBack";
import { toast } from "react-toastify";
import {
  GetSingleProductAPI,
  UpdateProductAPI,
} from "../../services/admin/product.service";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      console.log(id);
      const res = await GetSingleProductAPI(id);
      if (res.status === "success") setFormData(res.data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="p-6 text-center text-gray-500">Loading...</div>;
  }

  if (!formData) {
    return (
      <div className="p-6 text-center text-gray-500">
        <i className="fas fa-info-circle mr-2"></i> No product selected
      </div>
    );
  }

  // Handler for simple input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handler for nested nutrition info
  const handleNutritionChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      nutrition_info: {
        ...prev.nutrition_info,
        [name]: value,
      },
    }));
  };

  // Handlers for array fields (tags, features, ingredients, allergens)
  const handleArrayChange = (field, index, value) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData((prev) => ({
      ...prev,
      [field]: updatedArray,
    }));
  };

  const handleAddArrayItem = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const handleRemoveArrayItem = (field, index) => {
    const updatedArray = formData[field].filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      [field]: updatedArray,
    }));
  };

  // Handle unit_values array
  const handleUnitValueChange = (index, value) => {
    const updatedUnits = [...formData.unit_values];
    updatedUnits[index] = value;
    setFormData((prev) => ({
      ...prev,
      unit_values: updatedUnits,
    }));
  };

  const handleAddUnitValue = () => {
    setFormData((prev) => ({
      ...prev,
      unit_values: [...prev.unit_values, ""],
    }));
  };

  const handleRemoveUnitValue = (index) => {
    const updatedUnits = formData.unit_values.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      unit_values: updatedUnits,
    }));
  };

  // Handle image URL change (for now simple input, could extend to file upload)
  const handlePictureChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      picture: e.target.value,
    }));
  };

  // Save handler (replace with your API call)
  const handleSave = async () => {
    try {
      const res = await UpdateProductAPI(formData._id, formData);

      console.log("update product res :: ", res);
      if (res.status === "success") {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log("update api error :: ", error);
    }
    console.log("updated form-data :: ", formData);
    console.log("Saving product data:", formData);
    // TODO: Call your update API here and handle response

    // alert("Save functionality not implemented yet");
    window.history.back();
  };

  // Cancel handler
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <HeaderBack />
      <div className="p-10 pt-0 bg-white shadow rounded-lg mx-auto max-w-7xl">
        <p className="py-5 text-xl font-bold text-center underline">
          Edit Product
        </p>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <i className="fas fa-birthday-cake text-rose-500"></i>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-b-2 border-rose-500 font-bold text-2xl w-full max-w-xs"
            />
          </h2>
          <div>
            <p className="text-gray-500 text-sm">
              Added: {new Date(formData.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-500 text-sm">
              Updated: {new Date(formData.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="p-4 grid grid-cols-[2fr_1fr] gap-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="mb-2">
                <span className="font-semibold pr-2">SKU:</span>
                <input
                  type="text"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-full"
                />
              </p>
              <p className="mb-2">
                <span className="font-semibold pr-2">Flavour:</span>
                <input
                  type="text"
                  name="flavour"
                  value={formData.flavour}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-full"
                />
              </p>
              <p className="mb-2">
                <span className="font-semibold pr-2">Category:</span>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-full"
                />
              </p>
              <p className="mb-2">
                <span className="font-semibold pr-2">Sub-category:</span>
                <input
                  type="text"
                  name="sub_category"
                  value={formData.sub_category}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-full"
                />
              </p>
              <p className="mb-2 flex items-center gap-2">
                <span className="font-semibold pr-2">Price:</span>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-24"
                />
                <span className="line-through text-gray-400">
                  ₹{formData.price}
                </span>
              </p>
              <p className="mb-2 flex items-center gap-2">
                <span className="font-semibold pr-2">Final Price:</span>
                <input
                  type="number"
                  name="final_price"
                  value={formData.final_price}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-24 text-green-600 font-bold"
                />
                <span className="text-sm text-red-500">
                  ({formData.discount}% OFF)
                </span>
              </p>
              <p className="mb-2">
                <span className="font-semibold pr-2">Discount (%):</span>
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-24"
                />
              </p>
              <p className="mb-2">
                <span className="font-semibold pr-2">Sold:</span>
                <input
                  type="number"
                  name="sold"
                  value={formData.sold}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-24"
                />
              </p>
              <p className="mb-2">
                <span className="font-semibold pr-2">Stock:</span>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-24"
                />
              </p>
              <p className="mb-2">
                <span className="font-semibold pr-2">
                  Preparation Time (min):
                </span>
                <input
                  type="number"
                  name="prepare_time"
                  value={formData.prepare_time}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-24"
                />
              </p>

              <p className="mb-2">
                <span className="font-semibold pr-2">Unit:</span>
                <input
                  type="text"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-24"
                />
              </p>
              <div className="mb-2">
                <span className="font-semibold pr-2">Unit Values:</span>
                {formData.unit_values.map((u, idx) => (
                  <div key={idx} className="flex gap-2 items-center mb-1">
                    <input
                      type="text"
                      value={u}
                      onChange={(e) =>
                        handleUnitValueChange(idx, e.target.value)
                      }
                      className="border px-2 py-1 rounded flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveUnitValue(idx)}
                      className="text-red-500 font-bold px-2"
                    >
                      &times;
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddUnitValue}
                  className="text-blue-500"
                >
                  + Add Unit Value
                </button>
              </div>

              <p className="mb-2">
                <span className="font-semibold pr-2">Description:</span>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-full resize-none"
                  rows={4}
                />
              </p>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Product Picture URL
              </label>
              <input
                type="text"
                name="picture"
                value={formData.picture}
                onChange={handlePictureChange}
                className="border px-2 py-1 rounded w-full mb-4"
              />
              {formData.picture && (
                <img
                  src={formData.picture}
                  alt={formData.name}
                  className="rounded-lg shadow-lg h-64 w-full object-cover bg-gray-100"
                />
              )}
            </div>
          </div>
        </div>

        {/* Editable arrays section */}
        <div className="p-4 grid grid-cols-4 gap-6">
          {["tags", "features", "ingredients", "allergens"].map((field) => (
            <div key={field}>
              <h3 className="font-bold mb-2 capitalize">{field}</h3>
              {formData[field].map((item, idx) => (
                <div key={idx} className="flex gap-2 items-center mb-1">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) =>
                      handleArrayChange(field, idx, e.target.value)
                    }
                    className={`border px-2 py-1 rounded flex-1 ${
                      field === "allergens" ? "text-red-600" : "text-gray-700"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveArrayItem(field, idx)}
                    className="text-red-500 font-bold px-2"
                  >
                    &times;
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddArrayItem(field)}
                className="text-blue-500"
              >
                + Add {field.slice(0, -1)}
              </button>
            </div>
          ))}
        </div>

        <div className="flex ">
          {/* Nutrition info */}
          <div className="flex-1">
            <h3 className="font-bold mb-2">Nutrition Info (per slice)</h3>
            <div className="mb-2">
              <label className="block font-semibold">Calories:</label>
              <input
                type="number"
                name="calories"
                value={formData.nutrition_info.calories}
                onChange={handleNutritionChange}
                className="border px-2 py-1 rounded w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block font-semibold">Fat (g):</label>
              <input
                type="number"
                name="fat_g"
                value={formData.nutrition_info.fat_g}
                onChange={handleNutritionChange}
                className="border px-2 py-1 rounded w-full"
              />
            </div>
            <div>
              <label className="block font-semibold">Sugar (g):</label>
              <input
                type="number"
                name="sugar_g"
                value={formData.nutrition_info.sugar_g}
                onChange={handleNutritionChange}
                className="border px-2 py-1 rounded w-full"
              />
            </div>
          </div>
          {/* Boolean flags and rating */}
          <div className=" flex-1 pl-20   grid-cols-4 gap-4 px-4 mt-6">
            {[
              { label: "Featured", name: "is_featured" },
              { label: "Customizable", name: "customizable" },
              { label: "Eggless", name: "is_eggless" },
              { label: "Available", name: "is_available" },
              { label: "Publish", name: "is_publish" },
            ].map(({ label, name }) => (
              <label
                key={name}
                className="py-2 flex items-center gap-2 font-semibold cursor-pointer"
              >
                <input
                  type="checkbox"
                  name={name}
                  checked={formData[name]}
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex gap-3 pt-10  justify-center">
          <button
            className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-100 cursor-pointer"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="px-8 py-2 bg-blue-400 text-white rounded hover:bg-blue-600 cursor-pointer"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
