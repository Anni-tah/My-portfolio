import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const SECTIONS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Scroll handling for background & active link
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let current = "home";
      SECTIONS.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100) current = id;
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full py-6 px-8 md:px-32 z-20 transition-all duration-300 ${
        isScrolled ? "bg-[#1A1A1A] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center text-white">
        <a
          href="#home"
          className="font-bold text-lg text-[#9C4DFF] hover:text-[#FFB6C1] transition-colors duration-300"
        >
          Nitah.
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-12 font-semibold text-base">
          {SECTIONS.map(({ name, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={handleLinkClick}
              className={`p-3 rounded-md transition-colors duration-300 ease-in-out ${
                activeLink === id
                  ? "bg-[#9C4DFF] text-white"
                  : "text-gray-300 hover:bg-[#9C4DFF] hover:text-white"
              }`}
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Hire Me Button */}
        <div className="hidden xl:flex">
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="bg-white text-[#9C4DFF] font-semibold py-2 px-6 rounded-lg border-2 border-[#9C4DFF] hover:bg-[#9C4DFF] hover:text-white transition-colors duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen((o) => !o)}
          className="md:hidden text-3xl text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        ref={menuRef}
        className={`md:hidden absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-4 font-semibold text-lg py-4 transition-transform duration-300 ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 opacity-0 pointer-events-none"
        }`}
      >
        {SECTIONS.map(({ name, id }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={handleLinkClick}
            className={`w-full text-center p-4 rounded-md transition-colors duration-300 ease-in-out ${
              activeLink === id
                ? "bg-[#9C4DFF] text-white"
                : "text-gray-300 hover:bg-[#9C4DFF] hover:text-white"
            }`}
          >
            {name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={handleLinkClick}
          className="w-full text-center p-4 bg-[#9C4DFF] text-white rounded-md hover:bg-[#7a33cc] transition-colors duration-300"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
