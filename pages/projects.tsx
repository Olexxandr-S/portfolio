import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "75vh" }}>
      <nav>Navbar</nav>
      <div className="grid grid-cols-12 gap-4 my-3 relative">
        {projects.map((project) => (
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg">
            <ProjectCard project={project} key={project.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
