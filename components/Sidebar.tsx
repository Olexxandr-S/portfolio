import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGl9mImD4rSnQ/profile-displayphoto-shrink_200_200/0/1651672118638?e=1666224000&v=beta&t=vKZf91RmqckaiMaKAXcgfthCT_906SC2CsFFnluZ3f4"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-3 text-3xl font-medium tracking-wider sm:-ml-6 font-kaushan">
        <span className="sm:ml-6 text-green">Oleksandr </span>
        Semeniuk
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Front-End Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* //social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* //address */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Ukraine</span>
        </div>
        <p className="my-2">olexandr04s@gmail.com</p>
        <p className="my-2">+380970786418</p>
      </div>
      {/* //Email Button */}
      <button
        className="w-10/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:REFACTORING")}
        // refactoring
      >
        Email Me
      </button>
      <button className="w-10/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
