import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import { PublishProductsAPI } from "../../services/product.services";
import { toast } from "react-toastify";

const ProductCard = ({ product, isAction, setIsAction }) => {
  const [loading, setLoading] = useState(false);
  const handlePublish = async () => {
    // let res;
    try {
      if (product.publish) {
        const res = await PublishProductsAPI(product._id, "false");
        if (res.status === "success") toast.success(res.message);
        else toast.error(res.message);
      } else {
        console.log(product.publish);
        const res = await PublishProductsAPI(product._id, "true");
        console.log(res);
        if (res.status === "success") toast.success(res.message);
        else toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    // console.log(res);
  };
  return (
    <div className="h-fit bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-x-5 relative overflow-hidden">
      {product?.publish && (
        <div className="w-30 h-6 py-1 text-center  text-white text-xs bg-green-400 absolute top-0 -rotate-45 -translate-x-8 translate-y-4">
          Published
        </div>
      )}
      {/* Image */}
      <img
        src={product.picture}
        alt={product.name}
        className="min-w-54 h-28 border border-gray-300 object-cover rounded-xl bg-gray-100 "
        loading="lazy"
        decoding="async"
      />

      {/* Name & Price */}
      <div className="">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{product.flavour}</p>
      </div>

      {/* Tags */}
      <div className="my-auto flex flex-wrap gap-1 mb-3">
        {product.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Price */}
      <div className="my-auto mx-auto  items-center gap-2 mb-3">
        <span className=" px-2 text-xl font-bold text-rose-500">
          ₹{product.final_price}
        </span>
        {product.discount > 0 && (
          <span className="text-sm text-gray-400 line-through">
            ₹{product.price}
          </span>
        )}
        <p className="text-sm text-gray-400 ">
          <i className="bi bi-tag pr-2 text-rose-400"></i>
          {product.discount}% discount
        </p>
      </div>

      {/* Action */}
      <div className="w-40 h-fit  my-auto text-sm px-4 flex justify-center flex-wrap gap-4">
        {/* <button className="flex-1 px-4 py-2 text-rose-400 border rounded-md cursor-pointer hover:bg-rose-200 hover:scale-105 transition duration-500">
          Suspend
        </button> */}
        <div className="relative">
          <button
            className=" flex-1 px-4 py-1 text-rose-400 border rounded-md cursor-pointer hover:bg-rose-200 hover:scale-105 transition duration-500"
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
        >
          {product?.publish ? "Suspend" : "Publish"}
          {loading && (
            <span className="inline-block w-4 h-4 border-2 rounded-full border-t-transparent translate-1 animate-spin"></span>
          )}
        </button>
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
            <Link to={`view/cake/${id}`}>
              <li className="px-4 py-1 whitespace-nowrap hover:bg-gray-100 cursor-pointer">
                <i className="bi bi-key pr-2"></i>View
              </li>
            </Link>
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
