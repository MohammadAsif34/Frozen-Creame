import React, { useEffect, useState } from "react";
import { SingleInput } from "./input-type/SingleInput";
import MultipleInput from "./input-type/MultipleInput";
import CheckboxInput from "./input-type/CheckboxInput";
import KeyValueInput from "./input-type/KeyValueInput";
import ImageUploadInput from "./input-type/ImageUploadInput";
import { toast } from "react-toastify";
import { defaultCakeForm } from "../../data/defaultData";
import SelectInput from "./input-type/SelectInput";
import {
  cake,
  pastries,
  savories,
  type,
  unit_type,
} from "../../data/optionData";

import { useDispatch, useSelector } from "react-redux";
import {
  CreateProductAPI,
  UpdateProductAPI,
} from "../../services/admin/product.service";
import { AddProduct } from "../../redux/slice/productSlice";

const ProductForm = ({ product = null, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(defaultCakeForm);
  const [file, setFile] = useState(null);

  const user = useSelector((s) => s.user.data);
  const dispatch = useDispatch();
  // const products = useSelector((s) => s.product);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  useEffect(() => {
    if (!product && formData.name.trim() !== "") {
      const generatedSku =
        "FZ00_" +
        formData.name
          .trim()
          .toUpperCase()
          .replace(/\s+-/g, "_")
          .replace(/[^A-Z0-9_-]/g, "_");

      setFormData((prev) => ({
        ...prev,
        sku: generatedSku,
      }));
    }
  }, [formData.name, product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      formData.seller = user._id;
      // console.log(formData);
      const res = await CreateProductAPI(formData, file);
      if (res.status === "success") {
        toast.success(res.message);
        dispatch(AddProduct(res.data));
        setFormData(defaultCakeForm);
      } else {
        toast.error(res.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Error submitting the form");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(defaultCakeForm);
    setFile(null);
    toast.success("Form reset");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white shadow-lg rounded-lg relative"
      >
        <h2 className="text-2xl font-bold mb-6 text-rose-400">
          {product ? "Edit Product" : "Add New Product"}
        </h2>
        <span
          className="px-4 py-1 text-rose-400 absolute top-5 right-5 cursor-pointer border rounded-full"
          onClick={handleReset}
        >
          reset
        </span>

        {/* Single Inputs */}
        <div className="grid grid-cols-[3fr_2fr] gap-8 mb-4">
          <div>
            <div className="w-full grid grid-cols-2 gap-8 ">
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
                readOnly={!!product} // Prevent SKU editing in edit mode
              />
            </div>
            <div className="py-2">
              <SingleInput
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-3 gap-8">
              <SingleInput
                label="Flavour"
                name="flavour"
                type="text"
                value={formData.flavour}
                onChange={handleChange}
              />
              <SingleInput
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
              />
              <SingleInput
                label="Discount (%)"
                name="discount"
                type="number"
                value={formData.discount}
                onChange={handleChange}
              />
              <SelectInput
                label="Category"
                name="category"
                value={formData.category}
                options={type}
                onChange={handleChange}
                placeholder="Select category"
              />
              <SelectInput
                label="Sub Category"
                name="sub_category"
                options={
                  formData.category === "cake"
                    ? cake
                    : formData.category === "pastries"
                    ? pastries
                    : formData.category === "savories"
                    ? savories
                    : []
                }
                value={formData.sub_category}
                onChange={handleChange}
                placeholder="Select sub category"
              />
              <SingleInput
                label="Prepare Time (minutes)"
                name="prepare_time"
                type="number"
                value={formData.prepare_time}
                onChange={handleChange}
              />
              <SelectInput
                label="Unit"
                name="unit"
                value={formData.unit}
                options={unit_type}
                onChange={handleChange}
                placeholder="Select unit type"
              />
              <SingleInput
                label="Unit value"
                name="unit_values"
                value={formData.unit_values}
                onChange={handleChange}
              />
              <SingleInput
                label="Stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex-1 ">
            <ImageUploadInput
              label="Picture"
              values={file}
              onChange={setFile}
            />
          </div>
        </div>

        {/* Multi Inputs */}
        <div className="grid grid-cols-[2fr_1fr] gap-16 ">
          <div className="w-full grid grid-cols-2 gap-8">
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
            <MultipleInput
              label="Features"
              values={formData.features}
              onChange={(newValues) =>
                setFormData({ ...formData, features: newValues })
              }
            />
          </div>
          <div className="px-4">
            <KeyValueInput
              label="Nutrition Info"
              obj={formData.nutrition_info}
              onChange={(newObj) =>
                setFormData({ ...formData, nutrition_info: newObj })
              }
            />
          </div>
        </div>

        {/* Boolean Checkboxes */}
        <div className="w-full grid grid-cols-1 py-4">
          <CheckboxInput
            label="Customizable"
            name="is_customizable"
            checked={formData.customizable}
            onChange={handleChange}
          />
          <CheckboxInput
            label="Eggless"
            name="eggless"
            checked={formData.eggless}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className={`mt-6 px-6 py-2 ${
            loading ? "bg-rose-400/50" : "bg-rose-400"
          } text-white rounded-lg hover:bg-rose-600 cursor-pointer`}
          disabled={loading}
        >
          {product ? "Update Product" : "Save Product"}
          <span
            className={`inline-block w-5 h-5 ${
              loading ? "border-4" : ""
            } border-t-transparent rounded-full translate-1 animate-spin`}
          ></span>
        </button>
        <button
          type="button"
          onClick={() => onCancel && onCancel()}
          className="mt-6 ml-4 px-6 py-2 border text-rose-500 rounded-lg hover:bg-rose-400 hover:text-white transition-all cursor-pointer"
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default ProductForm;
