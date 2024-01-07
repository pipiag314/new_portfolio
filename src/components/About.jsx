import { motion } from "framer-motion";
import { services } from "../variables";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";
import { SectionWrapper } from "./hoc";
import { github, linkedin } from "../assets";

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am Gela Pipia passionate self taught front-end developer seeking an{" "}
        <br />
        opportunity to translate my dedication and self motivated learning into{" "}
        <br />
        impactful web experiences.
      </motion.p>

      <motion.div className="mt-5 flex gap-5 pl-5" variants={textVariant()}>
        <a href="https://github.com/pipiag314" target="_blank">
          <img src={github} alt="github logo" className="w-[60px] h-[60px]" />
        </a>
        <a href="https://www.linkedin.com/in/gelapipia10/" target="_blank">
          <img
            src={linkedin}
            alt="linkedin logo"
            className="w-[60px] h-[60px]"
          />
        </a>
        <button className="text-lg font-bold border-2 rounded-[100px] px-4 py-2 hover:text-primary hover:bg-secondary transition-all duration-200">
          <a href="./gelapipiaCV.pdf" download="Gela Pipia CV">
            Download My CV
          </a>
        </button>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
