import React from "react";
// import { user } from "../../../data/owner.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((s) => s.user.data);

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen relative">
        <Link
          to={"edit"}
          className="px-4 py-1 border rounded-full text-rose-400 absolute top-0 right-5 "
        >
          Edit
        </Link>
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
        <div className="grid sm:grid-cols-1 lg:grid-cols-2  gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-2">Contact Info</h2>
            <p>📞 {user.phone_1}</p>
            {user.phone_2 && <p>📞 {user.phone_2}</p>}
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
            <p className="text-gray-700">{user.about}</p>
          </div>
        )}

        {/* Why Choose Us */}
        {user.why_choose_us?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
              {user.why_choose_us.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow border-l-4 border-pink-500"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    ✅ {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
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

export default Profile;
