import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center className="flex flex-col justify-center items-center">
      <span className="canvas-loader"></span>
      <p className="text-[24px] text-[#f1f1f1] font-extrabold mt-10">
        {progress.toFixed(2)}
      </p>
    </Html>
  );
};

export default CanvasLoader;
