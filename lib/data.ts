import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import challengeDecoder from "@/public/challenge-decodificador.jpeg";
import fromProject from "@/public/form-project.jpeg";
import hairDay from "@/public/hair-day.jpeg";

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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "Bootstrap",
  "Agile Methodologies",
  "UI/UX",
  "Figma",
] as const;