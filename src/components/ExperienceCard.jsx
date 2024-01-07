import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="text-black"
      contentStyle={{ background: "#1d1836", color: "white" }}
      iconStyle={{ background: experience.iconBg }}
      date={experience.date}
      dateClassName=""
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt="website icon"
            className="w-[60%] h-[60%]"
          />
        </div>
      }>
        <div>
            <h3 className="">{experience.title}</h3>
            <ul className="mt-5 list-disc">
                {experience.points.map(point => (
                    <li className="text-white-100 text-[14px] tracking-wider mx-2" key={point}>{point}</li>
                ))}
            </ul>

        </div>
    </VerticalTimelineElement>
  );
};
export default ExperienceCard;
