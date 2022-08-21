import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../types";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animation";
import Head from "next/head";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newProjectsData = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newProjectsData);
    setActive(category);
  };

  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "85vh" }}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web Developer | Projects</title>
      </Head>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div
        className="grid grid-cols-12 gap-4 my-3 relative"
        variants={stagger}
        initial="initial"
        animate="animate"
        id="top"
      >
        {projects.map((project) => (
          <motion.div
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200
           dark:bg-dark-200 rounded-lg"
            variants={fadeInUp}
            key={project.name}
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
