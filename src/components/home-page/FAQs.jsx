import React, { useState } from "react";

const faqData = [
  {
    question: "What are the delivery timelines?",
    answer:
      "Standard delivery takes 2–4 hours within city limits. Same-day delivery is available on selected products.",
  },
  {
    question: "Can I customize my cake?",
    answer:
      "Yes, you can customize flavor, size, design, and message. Upload a reference image while ordering.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, debit/credit cards, net banking, and wallet payments.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Refunds are applicable only in case of damaged or incorrect orders. Please contact support within 24 hours.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-rose-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to know before ordering
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow">
              <button
                className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {item.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
