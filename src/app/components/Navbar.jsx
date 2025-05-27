"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <div className="text-xl font-semibold text-slate-800">Diego Santiago</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-slate-600 font-medium">
          <li><a href="#about" className="hover:text-black transition">About</a></li>
          <li><a href="#projects" className="hover:text-black transition">Projects</a></li>
          <li><a href="#timeline" className="hover:text-black transition">Timeline</a></li>
          <li><a href="#contact" className="hover:text-black transition">Contact</a></li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-slate-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-3 text-slate-700 font-medium bg-white border-t">
          <li><a href="#about" className="block hover:text-black transition" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#projects" className="block hover:text-black transition" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#timeline" className="block hover:text-black transition" onClick={() => setMenuOpen(false)}>Timeline</a></li> 
          <li><a href="#contact" className="block hover:text-black transition" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
