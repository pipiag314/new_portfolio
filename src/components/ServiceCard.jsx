import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] xs:h-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{
            max: 45,
            scale: 1,
            speed: 450
        }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col text-center justify-evenly items-center"
        >
            <img className="w-[50px] h-[50px] object-contain" src={icon} alt={`${title} icon`} />
            <h2>{title}</h2>
        </div>
      </motion.div>
    </Tilt>
  );
};
export default ServiceCard;
