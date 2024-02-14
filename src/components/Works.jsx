import { motion } from "framer-motion";
import { SectionWrapper } from "./hoc";
import { projects } from "../variables";
import { fadeIn, textVariant } from "../utils/motion";

import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <>
      <div>
        <p className="sectionSubText">Projects i've done</p>
        <h2 className="sectionHeadText">Projects</h2>
      </div>

      <div className="w-full flex">
        <p
          className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]">
          The "Projects" section of my front-end portfolio website serves as a
          dynamic showcase of my proficiency and creativity in web development.
          Here, you will find a curated collection of diverse projects that
          highlight my skills in HTML, CSS, and JavaScript, along with any
          relevant frameworks or libraries. Each project is meticulously crafted
          to demonstrate not only technical expertise but also a keen eye for
          design and user experience. From responsive websites to interactive
          web applications, this section provides a comprehensive overview of my
          journey in front-end development. Feel free to explore the featured
          projects, delve into the code repositories on GitHub, and witness the
          evolution of my abilities as a passionate and dedicated front-end
          developer.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} project={project} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(Works, "");
