import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount, VscVerified } from "react-icons/vsc"; // Tambah VscVerified

const Footer = () => {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscAccount size={18} />,
      label: "About Me",
      onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Project",
      onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      // --- ITEM BARU: CERTIFICATIONS ---
      icon: <VscVerified size={18} />, 
      label: "Certifications",
      onClick: () => document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10">
      {/* Flex container adaptif */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">
        
        {/* Judul - paling atas di mobile */}
        <h1 className="text-2xl font-bold order-1 md:order-none">
          Portofolio
        </h1>

        {/* Ikon Sosmed - di tengah di mobile */}
        <div className="flex gap-3 order-2 md:order-none">
          {/* Github */}
          <a href="https://github.com/tamaboo" target="_blank" rel="noreferrer">
            <i className="ri-github-fill ri-2x hover:text-violet-500 transition-colors"></i>
          </a>
          
          {/* Instagram */}
          <a href="https://www.instagram.com/iqytamaa/" target="_blank" rel="noreferrer">
            <i className="ri-instagram-fill ri-2x hover:text-pink-500 transition-colors"></i>
          </a>
          
          {/* LinkedIn (Pengganti YouTube) */}
          <a href="https://www.linkedin.com/in/muhammadrizqypratama/" target="_blank" rel="noreferrer">
            <i className="ri-linkedin-fill ri-2x hover:text-blue-500 transition-colors"></i>
          </a>
        </div>

        {/* Dock - paling bawah di mobile */}
        <div className="order-3 md:order-none mt-15 md:mt-0 md:mb-0">
          <Dock 
            items={items}
            panelHeight={30}
            baseItemSize={60}
            magnification={100}
          />
        </div>

      </div>
    </div>
  );
};

export default Footer;