import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useNavigate } from "react-router-dom";
import { PublishProductAPI } from "../../services/admin/product.service.js";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  AddPublishProduct,
  RemovePublishProduct,
} from "../../redux/slice/productSlice.js";

const ProductCard = ({ product, isAction, setIsAction }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    setLoading(true);
    try {
      if (product.publish) {
        const res = await PublishProductAPI(product._id);
        if (res.status === "success") {
          // console.log("publish res :: ", res);
          toast.success(res.message);
          dispatch(RemovePublishProduct(product._id));
        } else toast.error(res.message);
      } else {
        const res = await PublishProductAPI(product._id, "publish");
        if (res.status === "success") {
          toast.success(res.message);
          dispatch(AddPublishProduct(product._id));
        } else toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-fit bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 flex items-center  gap-x-5 relative overflow-hidden">
      {product?.publish && (
        <div className="w-30 h-6 py-1 text-center  text-white text-xs bg-green-400 absolute top-0 -rotate-45 -translate-x-10 translate-y-4">
          Published
        </div>
      )}
      {/* Image */}
      <div className="max-w-54 min-w-40 h-32 ">
        <img
          src={product.picture}
          alt={product.name}
          className="w-full h-full border border-gray-300 object-cover rounded-xl bg-gray-100 "
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className=" flex-1">
        {/* Name & Price */}
        <div className="">
          <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm py-1 text-gray-500 mb-2">
            {`${product?.flavour}  |  ${product.category}  |  ${product.sub_category}`}
          </p>
        </div>

        {/* Price */}
        <div className="my-auto mx-auto flex items-center gap-2 mb-3">
          <span className=" px-2 text-xl font-bold text-rose-500">
            ₹{product.final_price}
          </span>
          {product.discount > 0 && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.price}
            </span>
          )}
          <p className="text-sm ml-5 text-gray-400 ">
            <i className="bi bi-tag pr-2 text-rose-400"></i>
            {product.discount}% discount
          </p>
        </div>

        {/* Action */}
        <div className="text-sm  flex justify-center flex-wrap gap-8">
          <div className="relative flex-1 flex  text-rose-400 border rounded-md overflow-hidden">
            <button
              className="py-1 text-center border-r flex-1  whitespace-nowrap cursor-pointer hover:bg-rose-100 transition duration-500"
              onClick={() => navigate(`view/cake/${product._id}/`)}
            >
              View
            </button>
            <button
              className="flex-1 hover:bg-rose-100  transition duration-5"
              onClick={() => setIsAction(product._id)}
            >
              Action
            </button>
            {isAction == product._id && (
              <Action setIsAction={setIsAction} id={product._id} />
            )}
          </div>
          <button
            className=" flex-1 px-4 py-2 bg-rose-400 text-white  rounded-md cursor-pointer active:bg-green-300 hover:bg-rose-600 hover:scale-105 transition duration-500"
            onClick={handlePublish}
            disabled={loading}
          >
            {product?.publish ? "Suspend" : "Publish"}
            {loading && (
              <span className="inline-block w-4 h-4 border-2 rounded-full border-t-transparent translate-1 animate-spin"></span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

const Action = ({ setIsAction, id }) => {
  return (
    <>
      <OutsideClickHandler onOutsideClick={() => setIsAction(false)}>
        <div className=" border border-gray-300 rounded-lg shadow-lg bg-gray-50 absolute top-8 right-0 z-20">
          <ul className="min-w-20">
            <li className="px-4 py-1 whitespace-nowrap hover:bg-gray-100 cursor-pointer">
              <i className="bi bi-key pr-2"></i>Update
            </li>
            <li className="px-4 py-1 whitespace-nowrap hover:bg-gray-100 cursor-pointer">
              <i className="bi bi-key pr-2"></i>Achive
            </li>
            <li className="px-4 py-1 whitespace-nowrap hover:bg-gray-100 cursor-pointer">
              <i className="bi bi-key pr-2"></i>Delete
            </li>
          </ul>
        </div>
      </OutsideClickHandler>
    </>
  );
};
