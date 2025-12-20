import React from "react";

const ProfileEdit = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <input className="w-full p-2 border rounded" placeholder="Full Name" />
        <input
          className="w-full p-2 border rounded"
          placeholder="Phone Number"
        />
        <button className="bg-pink-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileEdit;
