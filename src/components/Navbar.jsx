
import { useState, useEffect } from "react";

const Navbar = ({ hidden = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  if (hidden) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleScroll = () => {
      // 1. Logika Sticky Background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["home", "about", "project", "certifications", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -150 && rect.top < window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (sectionName) => `
    text-base sm:text-lg font-medium transition-all duration-300 cursor-pointer
    ${
      activeSection === sectionName
        ? "text-violet-500 font-bold scale-105" // Style saat AKTIF (Ungu)
        : "text-white/80 hover:text-violet-500 hover:scale-105" // Style saat HOVER (Jadi Ungu juga)
    }
  `;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 
      ${
        isScrolled
          ? "py-4 bg-black/50 backdrop-blur-md shadow-lg border-b border-white/10"
          : "py-7 bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="logo cursor-pointer">
        <a href="#home">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider hover:text-violet-500 transition-colors">
            Portofolio<span className="text-violet-500">.</span>
          </h1>
        </a>
      </div>

      {/* Menu Desktop & Mobile Wrapper */}
      <ul className="flex items-center gap-6 sm:gap-10 bg-black/20 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none px-6 py-2 rounded-full md:p-0 border border-white/10 md:border-none">
        {["home", "about", "project", "certifications", "contact"].map((item) => (
          <li key={item}>
            <a href={`#${item}`} className={navLinkClass(item)}>
              {/* Huruf kapital otomatis */}
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;