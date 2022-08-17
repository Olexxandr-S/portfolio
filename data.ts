import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi, AiOutlineAntDesign } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IService } from "./type";

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
