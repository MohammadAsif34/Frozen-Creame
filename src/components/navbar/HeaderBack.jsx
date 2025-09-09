import React from "react";

const HeaderBack = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="w-full  h-10 px-4 flex justify-between items-center ">
      <button
        className="text-gray-500 cursor-pointer"
        onClick={() => handleBack()}
      >
        <i className="fa-solid fa-arrow-left mr-2"></i>Back
      </button>
    </div>
  );
};

export default HeaderBack;
