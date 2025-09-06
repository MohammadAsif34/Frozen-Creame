import React from "react";

export const Loader = () => {
  return (
    <>
      <div className="w-14 h-14 relative">
        <div className="w-full h-full border-4 border-rose-400 border-y-transparent rounded-full flex justify-center items-center animate-roll-back "></div>
        <span className="absolute top-1/2 left-1/2 -translate-1/2 text-rose-400 text-[9px] font-bold text-center">
          Frozen Creame
        </span>
      </div>
    </>
  );
};
