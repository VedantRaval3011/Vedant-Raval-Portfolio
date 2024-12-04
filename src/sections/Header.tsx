'use client'
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id: string) => {
    setActiveLink(id);

    // Scroll to the section with a smooth animation
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 backdrop:blur rounded-full">
        {links.map((link) => (
          <motion.div
            key={link.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => handleLinkClick(link.id)}
              className={`nav-item ${
                activeLink === link.id
                  ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                  : "hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {link.label}
            </button>
          </motion.div>
        ))}
      </nav>
    </div>
  );
};
