import React from "react";

const AddressForm = ({ address, setAddress }) => {
  console.log("add form::", address.fullName);
  const handleChange = (e) => {
    setAddress((add) => ({ ...add, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <form
        action=""
        className="px-6 py-4 border border-gray-100 rounded-xl shadow "
      >
        <h1 className="text-xl font-medium py-2">Delivery Details</h1>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={address.fullName}
          onChange={(e) => handleChange(e)}
          className="w-full h-8 mb-2 px-2 border border-gray-300 rounded-sm  outline-0 focus:ring-2 focus:ring-rose-300"
        />
        <div className="grid grid-cols-2 gap-x-4">
          <label>Email</label>
          <label>Phone Number</label>
          <input
            type="email"
            name="email"
            value={address.email}
            onChange={(e) => handleChange(e)}
            className="w-full h-8 mb-2 px-2 border border-gray-300 rounded-sm  outline-0 focus:ring-2 focus:ring-rose-300"
          />
          <input
            type="tel"
            name="phoneNumber"
            value={address.phoneNumber}
            onChange={(e) => handleChange(e)}
            className="w-full h-8 mb-2 px-2 border border-gray-300 rounded-sm  outline-0 focus:ring-2 focus:ring-rose-300"
          />
        </div>
        <label>Flat,Building</label>
        <input
          type="text"
          name="flat"
          value={address.flat}
          onChange={(e) => handleChange(e)}
          className="w-full h-8 mb-2 px-2 border border-gray-300 rounded-sm  outline-0 focus:ring-2 focus:ring-rose-300"
        />
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={address.address}
          onChange={(e) => handleChange(e)}
          className="w-full h-8 mb-2 px-2 border border-gray-300 rounded-sm  outline-0 focus:ring-2 focus:ring-rose-300"
        />
        <label>Landmark</label>
        <input
          type="text"
          name="landmark"
          value={address.landmark}
          onChange={(e) => handleChange(e)}
          className="w-full h-8 mb-2 px-2 border border-gray-300 rounded-sm  outline-0 focus:ring-2 focus:ring-rose-300"
        />
        <div className="grid grid-cols-3 gap-x-4">
          <label>City</label>
          <label>State</label>
          <label>Pincode</label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={(e) => handleChange(e)}
            className="w-full h-8 mb-2 px-2 border border-gray-300 rounded-sm  outline-0 focus:ring-2 focus:ring-rose-300"
          />
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={(e) => handleChange(e)}
            className="w-full h-8 mb-2 px-2 border border-gray-300 rounded-sm  outline-0 focus:ring-2 focus:ring-rose-300"
          />
          <input
            type="tel"
            name="pincode"
            value={address.pincode}
            onChange={(e) => handleChange(e)}
            className="w-full h-8 mb-2 px-2 border border-gray-300 rounded-sm  outline-0 focus:ring-2 focus:ring-rose-300"
          />
        </div>
      </form>
    </>
  );
};

export default AddressForm;
