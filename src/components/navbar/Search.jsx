import React from "react";

const Search = () => {
  return (
    <>
      <div className="w-full  max-sm:w-48 h-10 border bg-white/30  rounded-md overflow-hidden flex">
        <input
          type="text"
          className="w-full h-full px-4  outline-none group-[]:"
          placeholder="search.."
          disabled
        />
        <button className="px-1 translate-y-0.5">
          <i className="fa-solid fa-magnifying-glass text-xl"></i>
        </button>
      </div>
    </>
  );
};

export default Search;
