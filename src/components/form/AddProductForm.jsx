import React, { useEffect, useState } from "react";
import { SingleInput } from "./input-type/SingleInput";
import MultipleInput from "./input-type/MultipleInput";
import CheckboxInput from "./input-type/CheckboxInput";
import KeyValueInput from "./input-type/KeyValueInput";
import ImageUploadInput from "./input-type/ImageUploadInput";
import { CreateProductAPI } from "../../services/product.services";
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

const AddProductForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(defaultCakeForm);
  const [file, setFile] = useState(null);

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
          .replace(/[^A-Z0-9_-]/g, "_");

      setFormData((prev) => ({
        ...prev,
        sku: generatedSku,
      }));
    }
  }, [formData.name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await CreateProductAPI(formData, file);
      console.log("create product res :: ", res);
      if (res.status === "success") {
        toast.success(res.message);
        setFormData(defaultCakeForm);
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setFormData()
      setFile(null);
      setLoading(false);
    }
    // console.log("Final Product Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-lg rounded-lg relative"
    >
      <h2 className="text-2xl font-bold mb-6 text-rose-400">Add New Product</h2>
      <span
        className="px-2 text-blue-500 absolute top-3 right-5 cursor-pointer border-2 border-rose-400 rounded-md"
        onClick={() => {
          setFile(null);
          setFormData(defaultCakeForm);
          toast.success("Form reset");
        }}
      >
        reset
      </span>
      {/* Single Inputs */}
      <div className="grid grid-cols-[3fr_2fr] gap-4 mb-4">
        <div className="">
          <div className="w-full grid grid-cols-2 gap-4 ">
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
          <div className="py-2">
            <SingleInput
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
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
            <SingleInput
              label="Prepare Time (minutes)"
              name="prepare_time"
              type="number"
              value={formData.prepare_time}
              onChange={handleChange}
            />
            {/* <SingleInput
              label="Unit"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
            />*/}
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
            {/* <SelectInput
              label="Unit value"
              name="unit_values"
              value={formData.unit_values}
              options={type}
              onChange={handleChange}
              placeholder="select unit value"
            /> */}
            <SingleInput
              label="Stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            />
            <SelectInput
              label="Category"
              name="category"
              value={formData.category}
              options={type}
              onChange={handleChange}
              placeholder="select category"
            />
            <SelectInput
              // <SingleInput
              label="Sub Category"
              name="sub_category"
              options={
                formData.category == "cake"
                  ? cake
                  : formData.category === "pastries"
                  ? pastries
                  : formData.category === "savories"
                  ? savories
                  : []
              }
              value={formData.sub_category}
              onChange={handleChange}
              placeholder="select sub category"
            />
          </div>
        </div>
        <div className="flex-1">
          <ImageUploadInput label="Picture" values={file} onChange={setFile} />
        </div>
      </div>
      {/* grid-3  */}
      {/* <div className="w-full grid grid-cols-3 gap-4 py-4"></div> */}

      {/* Multi Inputs */}
      {/* grid-2  */}
      <div className="grid grid-cols-[2fr_1fr] gap-16 ">
        <div className="w-full grid grid-cols-2 gap-4  ">
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
      <div className="w-full grid grid-cols-3 gap-4 py-4">
        <CheckboxInput
          label="Customizable"
          name="is_customizable"
          checked={formData.is_customizable}
          onChange={handleChange}
        />
        <CheckboxInput
          label="Featured"
          name="is_featured"
          checked={formData.is_featured}
          onChange={handleChange}
        />
        <CheckboxInput
          label="Available"
          name="is_available"
          checked={formData.is_available}
          onChange={handleChange}
        />
        <CheckboxInput
          label="Eggless"
          name="is_eggless"
          checked={formData.is_eggless}
          onChange={handleChange}
        />
      </div>

      <div className="max-xl:flex-col flex gap-x-10">
        <div className="flex-1"></div>
      </div>
      {/* Nutrition Info */}
      <div className="w-1/2"></div>
      {/* Images */}
      {/* <ImageUploadInput
        label="Album Images"
        values={formData.album}
        onChange={(val) => setFormData({ ...formData, album: val })}
      /> */}

      <button
        type="submit"
        className={`mt-6 px-6 py-2 ${
          loading ? "bg-rose-400/50" : "bg-rose-400"
        } text-white rounded-lg hover:bg-rose-600 cursor-pointer`}
      >
        Save Product
        <span
          className={`inline-block  w-5 h-5 ${
            loading ? "border-4" : ""
          } border-t-transparent rounded-full translate-1 animate-spin`}
        ></span>
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
