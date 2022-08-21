import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGl9mImD4rSnQ/profile-displayphoto-shrink_200_200/0/1651672118638?e=1666224000&v=beta&t=vKZf91RmqckaiMaKAXcgfthCT_906SC2CsFFnluZ3f4"
        alt="user avatar"
        className="mx-auto rounded-full"
        height="128"
        width="128"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-3 text-3xl font-medium tracking-wider sm:-ml-4 font-righteous">
        <span className="text-green">Oleksandr </span>
        <span className="ml-4">Semeniuk</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Front-End Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/assets/Resume.pdf"
        download="Semeniuk_Oleksandr_Resume.pdf"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* //social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a
          href="https://www.linkedin.com/in/olexxandr-s/"
          aria-label="Linkedin"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/OlexxandrS" aria-label="Github">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://twitter.com/Olexxandr_S" aria-label="Twitter">
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* //address */}
      <div
        className="py-4 my-3 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-4 h-4" />
          <span>Ukraine</span>
        </div>
        <p className="my-2 tracking-wider">olexandr04s @gmail.com</p>
        <p className="mt-2 mb-0">+380 970786418</p>
      </div>
      {/* //Email Button */}
      <button
        className="w-10/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:REFACTORING")}
        // !refactoring
      >
        Email Me
      </button>
      <button
        className="w-10/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
