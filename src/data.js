import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/data-science-1.svg";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";
import Tools20 from "/assets/tools/laravel.svg";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Data Science",
    ket: "Analytics",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Kotlin",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "Laravel",
    ket: "Framework",
    dad: "1900",
  },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Healthy Life",
    subtitle: "A full-stack web application designed to help users monitor their healthy lifestyle.",
    fullDescription:"Healthy Life is a full-stack web application designed to help users monitor their healthy lifestyle. This platform provides the latest health information through the News feature and offers a utility tool in the form of an interactive Calorie Calculator. Technically, I built a dynamic and responsive user interface using React.js for a smooth experience. On the server side, I developed a RESTful API using PHP to handle business logic, while all data is managed efficiently using a PostgreSQL relational database.",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Fawwazaiman7/Healthy-Life-Kelompok-2",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "TemuCipayung",
    subtitle: "A modern frontend web application built with Next.js to promote MSMEs in Setu Cipayung.",
    fullDescription:"TemuCipayung is a modern frontend web application built with Next.js to promote MSMEs (UMKM) in Setu Cipayung, East Jakarta. The platform features full internationalization (i18n) with Indonesian and English support, a responsive dark mode theme, interactive mini-games to engage visitors, and detailed business listings to boost local economic growth.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://umkm-cipayung.vercel.app/",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Real-time IDR Money Detection",
    subtitle: "Real-time Rupiah banknote detection with audio announcement using Deep Learning.",
    fullDescription:"A computer vision system that detects Indonesian Rupiah banknotes in real-time. Powered by Deep Learning (YOLO), it accurately classifies currency values and triggers an instant audio announcement, serving as an effective assistive tool for accessibility.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "xxxx",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Personal Web Portfolio",
    subtitle: "A modern, clean, and interactive showcase of my development skills and creative projects.",
    fullDescription:"I created this personal portfolio to be a living demonstration of my skills, blending clean design principles with robust technical capability. It serves as a comprehensive gateway to my work in web development, software engineering, and Machine Learning. The site is engineered to give visitors—whether recruiters or fellow developers—a clear understanding of my creative problem-solving abilities and technical precision in building digital solutions",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5,
    title: "Vochrono",
    subtitle: "A Flutter-based task management application designed for efficiency using a voice-first approach.",
    fullDescription:"Vochrono is a Flutter-based task management application designed for maximum efficiency through a voice-first approach. Recognizing that typing on a cell phone is often a hassle, this app allows users to create to-do lists instantly with just voice commands, leveraging Speech-to-Text technology. In addition to fast voice input, the app comes with intuitive task status tracking and real-time collaboration features, allowing users to share and sync to-do lists with friends or coworkers. This project demonstrated my ability to build Flutter applications that are not only visually appealing but also deeply integrated with native device features and cloud services for collaboration.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Pemira PNJ e-voting",
    subtitle: "A high-performance, secure e-voting interface built with Next.js to handle campus-wide elections.",
    fullDescription:"For this project, I designed and developed the frontend of the Pemira PNJ e-voting platform utilizing Next.js. The primary objective was to deliver a highly secure, fast, and mobile-responsive interface capable of facilitating a smooth and reliable digital election process for thousands of students across the campus. This project highlights my expertise in Front-End Development and Web Design for high-stakes applications.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "",
    dad: "600",
  },
];

import Cert1 from "/assets/certifications/Belajar Penerapan Data Science dengan Microsoft Fabric.png"; 
import Cert2 from "/assets/certifications/Membangun Aplikasi Gen AI dengan Microsoft Azure.png"; 
import Cert3 from "/assets/certifications/Belajar Fundamental Deep Learning.png"; 
import Cert4 from "/assets/certifications/Membangun Sistem Machine Learning.png"; 
import Cert5 from "/assets/certifications/Belajar Dasar AI.png"; 
import Cert6 from "/assets/certifications/FIGMA FOR UIUX DESIGN.png"; 
import Cert7 from "/assets/certifications/Belajar Fundamental Analisis Data.png"; 
import Cert8 from "/assets/certifications/FRONTEND - REACT.png"; 
import Cert9 from "/assets/certifications/Putra Vegas.png"; 
import Cert10 from "/assets/certifications/Duta PNJ.jpeg"; 
import Cert11 from "/assets/certifications/Software Development.png"; 
import Cert12 from "/assets/certifications/Staff Mentor.png"; 


