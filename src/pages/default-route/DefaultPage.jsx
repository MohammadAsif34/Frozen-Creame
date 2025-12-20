import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React from "react";

const DefaultPage = () => {
  return (
    <div className="h-96">
      <p className=" flex justify-center items-center flex-col gap-2">
        <img
          src="/images/default_404.png"
          alt=""
          className="w-1/2 h-96 aspect-square "
        />
        <button
          className="-translate-y-14 bg-rose-400 px-6 py-2 rounded-full text-white cursor-pointer flex items-center gap-2"
          onClick={() => window.history.back()}
        >
          <ArrowBigLeft /> Go Back
        </button>
      </p>
    </div>
  );
};

export default DefaultPage;
