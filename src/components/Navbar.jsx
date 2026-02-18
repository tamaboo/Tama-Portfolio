import { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"; // Pastikan install react-icons

const Navbar = ({ hidden = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // State untuk Mobile Menu

  // Daftar menu diekstrak agar kodenya lebih rapi (DRY principle)
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  if (hidden) return null;

  useEffect(() => {
    const handleScroll = () => {
      // 1. Logika Sticky Background
      setIsScrolled(window.scrollY > 50);

      // 2. Logika Active Section
      // Kita cek posisi scroll user ada di section mana
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // navLinks statis, aman tidak dimasukkan dependency

  // Fungsi saat link diklik (khusus mobile biar menu nutup otomatis)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-black/60 backdrop-blur-md shadow-lg border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="px-6 md:px-12 flex items-center justify-between">
        {/* --- LOGO --- */}
        <div className="logo cursor-pointer z-50">
          <a href="#home">
            <h1 className="text-2xl font-bold text-white tracking-wider hover:text-violet-500 transition-colors">
              Portofolio<span className="text-violet-500">.</span>
            </h1>
          </a>
        </div>

        {/* --- DESKTOP MENU (Hidden di Mobile) --- */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`text-base font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-violet-500 font-bold scale-105"
                    : "text-white/80 hover:text-violet-500 hover:scale-105"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* --- MOBILE HAMBURGER BUTTON (Hidden di Desktop) --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-white z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>

        {/* --- MOBILE MENU OVERLAY --- */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleLinkClick} // Tutup menu saat link diklik
              className={`text-2xl font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? "text-violet-500 font-bold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;