import { transform } from "framer-motion";
import React, { useState } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const slider_url = [
    "https://static.vecteezy.com/system/resources/previews/030/522/283/non_2x/beatiful-birthday-and-gift-cakes-photo.jpg",
    "https://marketplace.canva.com/EAFFpe5PVN4/2/0/1600w/canva-black-brown-minimalist-aesthetic-modern-grand-opening-soft-cake-banner-9Vay3iuDELs.jpg",
    "https://img.freepik.com/premium-psd/special-chocolate-cake-facebook-cover-web-template-design-premium-psd_567320-135.jpg",
  ];
  setInterval(() => {
    if (index == 2) setIndex(0);
    else setIndex(index + 1);
  }, 5000);
  return (
    <>
      <div className="w-full h-[calc(100vh-72px)] bg-gray-200 relative overflow-hidden">
        <div
          className={`w-full h-full flex -translate-x-[${index}00%] transition-transform duration-1000`}
          //   style={{ transform: `translate(100%)` }}
        >
          {slider_url?.map((item, idx) => (
            <div key={idx} className="w-full grow shrink-0 h-full border ">
              <img src={item} alt="slider-1" className=" w-full h-full " />
            </div>
          ))}
        </div>
        <div className="w-full  text-white absolute bottom-5 left-0 ">
          <ul className="flex gap-x-1 justify-center transition-transform duration-1000 ease-in-out">
            {[...Array(slider_url.length)]?.map((item, idx) => (
              <li className="tranlsition-transform duration-300">
                <i
                  key={idx}
                  className={`bi bi-circle-fill ${
                    idx == index ? "text-rose-500" : ""
                  } px-1`}
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Slider;
