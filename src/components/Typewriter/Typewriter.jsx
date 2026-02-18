import { useState, useEffect } from "react";

const Typewriter = ({ texts, speed = 150, pause = 1500, deleteSpeed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[index % texts.length];
    
    // Tentukan kecepatan ngetik vs hapus
    const typeSpeed = isDeleting ? deleteSpeed : speed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Sedang Mengetik
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
        
        // Jika selesai ngetik satu kalimat
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), pause); // Tunggu sebentar sebelum hapus
        }
      } else {
        // Sedang Menghapus
        setDisplayedText((prev) => currentText.slice(0, prev.length - 1));
        
        // Jika selesai menghapus
        if (displayedText === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1); // Ganti ke kata berikutnya
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, texts, speed, pause, deleteSpeed]);

  return (
    <span className="inline-block">
      {displayedText}
      <span className="animate-pulse font-light">|</span> {/* Kursor kedip */}
    </span>
  );
};

export default Typewriter;  