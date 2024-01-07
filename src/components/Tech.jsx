import BallCanvas from "./canvas/BallCanvas";
import { SectionWrapper } from "./hoc";
import { technologies } from "../variables";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-col">
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">The Tools I use</p>
        <h2 className="sectionHeadText">Tools.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(Tech, "");
