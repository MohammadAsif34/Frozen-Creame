import React, { useState } from "react";

const SellerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    shopName: "Sweet Treats Bakery",
    ownerName: "Ayesha Khan",
    email: "sweettreats@example.com",
    phone: "+91 98765 54321",
    address: "Bangalore, India",
    since: "2018-05-10",
    totalProducts: 42,
    totalOrders: 620,
    rating: 4.7,
    about:
      "We specialize in premium cakes, cupcakes, and pastries with fresh ingredients.",
    deliveryAreas: "Bangalore, Mysore, Hyderabad",
    website: "https://sweettreatsbakery.in",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Seller Data:", formData);
    setIsEditing(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen">
      <div className="bg-white shadow rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <img
            src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg"
            alt="Seller"
            className="w-24 h-24 rounded-full border-4 border-rose-400 object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-rose-500">
              {formData.shopName}
            </h1>
            <p className="text-sm text-gray-500">Owner: {formData.ownerName}</p>
            <p className="text-sm text-gray-500">Since: {formData.since}</p>
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
                <p>
                  <strong>Delivery Areas:</strong> {formData.deliveryAreas}
                </p>
              </div>
              <div>
                <p>
                  <strong>Total Products:</strong> {formData.totalProducts}
                </p>
                <p>
                  <strong>Total Orders:</strong> {formData.totalOrders}
                </p>
                <p>
                  <strong>Rating:</strong> ⭐ {formData.rating}
                </p>
                <p>
                  <strong>Website:</strong>
                  <a
                    href={formData.website}
                    className="text-rose-500 underline ml-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {formData.website}
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p>
                <strong>About:</strong> {formData.about}
              </p>
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
              {Object.keys(formData).map((key) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>
              ))}

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

export default SellerProfile;
