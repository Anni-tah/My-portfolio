// Footer.jsx
import React from "react";
import { FiMail, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-blue-900 to-purple-900 text-gray-300 py-16 px-8 md:px-32">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Anne Nabwire</h3>
          <p className="text-gray-400">
            Full‑Stack Engineer building intuitive, scalable web applications with modern tech.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <div className="space-y-2 text-gray-400">
            <div className="flex items-center gap-2">
              <FiMail className="text-[#9C4DFF]" size={20} />
              <a href="mailto:nabanne96@gmail.com" className="hover:text-white transition-colors">
                nabanne96@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="text-[#9C4DFF]" size={20} />
              <a href="tel:+254712930270" className="hover:text-white transition-colors">
                +254 712 930 270
              </a>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/anne-nabwire-6ba41b1b8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Anni-tah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiGithub size={24} />
            </a>
          </div>
        </div>
      </div>

     
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Anne Nabwire. All rights reserved.
      </div>
    </footer>
  );
}