export const listCertifications = [
  {
    id: 1,
    image: Cert1,
    name: "Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    date: "2 February 2026",
    desc: "Learned to implement end-to-end data science solutions using Microsoft Fabric, focusing on data ingestion, exploration, and model building in a cloud environment.",
    credentialUrl: "https://drive.google.com/file/d/10Yx4aaW8T49vEFMjyuQtXk8reWOV8MTG/view?usp=drive_link", 
    dad: "100",
  },
  {
    id: 2,
    image: Cert2,
    name: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    issuer: "Dicoding Indonesia",
    date: "28 January 2026",
    desc: "Gained practical experience in building Generative AI applications, utilizing Microsoft Azure services to integrate Large Language Models (LLMs) into software solutions.",
    credentialUrl: "https://drive.google.com/file/d/10Yx4aaW8T49vEFMjyuQtXk8reWOV8MTG/view?usp=drive_link", 
    dad: "100",
  },
  {
    id: 3,
    image: Cert3,
    name: "Belajar Fundamental Deep Learning",
    issuer: "Dicoding Indonesia",
    date: "2 October 2025",
    desc: "Mastered the core concepts of Deep Learning, including the architecture of Neural Networks, CNNs, and optimization techniques for training AI models.",
    credentialUrl: "https://drive.google.com/file/d/164768wlmc88kVrNS9i8miWROJgUAGFHz/view?usp=drive_link", 
    dad: "100",
  },
  {
    id: 4,
    image: Cert4,
    name: "Membangun Sistem Machine Learning",
    issuer: "Dicoding Indonesia",
    date: "10 October 2025",
    desc: "Focused on the production side of AI, learning how to build, deploy, and monitor scalable Machine Learning systems to solve real-world problems.",
    credentialUrl: "https://drive.google.com/file/d/1xeFWFUAh2fOEneP182Jj7UjB-fYJ_MPD/view?usp=drive_link", 
    dad: "100",
  },
  {
    id: 5,
    image: Cert5,
    name: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "22 August 2025 ",
    desc: "Acquired foundational knowledge of Artificial Intelligence, covering basic logic, search algorithms, and the broad scope of AI applications in technology.",
    credentialUrl: "https://drive.google.com/file/d/1KNvmK579BEFGgoNlIlulRo76PauNq5RX/view?usp=drive_link", 
    dad: "100",
  },
  {
    id: 6,
    image: Cert6,
    name: "FIGMA FOR UIUX DESIGN",
    issuer: "MySkill Indonesia",
    date: "7 July 2025",
    desc: "Completed training in UI/UX design fundamentals using Figma, focusing on wireframing, prototyping, and creating user-friendly digital interfaces.",
    credentialUrl: "https://drive.google.com/file/d/1VHPjnx2vkryg0X4ZRwNXDDGyPgkhv7eI/view?usp=drive_link", 
    dad: "100",
  },
  {
    id: 7,
    image: Cert7,
    name: "Belajar Fundamental Analisis Data",
    issuer: "Dicoding Indonesia",
    date: "9 January 2026",
    desc: "Developed skills in the data analysis process, including data wrangling, exploratory data analysis (EDA), and data visualization using Python.",
    credentialUrl: "https://drive.google.com/file/d/1MjWCrJFqeHkhSfC6XA_wtwMGozea7uU8/view?usp=drive_link", 
    dad: "100",
  },
  {
    id: 8,
    image: Cert8,
    name: "FRONTEND - REACT",
    issuer: "MySkill Indonesia",
    date: "9 July 2025",
    desc: "Learned front-end web development with React.js, mastering component-based architecture, state management, and responsive web design.",
    credentialUrl: "https://drive.google.com/file/d/1EEAtjNugqDji3JiLJHDYbP1RYHoOdq78/view?usp=drive_link", 
    dad: "100",
  },
  {
    id: 9,
    image: Cert9,
    name: "Putra Vegas",
    issuer: "SMAN 113 Jakarta",
    date: "2021-2022",
    desc: "Selected as a student representative (Putra Vegas), demonstrating leadership, public speaking skills, and active contribution to school events and culture.",
    credentialUrl: "https://drive.google.com/file/d/19tdUxx6A2m2FgVOc8WjQnzQcXlgTczvm/view?usp=drive_link", 
    dad: "100",
  },
  {
    id: 10,
    image: Cert10,
    name: "Duta PNJ",
    issuer: "Politeknik Negeri Jakarta",
    date: "2024-2025",
    desc: "Served as the Campus Ambassador (Duta PNJ), representing the university in public relations, hosting events, and engaging with the student community.",
    credentialUrl: "xxx", 
    dad: "100",
  },
  {
    id: 11,
    image: Cert11,
    name: "Software Development",
    issuer: "KSM CSC PNJ",
    date: "2023-2024",
    desc: "Participated in the Computer Student Club's software development division, collaborating on coding projects and enhancing technical skills in a team setting.",
    credentialUrl: "https://drive.google.com/file/d/1GSpZ-e5ridpVODUpki5GSXzTrefey1cH/view?usp=drive_link", 
    dad: "100",
  },
  {
    id: 12,
    image: Cert12,
    name: "Staff Mentor",
    issuer: "HIMATIK PNJ",
    date: "2024",
    desc: "Actively contributed as a mentor staff member, guiding new students and assisting in the management of student development programs.",
    credentialUrl: "https://drive.google.com/file/d/120fFLca7OVMdiMfhjojSANY20rsPH1U2/view?usp=drive_link", 
    dad: "100",
  },
  
];
