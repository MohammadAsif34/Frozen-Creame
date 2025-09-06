import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const user = useSelector((s) => s.user.data);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Edited profile : ", formData);
    navigate(-1);
    // onSave(formData); // Send updated data to parent or API
    // alert("Profile updated!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-6">🛠️ Shop Settings</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* General Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">General Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Shop Name"
              className="border p-2 rounded w-full"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-2 rounded w-full"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              placeholder="Logo URL"
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone_1"
              value={formData.phone_1}
              onChange={handleChange}
              placeholder="Phone 1"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="phone_2"
              value={formData.phone_2}
              onChange={handleChange}
              placeholder="Phone 2"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="border p-2 rounded w-full col-span-2"
            />
            <input
              type="text"
              name="location_link"
              value={formData.location_link}
              onChange={handleChange}
              placeholder="Google Maps Link"
              className="border p-2 rounded w-full col-span-2"
            />
          </div>
        </div>

        {/* About + Timing */}
        <div>
          <h2 className="text-lg font-semibold mb-2">About & Timing</h2>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="About the Shop"
            className="border p-2 rounded w-full h-24"
          />
          <input
            type="text"
            name="open_time"
            value={formData.open_time}
            onChange={handleChange}
            placeholder="Opening Hours"
            className="border p-2 rounded w-full mt-2"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
