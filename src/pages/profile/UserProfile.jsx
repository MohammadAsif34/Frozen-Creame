import React, { useState } from "react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Mohammad Asif",
    email: "asif@example.com",
    phone: "+91 98765 12345",
    address: "Kolkata, India",
    joined: "2024-03-20",
    orders: 12,
    wishlist: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt="User"
            className="w-20 h-20 rounded-full border-4 border-rose-400 object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-rose-500">
              {formData.name}
            </h1>
            <p className="text-sm text-gray-500">Joined: {formData.joined}</p>
          </div>
        </div>

        {/* Conditional Render */}
        {!isEditing ? (
          <>
            {/* View Mode */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>Phone:</strong> {formData.phone}
                </p>
                <p>
                  <strong>Address:</strong> {formData.address}
                </p>
              </div>
              <div>
                <p>
                  <strong>Orders Placed:</strong> {formData.orders}
                </p>
                <p>
                  <strong>Wishlist Items:</strong> {formData.wishlist}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-rose-400 text-white rounded shadow hover:bg-rose-500"
              >
                Edit Profile
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Edit Mode */}
            <form onSubmit={handleUpdate} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-rose-400 text-white rounded shadow hover:bg-rose-500"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded shadow hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
