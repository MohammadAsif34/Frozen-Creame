import React, { useState } from "react";
import ProductCard from "../../components/products/ProductCard";
import cakeItem from "../../assets/cakeItem.json";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../appState/features/cart/cartSlice";

export const ProductDetails = () => {
  const { product_sku } = useParams();
  const sku = atob(product_sku);
  const item = cakeItem.find((cake) => cake.sku == sku);

  if (!item) {
    return (
      <div className="text-center py-10 font-semibold text-xl text-gray-400">
        No product found!
      </div>
    );
  }
  return (
    <div className="px-[10%] relative ">
      {/* similar items  */}
      <div className="py-10 flex gap-16 flex-col lg:flex-row ">
        <ProductImage src={item?.picture} album={item?.album} />
        <ProductDescription item={item} />
      </div>
      <div className="my-10">
        <h1 className=" py-3 text-4xl text-rose-500 font-semibold text-center">
          Similar, You amy also like
        </h1>
        <div className=" my-10 py-5 flex gap-5 overflow-x-scroll  ">
          {/* 4 prodeuts here  */}
          {cakeItem?.slice(0, 4).map((item, idx) => (
            <ProductCard item={item} key={idx} />
          ))}
        </div>

        {/* onClick got to search similiar to current item */}
        <div className=" text-center">
          <button className=" px-6 py-2 text-rose-500 border border-rose-500 rounded-xl hover:bg-rose-500 hover:text-white transition duration-500 cursor-pointer">
            See more
          </button>
        </div>
      </div>

      {/* review and ration section  */}
      <div>
        <Rating_Review />
      </div>
    </div>
  );
};

export const Rating_Review = () => {
  return (
    <>
      <section className="my-10 border border-gray-300 rounded-xl relative">
        <div className="py-4 px-6 text-xl flex justify-between items-center border-b border-gray-300">
          <span className="font-semibold text-gray-500">Ratings & Reviews</span>
          <div className="flex gap-8 items-center">
            <span>
              <i className="bi bi-star mx-2 "></i>
              {1.3} rating
            </span>
            <button className="px-6 py-2 rounded-lg text-white bg-rose-500 hover:bg-rose-600 transition duration-500 cursor-pointer">
              Write a Review
            </button>
          </div>
        </div>
        <div className="px-6 py-4 flex gap-20 items-start overflow-y-auto ">
          <Rating />
          <Review />
        </div>
      </section>
    </>
  );
};

const ProgressBar = ({ value }) => {
  return <div className="w-full h-2 bg-gray-200 rounded-full"></div>;
};

const Rating = () => {
  return (
    <>
      <div className="w-[35%] sticky top-16 ">
        <h1 className="text-2xl font-semibold text-gray-500">
          Customer Reviews
        </h1>
        <div className="flex items-center gap-2 text-xl text-transparent bg-clip-text bg-gray-200">
          <span>
            <i className="bi bi-star-fill"></i>
          </span>
          <span>
            <i className="bi bi-star-fill"></i>
          </span>
          <span>
            <i className="bi bi-star-fill"></i>
          </span>
          <span>
            <i className="bi bi-star-fill"></i>
          </span>
          <span>
            <i className="bi bi-star-fill"></i>
          </span>
          <span className="ml-5 text-black text-sm">Based on {10} rating</span>
        </div>

        {/* rating point wise  */}
        <div className="my-10 ">
          {/* 1 star rating  */}
          <div className="py-1 flex items-center gap-5">
            <span className="font-semibold text-gray-500 translate-x-3">1</span>
            <span>
              <i className="bi bi-star-fill  text-yellow-500"></i>
            </span>
            <ProgressBar value={10} />
          </div>

          {/* 2 star rating  */}
          <div className="py-1 flex items-center gap-5">
            <span className="font-semibold text-gray-500 translate-x-3">2</span>
            <span>
              <i className="bi bi-star-fill  text-yellow-500"></i>
            </span>
            <ProgressBar value={10} />
          </div>

          {/* 3 star rating  */}
          <div className="py-1 flex items-center gap-5">
            <span className="font-semibold text-gray-500 translate-x-3">3</span>
            <span>
              <i className="bi bi-star-fill  text-yellow-500"></i>
            </span>
            <ProgressBar value={10} />
          </div>

          {/* 4 star rating  */}
          <div className="py-1 flex items-center gap-5">
            <span className="font-semibold text-gray-500 translate-x-3">4</span>
            <span>
              <i className="bi bi-star-fill  text-yellow-500"></i>
            </span>
            <ProgressBar value={10} />
          </div>

          {/* 5 star rating  */}
          <div className="py-1 flex items-center gap-5">
            <span className="font-semibold text-gray-500 translate-x-3">5</span>
            <span>
              <i className="bi bi-star-fill  text-yellow-500"></i>
            </span>
            <ProgressBar value={10} />
          </div>
        </div>
      </div>
    </>
  );
};

