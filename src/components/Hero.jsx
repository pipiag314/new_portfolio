import { ComputerCanvas } from "./canvas/Computer";
import { motion } from "framer-motion"
import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";

const Hero = () => {
  const isMobile = useContext(MobileContext);
  
  return (
    <section className={`relative w-full h-[600px] mobile:h-screen  mx-auto`}>
      <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className="heroHeadText text-white">
            Hi, I'm <span className="text-[#915eff]">Gela</span>
          </h1>
          <p className="heroSubText mt-2 ">
            Junior Front-end web developer
            <br className="sm:hidden block" /> (trying to become full-stack)
          </p>
        </div>
      </div>
      {!isMobile ? (
        <>
          <ComputerCanvas />
        </>
      ) : null}
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div 
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
    </section>
  );
};
export default Hero;
