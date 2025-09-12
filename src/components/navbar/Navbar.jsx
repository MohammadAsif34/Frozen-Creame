import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 786);
    window.addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  });

  return (
    <>
      <header className="w-full h-18 px-[12%] max-sm:px-2   flex justify-between items-center text-white">
        {/* Logo section  */}
        <div className="w-16 h-16 max-sm:w-12 max-sm:h-12 logo  p-2  overflow-hidden">
          <Link to={"/"}>
            {/* <i className="bi bi-patch-check-fill text-5xl z-10"></i> */}
            <img
              src="/logo.png"
              alt=""
              className="w-full h-full object-cover object-center scale-130 z-2"
            />
          </Link>
        </div>
        {isMobile ? (
          <>
            <Menu />
          </>
        ) : (
          <NavItem />
        )}
      </header>
    </>
  );
};

export default Navbar;
