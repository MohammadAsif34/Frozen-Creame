import React, { useState } from "react";
import { user } from "../../../data/owner.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SingleInput } from "../../form/input-type/SingleInput.jsx";

const ProfileEdit = () => {
  // const user = useSelector((s) => s.user.data);

  const [formData, setFormData] = useState(user);

  // const handleCancel = () => {
  //   setFormData(user);
  // };

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen relative">
        {/* Header: Logo + Name + Address */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <img
            src={user.picture}
            alt={user.name}
            className="w-24 h-24 object-cover rounded-full shadow border"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-700">{user.address}</p>
            {user.location_link && (
              <a
                href={user.location_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                📍 View on Google Maps
              </a>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-2">Contact Info</h2>
            <SingleInput
              label={"Phone 1"}
              type="tel"
              value={formData.phone_1}
            />
            <SingleInput
              label={"Phone 1"}
              type="tel"
              value={formData.phone_2}
            />
            <SingleInput label={"Email"} type="email" value={formData.email} />
            {/* <d<iv>
              <label>📞 phone 1*</label>
              <input
                type="tel"
                name="phone_1"
                value={user.phone_1}
                className="w-full h-8 px-2 border rounded-md border-gray-300 focus:outline-0 focus:ring-1 focus:ring-rose-300 focus:border-rose-300 "
              />
            </div> */}
            >{user.phone_2 && <p>📞 {user.phone_2}</p>}
            <p>📧 {user.email}</p>
            {user.website && (
              <p>
                🌐{" "}
                <a
                  href={user.website}
                  className="text-blue-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  {user.website}
                </a>
              </p>
            )}
          </div>

          {/* Open Time */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-2">Opening Hours</h2>
            <p>🕒 {user.open_time}</p>
          </div>
        </div>

        {/* About Section */}
        {user.about && (
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h2 className="font-semibold text-lg mb-2">About Us</h2>

            <textarea
              value={formData.about}
              className="w-full h-28 py-2 border border-gray-300 rounded-lg px-4  outline-0 focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-all duration-300"
            />
            {/* <p className="text-gray-700">{user.about}</p> */}
          </div>
        )}

        {/* Why Choose Us */}
        {user.why_choose_us?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {formData.why_choose_us?.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow border-l-4 border-pink-500 mb-2"
                >
                  <input
                    type="text"
                    value={item.title}
                    placeholder="Title"
                    className="w-full border rounded p-2 mb-1"
                    onChange={(e) => {
                      const newWhy = [...formData.why_choose_us];
                      newWhy[index].title = e.target.value;
                      setFormData({ ...formData, why_choose_us: newWhy });
                    }}
                  />
                  <textarea
                    value={item.description}
                    placeholder="Description"
                    className="w-full border rounded p-2"
                    onChange={(e) => {
                      const newWhy = [...formData.why_choose_us];
                      newWhy[index].description = e.target.value;
                      setFormData({ ...formData, why_choose_us: newWhy });
                    }}
                  />
                </div>
              ))}
              <button
                type="button"
                className="mt-2 bg-pink-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setFormData({
                    ...formData,
                    why_choose_us: [
                      ...(formData.why_choose_us || []),
                      { title: "", description: "" },
                    ],
                  });
                }}
              >
                + Add Reason
              </button>
            </div>
          </div>
        )}

        {/* Social Links */}
        {user.social_links?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3">Follow Us</h2>
            <div className="flex flex-wrap gap-4">
              {user.social_links.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
                >
                  {social.icon && (
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-5 h-5"
                    />
                  )}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Delivery Partners */}
        {user.delivery_partner?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3">Delivery Partners</h2>
            <div className="flex flex-wrap gap-4">
              {user.delivery_partner.map((partner, index) => (
                <a
                  key={index}
                  href={partner.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition"
                >
                  {partner.icon && (
                    <img
                      src={partner.icon}
                      alt={partner.name}
                      className="w-6 h-6"
                    />
                  )}
                  <span>{partner.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileEdit;

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const ProfileEdit = () => {
//   const navigate = useNavigate();
//   const user = useSelector((s) => s.user.data);
//   const [formData, setFormData] = useState(user);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Edited profile : ", formData);
//     navigate(-1);
//     // onSave(formData); // Send updated data to parent or API
//     // alert("Profile updated!");
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
//       <h1 className="text-2xl font-bold mb-6">🛠️ Shop Settings</h1>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* General Info */}
//         <div>
//           <h2 className="text-lg font-semibold mb-2">General Info</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Shop Name"
//               className="border p-2 rounded w-full"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="border p-2 rounded w-full"
//             />
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//               className="border p-2 rounded w-full"
//             />
//             <input
//               type="text"
//               name="logo"
//               value={formData.logo}
//               onChange={handleChange}
//               placeholder="Logo URL"
//               className="border p-2 rounded w-full"
//             />
//           </div>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h2 className="text-lg font-semibold mb-2">Contact Info</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="phone_1"
//               value={formData.phone_1}
//               onChange={handleChange}
//               placeholder="Phone 1"
//               className="border p-2 rounded w-full"
//             />
//             <input
//               type="text"
//               name="phone_2"
//               value={formData.phone_2}
//               onChange={handleChange}
//               placeholder="Phone 2"
//               className="border p-2 rounded w-full"
//             />
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               placeholder="Address"
//               className="border p-2 rounded w-full col-span-2"
//             />
//             <input
//               type="text"
//               name="location_link"
//               value={formData.location_link}
//               onChange={handleChange}
//               placeholder="Google Maps Link"
//               className="border p-2 rounded w-full col-span-2"
//             />
//           </div>
//         </div>

//         {/* About + Timing */}
//         <div>
//           <h2 className="text-lg font-semibold mb-2">About & Timing</h2>
//           <textarea
//             name="about"
//             value={formData.about}
//             onChange={handleChange}
//             placeholder="About the Shop"
//             className="border p-2 rounded w-full h-24"
//           />
//           <input
//             type="text"
//             name="open_time"
//             value={formData.open_time}
//             onChange={handleChange}
//             placeholder="Opening Hours"
//             className="border p-2 rounded w-full mt-2"
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
//         >
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProfileEdit;
