import React from "react";
import { Link } from "react-router-dom";

export const NavItem = () => {
  const NavItem = [
    { label: "Dashboard", link: "dashboard" },
    { label: "Products", link: "" },
  ];
  return (
    <div className="h-full text-white">
      <ul className="h-full flex items-center gap-4">
        {NavItem?.map((item, idx) => (
          <li key={idx} className="cursor-pointer">
            <Link to={item?.link}>{item?.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
