import React, { useState } from "react";
// import { user as initialUser } from "../../../data/owner.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "../../../redux/slice/userSlice.js";
import { AdminUpdateAPI } from "../../../services/user.services.js";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialUser = useSelector((s) => s.user.data);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Why Choose Us handlers
  const handleWhyChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = prev.why_choose_us.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      );
      return { ...prev, why_choose_us: updated };
    });
  };

  const addWhyItem = () => {
    setFormData({
      ...formData,
      why_choose_us: [
        ...(formData.why_choose_us || []),
        { title: "", description: "" },
      ],
    });
  };

  const removeWhyItem = (index) => {
    const newWhy = formData.why_choose_us.filter((_, i) => i !== index);
    setFormData({ ...formData, why_choose_us: newWhy });
  };

  // Social Links handlers
  const handleSocialChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = prev.social_links.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      );
      return { ...prev, social_links: updated };
    });
  };

  const addSocial = () => {
    setFormData({
      ...formData,
      social_links: [
        ...(formData.social_links || []),
        { name: "", link: "", icon: "" },
      ],
    });
  };

  const removeSocial = (index) => {
    const newSocial = formData.social_links.filter((_, i) => i !== index);
    setFormData({ ...formData, social_links: newSocial });
  };

  // Delivery Partners handlers
  const handlePartnerChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = prev.delivery_partner.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      );
      return { ...prev, delivery_partner: updated };
    });
  };

  const addPartner = () => {
    setFormData({
      ...formData,
      delivery_partner: [
        ...(formData.delivery_partner || []),
        { name: "", link: "", icon: "" },
      ],
    });
  };

  const removePartner = (index) => {
    const newPartner = formData.delivery_partner.filter((_, i) => i !== index);
    setFormData({ ...formData, delivery_partner: newPartner });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await AdminUpdateAPI(formData);
      console.info(res);
      if (res.status === "success") {
        dispatch(setUser(res.data));
        toast.success(res.message);
      } else toast.error(res.message);
    } catch (error) {
      console.log("erro while user update :: ", error.message);
    } finally {
      setLoading(true);
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen relative">
        <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <img
              src={formData.picture}
              alt={formData.name}
              className="w-24 h-24 object-cover rounded-full shadow border"
            />
            <div className="flex-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="border border-gray-300 w-full p-2 rounded mb-1"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="border border-gray-300 w-full p-2 rounded mb-1"
              />
              <input
                type="text"
                name="location_link"
                value={formData.location_link}
                onChange={handleChange}
                placeholder="Google Maps Link"
                className="border border-gray-300 w-full p-2 rounded"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="font-semibold text-lg mb-2">Contact Info</h2>
              <input
                type="tel"
                name="phone_1"
                value={formData.phone_1}
                onChange={handleChange}
                placeholder="Phone 1"
                className="border border-gray-300 w-full p-2 rounded mb-2 focus:border-rose-300 focus:ring-1 ring-red-400 focus:outline-0 transition-all duration-300"
              />
              <input
                type="tel"
                name="phone_2"
                value={formData.phone_2}
                onChange={handleChange}
                placeholder="Phone 2"
                className="border border-gray-300 w-full p-2 rounded mb-2 focus:border-rose-300 focus:ring-1 ring-red-400 focus:outline-0 transition-all duration-300"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border border-gray-300 w-full p-2 rounded focus:border-rose-300 focus:ring-1 ring-red-400 focus:outline-0 transition-all duration-300"
              />
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Website"
                className="border border-gray-300 w-full p-2 rounded mt-2 focus:border-rose-300 focus:ring-1 ring-red-400 focus:outline-0 transition-all duration-300"
              />
            </div>

            {/* Open Time */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="font-semibold text-lg mb-2">Opening Hours</h2>
              <input
                type="text"
                name="open_time"
                value={formData.open_time}
                onChange={handleChange}
                placeholder="Opening Hours"
                className="border w-full p-2 rounded border-gray-300 focus:border-rose-300 focus:ring-1 ring-red-400 focus:outline-0 transition-all duration-300"
              />
            </div>
          </div>

          {/* About */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-2">About Us</h2>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="border border-gray-300 w-full p-2 rounded h-28  focus:border-rose-300 focus:ring-1 ring-red-400 focus:outline-0 transition-all duration-300"
              placeholder="About the business"
            />
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-2">Why Choose Us</h2>
            {formData.why_choose_us?.map((item, index) => (
              <div
                key={index}
                className="mb-2 border  p-4 rounded-md border-gray-300 border-l-rose-500 border-l-4"
              >
                <input
                  type="text"
                  value={item.title}
                  placeholder="Title"
                  className="w-full border border-gray-300 p-2 rounded mb-1  focus:border-rose-300 focus:ring-1 ring-red-400 focus:outline-0 transition-all duration-300"
                  onChange={(e) =>
                    handleWhyChange(index, "title", e.target.value)
                  }
                />
                <textarea
                  value={item.description}
                  placeholder="Description"
                  className="w-full border border-gray-300 p-2 rounded mb-1  focus:border-rose-300 focus:ring-1 ring-red-400 focus:outline-0 transition-all duration-300"
                  onChange={(e) =>
                    handleWhyChange(index, "description", e.target.value)
                  }
                />
                <div className="text-end">
                  <button
                    type="button"
                    className="text-red-500 px-2 py-0.5 border rounded-md "
                    onClick={() => removeWhyItem(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="bg-rose-500 text-white px-4 py-2 rounded mt-2"
              onClick={addWhyItem}
            >
              + Add Reason
            </button>
          </div>

          {/* Social Links */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-2">Social Links</h2>
            {formData.social_links?.map((social, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  value={social.name}
                  placeholder="Name"
                  className="w-full border border-gray-300 p-2 rounded mb-1 focus:border-rose-300 focus:ring-1 ring-red-400 focus:outline-0 transition-all duration-300"
                  onChange={(e) =>
                    handleSocialChange(index, "name", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={social.link}
                  placeholder="Link"
                  className="w-full border border-gray-300 p-2 rounded mb-1 focus:border-rose-300 focus:ring-1 ring-red-400 focus:outline-0 transition-all duration-300"
                  onChange={(e) =>
                    handleSocialChange(index, "link", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={social.icon}
                  placeholder="Icon URL"
                  className="w-full border border-gray-300 p-2 rounded mb-1 focus:border-rose-300 focus:ring-1 ring-red-400 focus:outline-0 transition-all duration-300"
                  onChange={(e) =>
                    handleSocialChange(index, "icon", e.target.value)
                  }
                />
                <button
                  type="button"
                  className="text-red-500 mb-4 px-2 py-0.5 border rounded-md float-end"
                  onClick={() => removeSocial(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-rose-500 text-white px-4 py-2 rounded mt-2"
              onClick={addSocial}
            >
              + Add Social Link
            </button>
          </div>

          {/* Delivery Partners */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-2">Delivery Partners</h2>
            {formData.delivery_partner?.map((partner, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  value={partner.name}
                  placeholder="Name"
                  className="w-full border border-gray-300 p-2 rounded mb-1 focus:border-rose-300 focus:ring-1 ring-red-400 focus:outline-0 transition-all duration-300"
                  onChange={(e) =>
                    handlePartnerChange(index, "name", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={partner.link}
                  placeholder="Link"
                  className="w-full border border-gray-300 p-2 rounded mb-1  focus:border-rose-300 focus:ring-1 ring-red-400 focus:outline-0 transition-all duration-300"
                  onChange={(e) =>
                    handlePartnerChange(index, "link", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={partner.icon}
                  placeholder="Icon URL"
                  className="w-full border border-gray-300 p-2 rounded mb-1 focus:border-rose-300 focus:ring-1 ring-red-400 focus:outline-0 transition-all duration-300"
                  onChange={(e) =>
                    handlePartnerChange(index, "icon", e.target.value)
                  }
                />
                <button
                  type="button"
                  className="text-red-500  border px-2 py-0.5 rounded-md float-end mb-4 cursor-pointer"
                  onClick={() => removePartner(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-rose-500 text-white px-4 py-2 rounded mt-2"
              onClick={addPartner}
            >
              + Add Partner Link
            </button>
          </div>

          {/* Footer Actions */}
          <div className="flex gap-3 pt-5  justify-center">
            <button
              type="button"
              className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-100 cursor-pointer disabled:opacity-50"
              onClick={() => navigate(-1)}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-rose-400 text-white rounded hover:bg-rose-500 cursor-pointer disabled:opacity-50"
              disabled={loading}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileEdit;
