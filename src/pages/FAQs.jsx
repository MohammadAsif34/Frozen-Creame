import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqsData = [
  {
    question: "Do you offer eggless cakes?",
    answer:
      "Yes! Most of our cakes are available in eggless variants. You can select 'Eggless' when placing your order.",
  },
  {
    question: "How far in advance should I place my order?",
    answer:
      "We recommend placing your order at least 24 hours in advance. For custom or large orders, 48-72 hours is ideal.",
  },
  {
    question: "Do you provide home delivery?",
    answer:
      "Yes, we deliver across multiple locations. Delivery charges may vary depending on the distance.",
  },
  {
    question: "Can I customize the design of my cake?",
    answer:
      "Absolutely! You can share your design idea or photo reference, and our team will make it for you.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, debit/credit cards, net banking, and cash on delivery for select locations.",
  },
  {
    question: "Do you cater for corporate or bulk orders?",
    answer:
      "Yes, we offer bulk orders for events, offices, and parties. Please contact us at least a week in advance.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-rose-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-rose-600 mb-6 text-center">
          Frequently Asked Questions
        </h1>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div key={index} className="border border-rose-300 rounded-lg overflow-hidden">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left bg-rose-50 hover:bg-rose-100 transition"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                <i
                  className={`fa-solid fa-chevron-down h-5 w-5 text-rose-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 py-3 bg-white text-gray-600"
                  >
                    {faq.answer}
                  </div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
