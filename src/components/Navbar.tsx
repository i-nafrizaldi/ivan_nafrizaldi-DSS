"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow">
      <div className="container flex items-center justify-between h-20 px-4 lg:px-0">
        {/* Logo */}
        <div className="relative">
          <Image
            alt="Logo"
            src={logo}
            width={100}
            height={100}
            className="object-contain"
            quality={80}
            loading="lazy"
          />
        </div>

        {/* Menu for Larger Screens */}
        <div className="hidden lg:flex items-center gap-12 text-xl font-semibold">
          <a
            href="#unit-kami"
            className="hover:text-[#bf1932] hover:cursor-pointer"
          >
            Unit Kami
          </a>
          <a
            href="#cara-rental"
            className="hover:text-[#bf1932] hover:cursor-pointer"
          >
            Cara Rental
          </a>
          <a href="#faq" className="hover:text-[#bf1932] hover:cursor-pointer">
            FAQ
          </a>
          <a
            href="#kontak"
            className="hover:text-[#bf1932] hover:cursor-pointer"
          >
            Kontak
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // Close icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col items-center gap-6 py-4 text-lg font-semibold">
            <a
              href="#unit-kami"
              className="hover:text-[#bf1932] hover:cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Unit Kami
            </a>
            <a
              href="#cara-rental"
              className="hover:text-[#bf1932] hover:cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Cara Rental
            </a>
            <a
              href="#faq"
              className="hover:text-[#bf1932] hover:cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#kontak"
              className="hover:text-[#bf1932] hover:cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
