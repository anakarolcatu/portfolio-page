import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import challengeDecoder from "@/public/challenge-decodificador.jpeg";
import fromProject from "@/public/form-project.jpeg";
import hairDay from "@/public/hair-day.jpeg";
import aluraGeek from "@/public/alura-geek.png";
import estudoFlix from "@/public/estudo-flix.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "sQpets",
    location: "sQsquad",
    description:
      "HTML/CSS, Responsiveness, React, Javascript, C#, Git, Agile Methodologies, Entrepreneurship, Career Empowerment.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Specialization",
    location: "ONE T6 - Oracle One/Alura",
    description:
      "HTML/CSS, Responsiveness, React, Javascript, Git, Agile Methodologies, Entrepreneurship, Career Empowerment.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Professional Front-End Developer Certificate",
    location: "Coursera/Meta",
    description:
      "HTML/CSS, Responsiveness, React, Bootstrap, Tailwind, Version Control, Git, Unit Testing, UX Design.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "CS50 - Introduction to Computer Science",
    location: "Harvard/Online",
    description:
      "Programming, C, Python, SQL, PHP, HTML/CSS, Javascript, Flask, IA.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "UI Designer",
    location: "Remote",
    description:
      "Developed UI interfaces for websites and applications using Figma using color theory to create better interfaces tailored to each client's target audience.",
    icon: React.createElement(CgWorkAlt),
    date: "2012 - 2023",
  },
] as const;

export const educationData = [
  {
    title: "BTech - Computer System Analysis",
    location: "UNINTER",
    description:
      "Programming logic, Algorithms, Object-Oriented Programming, System Analysis, Web Development, Mobile development, Cloud Computing.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2027",
  },
  {
    title: "Professional Front-End Developer Certificate",
    institution: "Coursera/Meta",
    description:
      "HTML/CSS, Responsiveness, React, Bootstrap, Tailwind, Version Control, Git, Unit Testing, UX Design.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Specialization",
    institution: "ONE T6 - Oracle One/Alura",
    description:
      "HTML/CSS, Responsiveness, React, Javascript, Git, Agile Methodologies, Entrepreneurship, Career Empowerment.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "CS50 - Introduction to Computer Science",
    institution: "Harvard",
    description:
      "Programming logic, C, Python, PHP, HTML/CSS, Flask, IA.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "Design",
    institution: "Guarulhos University",
    description:
      "Concepts of visual design, UI, UX and marketing for audiences. HTML, CSS, Adobe pack, 3D prototypes",
    icon: React.createElement(FaReact),
    date: "2018",
  },
] as const;

export const projectsData = [
  {
    title: "EstudoFlix",
    description:
      "Final project of the ONE program by Oracle in partnership with Alura, where we had to build a page to save your favorite videos in each specified category.",
    tags: ["React", "Styled Components", "Javascript", "API Rest",],
    imageUrl: estudoFlix,
    projectLink: "https://github.com/anakarolcatu/estudoflix",
  },
  {
    title: "Alura Geek",
    description:
      "Project to create an e-commerce page to insert products in an API rest with Json-server using NPM. The main goal is to train concepts of CRUD.",
    tags: ["HTML", "Tailwind", "Javascript", "API Rest",],
    imageUrl: aluraGeek,
    projectLink: "https://github.com/anakarolcatu/alurageek",
  },
  {
    title: "Challenge Decoder",
    description:
      "Final project of the first phase of selection for the Oracle's ONE project in partnership with Alura, where we needed to build a web page to encrypt/decrypt a text with the substitutions provided.",
    tags: ["HTML", "CSS", "Javascript",],
    imageUrl: challengeDecoder,
    projectLink: "https://github.com/anakarolcatu/text-decoder",
  },
  {
    title: "Feedback Form",
    description:
      "A simple HTML and CSS form made for practice both technologies and responsive layouts.",
    tags: ["HTML", "CSS",],
    imageUrl: fromProject,
    projectLink: "https://github.com/anakarolcatu/feedback-form",
  },
  {
    title: "Hair Day",
    description:
      "Final project for the Meta Frontend Developer course - HTML and CSS in depth. The project should be responsive with the specifc requirements for the task",
    tags: ["HTML", "CSS", "Bootstrap",],
    imageUrl: hairDay,
    projectLink: "https://github.com/anakarolcatu/coursera-meta-html-css-assessement",
  },
] as const;

export const skillsData = [
  "C#",
  "Python",
  "POO",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Agile Methodologies",
  "UI/UX",
  "Figma",
] as const;
