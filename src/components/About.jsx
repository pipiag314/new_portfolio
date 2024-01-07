import { motion } from "framer-motion";
import { services } from "../variables";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";
import { SectionWrapper } from "./hoc";

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am Gela Pipia passionate self taught front-end developer seeking an <br />
        opportunity to translate my dedication and self motivated learning into <br />
        impactful web experiences.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
