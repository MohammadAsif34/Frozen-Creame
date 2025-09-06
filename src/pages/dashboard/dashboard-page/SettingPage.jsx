import React from "react";
import { user } from "../../../data/owner.js";
import Settings from "../../../components/dashboard/profile-page/ProfileEdit.jsx";

const SettingPage = () => {
  const handleSave = (updatedUser) => {
    console.log("Updated data:", updatedUser);
    // Save to API, DB, or state
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Settings user={user} onSave={handleSave} />
    </div>
  );
};

export default SettingPage;
