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
    level: "85%",
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
    github_url: "https://github.com/OlexxandrS/QR-Code-Generator",
    category: ["JavaScript"],
    technologies: ["JavaScript", "RestAPI"],
  },
  {
    id: 2,
    name: "Color Generator",
    image_path: "/images/ColorGenerator.png",
    deployed_url: "https://0lexxandr-color-generator.netlify.app/",
    github_url: "https://github.com/OlexxandrS/Color-Generator",
    category: ["React"],
    description:
      "An web app which makes it possible to generate all shades of the desired color",
    technologies: ["React", "Values.js"],
  },

  {
    id: 3,
    name: "Fit Club",
    image_path: "/images/Fit_Club.png",
    deployed_url: "https://fitclubolexxandr.herokuapp.com/",
    github_url: "https://github.com/OlexxandrS/FitClub",
    category: ["React"],
    description: "Landing page layout for selling training programs",
    technologies: ["JavaScript", "React", "Framer-Motion"],
  },

  {
    id: 4,
    name: "Tv Show App",
    image_path: "/images/tv-show-dom-project.png",
    deployed_url: "https://olexxandrs.github.io/tv-show-dom-project/",
    github_url: "https://github.com/OlexxandrS/tv-show-dom-project",
    category: ["JavaScript"],
    description:
      "A site that displays movies and series using data from the tv.maze API",
    technologies: ["JavaScript", "RestAPI"],
  },

  {
    id: 5,
    name: "Space-Invaders Game",
    image_path: "/images/Space-Invaders.png",
    deployed_url: "https://olexxandrs.github.io/space-invaders/",
    github_url: "https://github.com/OlexxandrS/space-invaders",
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
      "https://olexxandrs.github.io/coursera_course/module5-solution/",
    github_url:
      "https://github.com/OlexxandrS/coursera_course/tree/gh-pages/module5-solution",
    category: ["JavaScript"],
    description:
      "A site for a bistro restaurant, when choosing a special menu, it is generated randomly",
    technologies: ["JavaScript", "Bootstrap", "RestAPI"],
  },

  {
    id: 7,
    name: "Rest Countries",
    image_path: "/images/Rest-Countries.png",
    deployed_url: "https://olexxandrs.github.io/Rest-Countries/",
    github_url: "https://github.com/OlexxandrS/Rest-Countries",
    category: ["JavaScript"],
    description:
      "Rest countries is a project for displaying the countries of the world and information about them, using the countries API",
    technologies: ["JavaScript", "RestAPI"],
  },
];
