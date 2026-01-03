"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#offerings", label: "Offerings" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0b0f]/95 backdrop-blur-xl border-b border-white/10">
      <div className="shell">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg overflow-hidden transition-transform group-hover:scale-105 shadow-lg">
              <Image
                src="/logo-icon.svg"
                alt="Choice and Choices"
                width={48}
                height={48}
                className="w-full h-full"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-lg leading-none">
                Choice & Choices
              </p>
              <p className="text-[#c9a646] text-xs font-medium">
                Hotel & Event Center
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#d6d9e5] hover:text-[#c9a646] font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm py-2 px-5">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#d6d9e5] hover:text-[#c9a646] hover:bg-white/5 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
