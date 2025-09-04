import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetSingleProductsAPI } from "../../services/product.services";
import HeaderBack from "../navbar/HeaderBack";

const ViewProduct = () => {
  const { id } = useParams();
  console.log("id :: ", id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await GetSingleProductsAPI(id);
      console.log("single product ::> ", res);
      if (res.status == "success") {
        setProduct(res.cake);
      }
    };
    fetchProduct();
  }, []);

  if (!product) {
    return (
      <div className="p-6 text-center text-gray-500">
        <i className="fas fa-info-circle mr-2"></i> No product selected
      </div>
    );
  }

  return (
    <>
      <HeaderBack />
      <div className="p-10 bg-white shadow rounded-lg  mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <i className="fas fa-birthday-cake text-rose-500"></i>
            {product.name}
          </h2>
          <div>
            <p className="text-gray-500 text-sm">
              Added: {new Date(product.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-500 text-sm">
              Updated: {new Date(product.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="p-4  grid grid-cols-[2fr_1fr]">
          <div className="grid grid-cols-2">
            <div>
              <p className="mb-2">
                <span className="font- pr-2">SKU:</span> {product.sku}
              </p>
              <p className="mb-2">
                <span className="font- pr-2">Name:</span>
                <span className=" font-bold text-lg">{product.name}</span>
              </p>
              <p className="mb-2">
                <span className="font- pr-2">Flavour:</span>
                {product.flavour}
              </p>
              <span className="font- pr-2">Category:</span>
              {product.category}
              <p className="mb-2"></p>
              <p className="mb-2">
                <span className="font- pr-2">Sub-category:</span>
                {product.sub_category}
              </p>
              <p className="mb-2">
                <span className="font- pr-2">Price:</span>{" "}
                <span className="text-green-600 font-bold mr-3">
                  ₹{product.final_price}
                </span>
                <span className="line-through text-gray-400">
                  ₹{product.price}
                </span>
                <span className="text-sm text-red-500">
                  ({product.discount}% OFF)
                </span>
              </p>
              <p className="mb-2">
                <span className="font-semibold pr-2">Sold:</span>
                {product.sold}
              </p>
              <p className="mb-2">
                <span className="font-semibold pr-2">Stock:</span>
                {product.stock}
              </p>
              <p className="mb-2">
                <span className="font-semibold pr-2">Preparation Time:</span>{" "}
                {product.prepare_time} min.
              </p>
              <p className="mb-2">
                <span className="font-semibold pr-2">Unit:</span>
                {product?.unit_values.map((u) => (
                  <span className="pr-1">
                    {u}
                    {product.unit + ","}
                  </span>
                ))}
              </p>
              <p className="mb-2">
                <span className="font-semibold pr-2">Description:</span>
                {product.description}
              </p>
            </div>
            <div></div>
          </div>
          {/* image  */}
          <div className="">
            <img
              src={product.picture}
              alt={product.name}
              className="rounded-lg shadow-lg h-96 w-full object-cover bg-gray-100"
            />
          </div>
        </div>

        <div className="p-4  grid grid-cols-4">
          {/* Tags */}
          <div>
            <h3 className="font-bold mb-2">Tags</h3>
            <ul className="list-disc ml-5 text-gray-700">
              {product.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Features */}
          <div>
            <h3 className="font-bold mb-2">Features</h3>
            <ul className="list-disc ml-5 text-gray-700">
              {product.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Ingredients */}
          <div>
            <h3 className="font-bold mb-2">Ingredients</h3>
            <ul className="list-disc ml-5 text-gray-700">
              {product.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Allergens */}
          <div>
            <h3 className="font-bold mb-2">Allergens</h3>
            <ul className="list-disc ml-5 text-red-600">
              {product.allergens.map((allergen, idx) => (
                <li key={idx}>{allergen}</li>
              ))}
            </ul>
          </div>

          {/* Nutrition */}
          <div>
            <h3 className="font-bold mb-2">Nutrition Info (per slice)</h3>
            <ul className="text-gray-700">
              <li>Calories: {product.nutrition_info.calories}</li>
              <li>Fat: {product.nutrition_info.fat_g}</li>
              <li>Sugar: {product.nutrition_info.sugar_g}</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-4 px-4">
          <p className="mb-2 font-semibold">
            <span>Featured:</span>
            <span
              className={` px-2 font-semibold ${
                product.is_featured ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.is_featured ? "Yes" : "No"}
            </span>
          </p>
          <p className="mb-2 font-semibold">
            <span>Customizable:</span>
            <span
              className={` px-2 font-semibold ${
                product.customizable ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.customizable ? "Yes" : "No"}
            </span>
          </p>
          <p className="mb-2 font-semibold">
            <span>Eggless:</span>
            <span
              className={` px-2 font-semibold ${
                product.is_eggless ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.is_eggless ? "Yes" : "No"}
            </span>
          </p>
          <p className="mb-2 font-semibold">
            <span>Availabel:</span>
            <span
              className={` px-2 font-semibold ${
                product.is_available ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.is_available ? "Yes" : "No"}
            </span>
          </p>
          <p className="mb-2 font-semibold">
            <span>Publish:</span>
            <span
              className={` px-2 font-semibold ${
                product.is_publish ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.is_publish ? "Yes" : "No"}
            </span>
          </p>
          <p className="mb-2">
            <span className="font-semibold">Rating:</span> ⭐ {product.rating} (
            {product.reviews} reviews)
          </p>
        </div>
      </div>

      {/* Image + Info */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12"> */}
      {/* Image */}

      {/* Details */}
      {/* <div>
          <p className="mb-2">
            <span className="font-semibold">Origin:</span> {product.origin}
          </p> */}
      {/* 
          <p className="mb-2">
            <span className="font-semibold">Eggless:</span>{" "}
            {product.isEggless ? (
              <span className="text-green-600">Yes</span>
            ) : (
              <span className="text-red-600">No</span>
            )}
          </p> */}

      {/* <p className="mb-2 font-semibold">
            <span>Eggless:</span>
            <span
              className={` px-2 font-semibold ${
                product.isEggless ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.isEggless ? "Yes" : "No"}
            </span>
          </p>
          <p className="mb-2 font-semibold">
            <span>Customizable:</span>
            <span
              className={` px-2 font-semibold ${
                product.customizable ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.customizable ? "Yes" : "No"}
            </span>
          </p>
        </div>
      </div> */}

      {/* Extra Info */}
      {/* <div className="mt-6 grid grid-cols-2">
        <div>
          <h3 className="text-lg font-bold mb-2">Description</h3>
          <p className="text-gray-700">{product.description}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Tags</h3>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"> */}
      {/* Tags & Creme */}
      {/* <div className="mt-6 flex flex-wrap gap-2">
          {product.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <span className="font-bold">Creme Types:</span>{" "}
          {product.creme.join(", ")}
        </div> */}

      {/* Footer Actions */}
      <div className="flex gap-3 mt-8">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <i className="fas fa-edit mr-2"></i>Edit
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          <i className="fas fa-trash mr-2"></i>Delete
        </button>
      </div>
      {/* </div> */}
    </>
  );
};

export default ViewProduct;
