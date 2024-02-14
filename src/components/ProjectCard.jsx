import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import { github, live } from "../assets";


const ProjectCard = ({ project, index }) => {
  return (
    <div>
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
            <div className="relative w-full h-[230px]">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
                    <div
                        onClick={() => window.open(project.live_preview_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img 
                            src={live}
                            alt="github logo"
                            className="w-[70%] h-[70%]"
                        />
                    </div>
                    <div
                        onClick={() => window.open(project.source_code_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img 
                            src={github}
                            alt="github logo"
                            className="w-[70%] h-[70%]"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <div key={tag.name} className={`${tag.color} text-[14px]`}>#{tag.name}</div>
                ))}
            </div>
            
        </Tilt>
    </div>
  )
}
export default ProjectCard