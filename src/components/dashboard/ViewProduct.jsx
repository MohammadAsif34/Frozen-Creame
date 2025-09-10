import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { GetSingleProductsAPI } from "../../services/product.services";
import HeaderBack from "../navbar/HeaderBack";
import { toast } from "react-toastify";
import { GetSingleProductAPI } from "../../services/admin/product.service";

const ViewProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id :: ", id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      const res = await GetSingleProductAPI(id);
      if (res.status == "success") setProduct(res.data);
    };
    fetchProduct();
    setLoading(false);
  }, []);

  if (loading & !product) {
    return <div>Loading...</div>;
  }
  if (!product && !loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        <i className="fas fa-info-circle mr-2"></i> No product selected
      </div>
    );
  }

  const handleEdit = () => {
    let path = location.pathname.replace("view", "edit");
    navigate(path);
  };

  return (
    <>
      {/* <HeaderBack /> */}
      <div className="p-10 mt-2 bg-white shadow rounded-lg  mx-6">
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
                {product?.unit_value?.map((u) => (
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
          <div className="min-w-72 max-w-md aspect-square">
            <img
              src={product.picture}
              alt={product.name}
              className="rounded-lg shadow-lg w-full object-cover bg-gray-100"
            />
          </div>
        </div>

        <div className="p-4  grid grid-cols-4">
          {/* Tags */}
          <div>
            <h3 className="font-bold mb-2">Tags</h3>
            <ul className="list-disc ml-5 text-gray-700">
              {product.tags.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Features */}
          <div>
            <h3 className="font-bold mb-2">Features</h3>
            <ul className="list-disc ml-5 text-gray-700">
              {product.features.map((item, idx) => (
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
              <li>Calories (kcal): {product.nutrition_info.calories}</li>
              <li>Fat (g): {product.nutrition_info.fat}</li>
              <li>Sugar (g): {product.nutrition_info.sugar}</li>
              <li>Protien (g): {product.nutrition_info.protien}</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 px-4">
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
                product.eggless ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.eggless ? "Yes" : "No"}
            </span>
          </p>

          <p className="mb-2 font-semibold">
            <span>Available:</span>
            <span
              className={` px-2 font-semibold ${
                product?.stock > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {product?.stock > 0 ? "Yes" : "No"}
            </span>
          </p>

          <p className="mb-2 font-semibold">
            <span>Publish:</span>
            <span
              className={` px-2 font-semibold ${
                product.publish ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.publish ? "Yes" : "No"}
            </span>
          </p>
          <p className="mb-2">
            <span className="font-semibold">Rating:</span> ⭐ {product.rating} (
            {product.reviews} reviews)
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex gap-3 mt-8">
          <button
            className="px-6 py-2  text-rose-400 border rounded-full hover:bg-rose-500"
            onClick={() => handleEdit()}
          >
            <i className="fas fa-edit mr-2"></i>Edit
          </button>
          <button
            className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            onClick={() => toast.info("not available")}
          >
            <i className="fas fa-trash mr-2"></i>Delete
          </button>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default ViewProduct;
