import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const SectionWrapper = (Component, id_name) => {
  return function HOC() {
    return (
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25}}
          className="padding max-w-7xl mx-auto relative z-0"
          id={id_name}
        >
          <Component />
        </motion.section>
    )
  }
}
export default SectionWrapper