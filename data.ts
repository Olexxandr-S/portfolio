import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi, AiOutlineAntDesign } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from "./types";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b>",
    Icon: RiComputerLine,
  },
  {
    title: "Competitive Coder",
    about:
      "a daily problem solver in <b>Codewars</b>, and helping others using <b>Greepper</b>",
    Icon: MdDeveloperMode,
  },
  {
    title: "UI/UX designer",
    about: "user interface designer using <b>Figma</b>",
    Icon: AiOutlineAntDesign,
  },
  {
    title: "Backend Development",
    about: "Coming soon...",
    Icon: FaServer,
  },
  {
    title: "API Development",
    about: "Coming soon...",
    Icon: AiOutlineApi,
  },
];

export const languages: ISkill[] = [
  {
    name: "HTML",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "CSS",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Java Script",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Redux",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Type Script",
    level: "50%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Github",
    level: "55%",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45%",
  },
  {
    Icon: BsCircleFill,
    name: "Postman",
    level: "45%",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "QR-Code-Generator",
    description:
      "This application allows you to generate a QR code, from a link or text",
    image_path: "/images/QR_Code_Generator.png",
    deployed_url: "https://olexxandrs.github.io/QR-Code-Generator/",
    github_url: "https://github.com/Olexxandr-S/QR-Code-Generator",
    category: ["JavaScript"],
    technologies: ["JavaScript", "RestAPI"],
  },

  {
    id: 2,
    name: "Color Generator",
    image_path: "/images/ColorGenerator.png",
    deployed_url: "https://0lexxandr-color-generator.netlify.app/",
    github_url: "https://github.com/Olexxandr-S/Color-Generator",
    category: ["React"],
    description:
      "An web app which makes it possible to generate all shades of the desired color",
    technologies: ["React", "Values.js"],
  },

  {
    id: 3,
    name: "Kanban Board with dnd",
    image_path: "/assets/images/Kanban_Board.png",
    deployed_url: "https://0lexxandr-s-kanban-board.netlify.app/",
    github_url: "https://github.com/Olexxandr-S/kanban-board",
    category: ["React+TypeScript", "React"],
    description: "Kanban board App with dnd kit and React + TypeScript.",
    technologies: ["React", "Vite", "Chakra-ui", "TypeScript", "Framer-Motion"],
  },

  {
    id: 4,
    name: "Tv Show App",
    image_path: "/images/tv-show-dom-project.png",
    deployed_url: "https://olexxandr-s.github.io/tv-show-dom-project/",
    github_url: "https://github.com/Olexxandr-S/tv-show-dom-project",
    category: ["JavaScript"],
    description:
      "A site that displays movies and series using data from the tv.maze API",
    technologies: ["JavaScript", "RestAPI"],
  },

  {
    id: 5,
    name: "Space-Invaders Game",
    image_path: "/images/Space-Invaders.png",
    deployed_url: "https://olexxandr-s.github.io/space-invaders/",
    github_url: "https://github.com/Olexxandr-S/space-invaders",
    category: ["JavaScript"],
    description:
      "A simple rarity game where you have to destroy alien invaders",
    technologies: ["JavaScript"],
  },

  {
    id: 6,
    name: "DAVID CHU'S CHINA BISTRO",
    image_path: "/images/China_Bistro.png",
    deployed_url:
      "https://olexxandr-s.github.io/coursera_course/module5-solution/",
    github_url:
      "https://github.com/Olexxandr-S/coursera_course/tree/gh-pages/module5-solution",
    category: ["JavaScript"],
    description:
      "A site for a bistro restaurant, when choosing a special menu, it is generated randomly",
    technologies: ["JavaScript", "Bootstrap", "RestAPI"],
  },

  {
    id: 7,
    name: "Rest Countries",
    image_path: "/images/Rest-Countries.png",
    deployed_url: "https://olexxandr-s.github.io/Rest-Countries/",
    github_url: "https://github.com/Olexxandr-S/Rest-Countries",
    category: ["JavaScript"],
    description:
      "Rest countries is a project for displaying the countries of the world and information about them, using the countries API",
    technologies: ["JavaScript", "RestAPI"],
  },

  {
    id: 8,
    name: "To Do App",
    image_path: "/images/ToDo-App.png",
    deployed_url: "https://0lexxandr-s-to-do.netlify.app/",
    github_url: "https://github.com/Olexxandr-S/To-Do-App",
    category: ["React+TypeScript", "React"],
    description:
      "A simple 'to-do' application for scheduling tasks, with using local storage, and state-management 'zustand'",
    technologies: ["React", "Zustand", "Vite"],
  },

  {
    id: 9,
    name: "Web Calculator JS OOP",
    image_path: "/assets/images/Web-Calculator.png",
    deployed_url: "https://web-calculator-in-js.netlify.app/",
    github_url:
      "https://github.com/Olexxandr-S/Web-Calculator-in-JS-OOP/tree/main",
    category: ["JavaScript"],
    description:
      "Web Calculator with using JS object-oriented programming concepts.",
    technologies: ["JavaScript"],
  },

  {
    id: 10,
    name: "Fit Club",
    image_path: "/images/Fit_Club.png",
    deployed_url: "https://0lexxandr-s-fitclub.vercel.app/",
    github_url: "https://github.com/Olexxandr-S/FitClub",
    category: ["React"],
    description: "Landing page layout for selling training programs",
    technologies: ["JavaScript", "React", "Framer-Motion"],
  },

  {
    id: 11,
    name: "2048-game (only for desktop)",
    image_path: "/assets/images/2048-game.png",
    deployed_url: "https://0lexxandr-s-2048-game.netlify.app/",
    github_url: "https://github.com/Olexxandr-S/2048-game",
    category: ["React+TypeScript", "React"],
    description: "2048 Game App using React + TypeScript (only for desktop).",
    technologies: ["React", "Carco", "TypeScript"],
  },

  {
    id: 12,
    name: "Hotel app",
    image_path: "/assets/images/Hotel_in_react.png",
    deployed_url: "https://hotel-in-react.netlify.app/",
    github_url: "https://github.com/Olexxandr-S/hotel-react",
    category: ["React"],
    description:
      "A hotel booking application in React. Homework for the CodeYourFuture React module.",
    technologies: ["React"],
  },
];
