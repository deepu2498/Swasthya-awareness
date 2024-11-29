// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gradient-to-r from-teal-500 via-teal-400 to-teal-600 shadow-lg py-6 text-white text-center">
    <h1 className="text-4xl font-bold flex items-center justify-center space-x-3">
      <i className="fas fa-heartbeat text-3xl"></i>
      <span>Swasthya Awareness</span>
    </h1>
    <nav className="mt-4">
      <Link to="/" className="mx-6 text-lg font-medium text-white hover:text-yellow-400 transition duration-300">
        Home
      </Link>
      <Link to="/about" className="mx-6 text-lg font-medium text-white hover:text-yellow-400 transition duration-300">
        About
      </Link>
    </nav>
  </header>
);

export default Header;

