import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "PM Surya Ghar", path: "/yojana" }, // Aapka Yojana wala path
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-yellow-400 border-b-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl flex items-center gap-2">
          <span className="text-blue-700">GreenTach</span> Solar
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-semibold text-gray-900">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative group cursor-pointer hover:text-blue-700 transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2.5px] bg-blue-700 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <button className="hidden md:block bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-colors uppercase text-sm">
          Get a Quote
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Sidebar/Menu */}
      {open && (
        <div className="md:hidden bg-yellow-400 border-t border-blue-600 px-6 py-6 space-y-4 absolute w-full left-0 shadow-lg">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block font-bold text-lg hover:text-blue-700"
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full bg-black text-white py-3 rounded-full font-bold">
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}
