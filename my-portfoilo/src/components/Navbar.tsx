"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-[#141A1A] text-[#F5EFE7] py-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center relative">
        {/* Desktop Links (centered) */}
        <div className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-500 transition duration-300 text-md"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button (top right corner) */}
        <div className="absolute right-4 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Links (dropdown) */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-3 mt-2 text-base font-medium bg-[#141A1A]/90 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block hover:text-blue-500 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
