import React from "react";
import { Link } from "react-router-dom";

export const NavItem = () => {
  const NavItem = [
    { label: "Home", link: "" },
    { label: "Dashboard", link: "dashboard" },
  ];
  return (
    <div className="h-full text-white">
      <ul className=" px-8 h-full flex items-center gap-12">
        {NavItem?.map((item, idx) => (
          <li key={idx} className="cursor-pointer">
            <Link to={item?.link}>{item?.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
