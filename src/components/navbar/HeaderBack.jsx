import React from "react";

const HeaderBack = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="w-full pb-2 ">
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
