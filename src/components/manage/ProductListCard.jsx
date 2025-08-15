import React, { useState } from "react";

const ProductListCard = ({ item, idx }) => {
  return (
    <>
      <div key={item?._id || idx}>
        <div className=" py-2 border-t border-gray-200 text-sm grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center  gap-5">
          <img
            src={"/banner/banner-101.png"}
            alt="product image"
            className="w-24 h-16 rounded-md object-center object-cover"
          />
          <p className="text-lg">{item?.name}</p>

          <p className="text-center">{item?.price}</p>
          <p className="text-center">{item?.rating}</p>
          <div className="text-center">
            <Action />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListCard;

const Action = () => {
  const [isAction, setIsAction] = useState(false);
  return (
    <>
      <div className="relative">
        <button
          className="text-gray-400 cursor-pointer"
          onClick={() => setIsAction(!isAction)}
        >
          Action
        </button>
        {isAction && (
          <div className="p-2 absolute top-8 right-[50%] translate-x-[50%] text-gray-500 border border-gray-400 rounded-xl bg-white z-30 shadow-sm">
            <ul className="px-2">
              <li className="text-start px-3 py-1 cursor-pointer  hover:bg-gray-200 rounded-md">
                View
              </li>
              <li className="text-start px-3 py-1 cursor-pointer  hover:bg-gray-200 rounded-md">
                update
              </li>
              <li className="text-start px-3 py-1 cursor-pointer  hover:bg-gray-200 rounded-md">
                Suspend
              </li>
              <li className="text-start px-3 py-1 cursor-pointer  hover:bg-gray-200 rounded-md">
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
