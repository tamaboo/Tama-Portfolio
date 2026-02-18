/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = ({ hidden = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

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
      setIsScrolled(window.scrollY > 50);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-black shadow-lg border-b border-white/10"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="px-6 md:px-12 flex items-center justify-between">
          <div className="logo cursor-pointer z-[1000]">
            <a href="#home">
              <h1 className="text-2xl font-bold text-white tracking-wider hover:text-violet-500 transition-colors">
                Portofolio<span className="text-violet-500">.</span>
              </h1>
            </a>
          </div>

          {/* Desktop Menu */}
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

          {/* Tombol Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-white z-[1002] focus:outline-none relative"
            aria-label="Toggle Menu"
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/60 z-[1000] backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-black border-l border-white/10 z-[1001] flex flex-col items-center justify-center gap-8 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={handleLinkClick}
            className={`text-xl font-medium transition-all duration-300 ${
              activeSection === item.id
                ? "text-violet-500 font-bold"
                : "text-white/70 hover:text-white"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
