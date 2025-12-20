import React from "react";
import { Link } from "react-router-dom";

const subNavItems = [
  { name: "All Cakes", path: "/cakes" },
  { name: "Birthday", path: "/cakes/birthday" },
  { name: "Anniversary", path: "/cakes/anniversary" },
  { name: "Chocolate", path: "/cakes/chocolate" },
  { name: "Custom Cakes", path: "/cakes/custom-cake" },
  { name: "Offers", path: "/cakes/offers" },
];

const SubNavbar = () => {
  return (
    <div className="bg-white  shadow  sticky top-[64px] z-40">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex gap-6 overflow-x-auto py-2 text-sm font-medium text-gray-700">
          {subNavItems.map((item, index) => (
            <li key={index} className="whitespace-nowrap">
              <Link to={item.path} className="hover:text-pink-600 transition">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubNavbar;
