import React from "react";
import { user } from "../../../data/owner.js";
import Settings from "../../../components/dashboard/profile-page/ProfileEdit.jsx";
import HeaderBack from "../../../components/navbar/HeaderBack.jsx";
import { Link } from "react-router-dom";

const SettingPage = () => {
  return (
    <div className=" p-4">
      <ul className=" mt-10">
        <li className="capitalize px-4 py-2 bg-white rounded-md shadow hover:scale-101 transition-all duration-300">
          <Link to={"/auth/forget-password"}>forget password</Link>
        </li>
      </ul>
    </div>
  );
};

export default SettingPage;
