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
    title: "Backend Development",
    about:
      "handle database, server, api using <b>Express</b> & other popular frameworks",
    Icon: FaServer,
  },
  {
    title: "API Development",
    about:
      "I can develop robust REST API using <b>django-rest-api</b> & <b>Node API</b>",
    Icon: AiOutlineApi,
  },
  {
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b> and <b>Leet Code</b>",
    Icon: MdDeveloperMode,
  },
  {
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b> and <b>Framer</b>",
    Icon: AiOutlineAntDesign,
  },
  {
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
    Icon: RiComputerLine,
  },
];

export const languages: ISkill[] = [
  {
    name: "Python",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Java Script",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "React Native",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "Django",
    level: "60%",
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
    name: "Figma",
    level: "85%",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45%",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45%",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    technologies: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 2,
    name: "Algorithm Visualizer",
    image_path: "/images/algoVisual.png",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    technologies: ["React", "firebase", "Framer Motion"],
  },

  {
    id: 3,
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    technologies: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    id: 4,
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    technologies: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id: 5,
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["django", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    technologies: ["React", "Django", "Django REST API"],
  },

  {
    id: 6,
    name: "Color Classification using tf.js",
    image_path: "/images/color.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["express"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    technologies: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    id: 7,
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "#",
    github_url: "#",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    technologies: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    id: 8,
    name: "Football App",
    image_path: "/images/football.png",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    technologies: [
      "React",
      "Redux",
      "Firebase Auth",
      "API",
      "Sass",
      "Bootstrap",
    ],
  },
];
