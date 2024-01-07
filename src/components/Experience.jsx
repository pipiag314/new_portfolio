import { VerticalTimeline } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"
import { experiences } from "../variables"
import { SectionWrapper } from "./hoc"
import { textVariant } from "../utils/motion"
import ExperienceCard from "./ExperienceCard"

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">My Work</p>
        <h2 className="sectionHeadText">Experience</h2>
        <p className="text-secondary">(<strong>Warning:</strong> there is a fake information because I don't have working experience)</p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((e, index) => (
            <ExperienceCard key={index} experience={e} />
          ))}
        </VerticalTimeline>
      </div>
      
    </>
  )
}
export default SectionWrapper(Experience, "work");