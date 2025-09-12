import React, { useState } from "react";
import { faqs } from "../../data/basicData";

const FAQs = () => {
  const [accordionOpen, setAccordionOpen] = useState({}); // for FAQ items
  const toggleAccordion = (id) => {
    setAccordionOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className=" px-[12%] py-12">
      <h1 className="py-5 text-3xl font-bold text-rose-400">Frequently Ask</h1>
      {faqs?.map((item, idx) => (
        <div key={idx} className="border-b border-gray-200 ">
          <button
            className="flex items-center justify-between w-full py-3 px-2 text-left text-gray-500  font-medium "
            onClick={() => toggleAccordion(idx)}
          >
            <span>{item.q}</span>
            <svg
              className={`w-3 h-3 shrink-0 transform transition-transform ${
                accordionOpen[idx] ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
          {accordionOpen[idx] && (
            <div className="py-2 text-gray-400 px-2 ">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
