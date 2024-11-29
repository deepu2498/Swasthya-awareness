// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gradient-to-r from-teal-500 to-teal-600 text-black py-8">
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Swasthya Awareness</h2>
          <p className="mt-2">Your trusted health guide.</p>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-300">
            Contact
          </Link>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p>&copy; 2024 Swasthya Awareness. All rights reserved.</p>
        <div className="mt-4 space-x-6">
          <a
            href="https://facebook.com"
            className="text-black hover:text-blue-600"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-black hover:text-blue-400"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-black hover:text-pink-500"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