const Review = () => {
  return (
    <div className="flex-1">
      <div className="py-2 px-10 flex items-center gap-2 text-xl text-transparent bg-clip-text bg-gray-200  border-b border-gray-300">
        <span>
          <i className="bi bi-star-fill"></i>
        </span>
        <span>
          <i className="bi bi-star-fill"></i>
        </span>
        <span>
          <i className="bi bi-star-fill"></i>
        </span>
        <span>
          <i className="bi bi-star-fill"></i>
        </span>
        <span>
          <i className="bi bi-star-fill"></i>
        </span>
        <span className="ml-5 text-black text-sm">Total {10} rating</span>
      </div>
      <div className="w-full min-h-72 flex items-center justify-center">
        <h1 className="text-4xl text-gray-300 font-bold">No Reviews</h1>
      </div>
    </div>
  );
};

const ProductDescription = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const handleQty = (type) => {
    if (qty <= 3 - 1 && type === "+") {
      setQty((prev) => prev + 1);
    } else if (qty > 1 && type === "-") {
      setQty((prev) => prev - 1);
    }
  };

  return (
    <>
      {/* product details  */}
      <div className=" flex-1 my-5" key={item?.id}>
        <h1 className="text-3xl capitalize ">
          {item?.name}
          <span>
            <i className="bi bi-heart mx-4 text-rose-400 text-lg cursor-pointer"></i>
          </span>
        </h1>
        {/* description   */}
        <div className="my-4 text-lg text-gray-400">{item?.description}</div>
        {/* delivery expected time  */}
        <div className="flex items-center">
          <span className="text-sm text-gray-500">
            Allergens
            <i className="bi bi-info-circle mx-2"></i>
          </span>
          <title>this allergens title</title>
          {/* <div>
            <span className="px-2 text-rose-500">
              <i className="bi bi-truck mx-2"></i>
              Get it by {"2 jul"}
            </span>
            <span className="px-2 text-green-600 font-semibold">
              Order in {"2h 23min"}
            </span>
          </div> */}
        </div>
        <div className="pt-4 text-lg text-gray-600">
          {item?.category}
          <span className="px-4">•</span>
          {item?.flavour}
          <span className="px-4">•</span>
          {item?.quantity}
        </div>
        {/* <div>
          <span className="ml-5 text-green-600">
            <i className="bi bi-stopwatch mx-2"></i>
            <strong> {10} </strong>
            People bought this in last 23 hours
          </span>
        </div> */}

        {/* price  */}
        <div className="my-4">
          <span className="text-3xl font-semibold font-mono">
            <i className="bi bi-currency-rupee mx-2"></i>
            {item?.price}
          </span>
        </div>

        {/* cake indegredients  */}
        <div className="my-10 grid grid-cols-2 flex-wrap gap-10">
          {/* cake weight select options */}
          {/* <div>
            <h2 className="py-2 text-xl font-semibold text-gray-500">Creame</h2>
            <select className="w-full h-10 border-2 border-gray-300 rounded-sm text-gray-400 ">
              <option value="">Select Creame</option>
            </select>
          </div> */}

          {/* falvour select options */}
          {/* <div>
            <h2 className="py-2 text-xl font-semibold text-gray-500">Creame</h2>
            <select className="w-full h-10 border-2 border-gray-300 rounded-sm text-gray-400 ">
              <option value="">Select Creame</option>
            </select>
          </div> */}

          {/* Dietary frefence select options */}
          {/* <div>
            <h2 className="py-2 text-xl font-semibold text-gray-500">Creame</h2>
            <select className="w-full h-10 border-2 border-gray-300 rounded-sm text-gray-400 ">
              <option value="">Select Creame</option>
            </select>
          </div> */}

          {/* creame select options */}
          {/* <div>
            <h2 className="py-2 text-xl font-semibold text-gray-500">Creame</h2>
            <select className="w-full h-10 border-2 border-gray-300 rounded-sm text-gray-400 ">
              <option value="">Select Creame</option>
            </select>
          </div> */}
        </div>

        {/* quantity  */}
        <div className="pb-4 flex justify-between ">
          <p className="text-xl">Quantity</p>
          <div className="px-2 py-2 rounded-full bg-gray-100">
            <button
              className="px-3 cursor-pointer"
              onClick={() => handleQty("-")}
            >
              <i className="bi bi-dash"></i>
            </button>
            <span className="px-2">{qty}</span>
            <button
              className="px-3 cursor-pointer"
              onClick={() => handleQty("+")}
            >
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
        </div>

        {/* buttons  */}
        <div className="py-4 flex gap-10 ">
          <button
            className="flex-1 py-2 rounded-lg text-rose-500 border hover:bg-rose-600/20 transition duration-500 cursor-pointer"
            onClick={() => dispatch(AddToCart(item))}
          >
            Add To Cart
          </button>
          <button
            className="flex-1 py-2 rounded-lg text-white bg-rose-500 hover:bg-rose-600 transition duration-500 cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

const ProductImage = ({
  src = "https://asdlib.org/wp-content/uploads/2021/11/no-image.jpg",
  album,
}) => {
  const [img, setImg] = useState(src);
  return (
    <>
      <div className=" flex-1 sticky left-0 bottom-0 my-5  gap-20 bg-gray-200 rounded-xl">
        {/* product image  */}
        <div className="flex-1 max-h-96 min-h-20 rounded-xl overflow-hidden">
          <img
            src={img}
            alt=""
            className="w-full h-full object-contain object-center "
          />
        </div>
        <div className="py-2 flex gap-2">
          {album?.map((item) => (
            <div
              className="w-28 h-20 rounded-md overflow-hidden"
              onClick={() => setImg(item)}
            >
              <img
                src={item}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
