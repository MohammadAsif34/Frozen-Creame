import React, { useState } from "react";

const TabsAccordion = () => {
  const [activeTab, setActiveTab] = useState("stats");
  const [accordionOpen, setAccordionOpen] = useState({}); // for FAQ items

  const toggleAccordion = (id) => {
    setAccordionOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {/* Mobile Select */}
      <div className="sm:hidden p-4">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="bg-rose-50 border-0 border-b border-rose-400 text-gray-900 text-sm rounded-t-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
        >
          <option value="stats">Statistics</option>
          <option value="services">Services</option>
          <option value="faq">FAQ</option>
        </select>
      </div>

      {/* Tabs */}
      <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400">
        {["stats", "services", "faq"].map((tab, idx) => (
          <li key={tab} className="w-full">
            <button
              onClick={() => setActiveTab(tab)}
              className={`inline-block w-full p-4 focus:outline-none rounded-t-lg ${
                activeTab === tab
                  ? "bg-rose-400 text-white"
                  : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
              }`}
            >
              {tab === "stats"
                ? "Statistics"
                : tab === "services"
                ? "Services"
                : "FAQ"}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="border-t border-gray-200 dark:border-gray-600 p-4 md:p-8">
        {/* Statistics Tab */}
        {activeTab === "stats" && (
          <dl className="grid max-w-screen-xl grid-cols-2 gap-8 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white">
            {[
              { value: "73M+", label: "Developers" },
              { value: "100M+", label: "Public repositories" },
              { value: "1000s", label: "Open source projects" },
              { value: "1B+", label: "Contributors" },
              { value: "90+", label: "Top Forbes companies" },
              { value: "4M+", label: "Organizations" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center"
              >
                <dt className="mb-2 text-3xl font-extrabold">{item.value}</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div>
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We invest in the world’s potential
            </h2>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              {[
                "Dynamic reports and dashboards",
                "Templates for everyone",
                "Development workflow",
                "Limitless business automation",
              ].map((service, idx) => (
                <li
                  key={idx}
                  className="flex space-x-2 rtl:space-x-reverse items-center"
                >
                  <svg
                    className="shrink-0 w-3.5 h-3.5 text-rose-500 dark:text-rose-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="leading-tight">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === "faq" && (
          <div>
            {[
              {
                q: "What is Flowbite?",
                a: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
              },
              {
                q: "Is there a Figma file available?",
                a: "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
              },
              {
                q: "What are the differences between Flowbite and Tailwind UI?",
                a: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <button
                  className="flex items-center justify-between w-full py-5 text-left text-gray-500 dark:text-gray-400 font-medium"
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
                  <div className="py-5 text-gray-500 dark:text-gray-400">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsAccordion;
