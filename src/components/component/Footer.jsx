import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-100 via-pink-100 to-amber-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600">Frozen Kreme</h2>
          <p className="mt-3 text-sm">
            Premium cakes and desserts baked fresh for every celebration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cakes" className="hover:text-pink-500">
                Cakes
              </Link>
            </li>
            <li>
              <Link to="/custom-cake" className="hover:text-pink-500">
                Custom Order
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="hover:text-pink-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-pink-500">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/refund" className="hover:text-pink-500">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm">📍 Kolkata, India</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ support@frozenkreme.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-200 py-4 text-center text-sm">
        © {new Date().getFullYear()} Frozen Kreme. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
