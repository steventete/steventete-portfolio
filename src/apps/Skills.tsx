import Accordion from "../components/Accordion";
import {
  AppWindow,
  Server,
  PanelsRightBottomIcon,
  Video,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

const personalSkills = {
  frontend: [
    { skill: "HTML", icon: "devicon-html5-plain" },
    { skill: "CSS", icon: "devicon-css3-plain" },
    { skill: "TwCSS", icon: "devicon-tailwindcss-plain" },
    { skill: "JS", icon: "devicon-javascript-plain" },
    { skill: "TS", icon: "devicon-typescript-plain" },
    { skill: "React", icon: "devicon-react-plain" },
    { skill: "Astro", icon: "devicon-astro-plain" },
  ],
  backend: [
    { skill: "Node", icon: "devicon-nodejs-plain" },
    { skill: "Express", icon: "devicon-express-original" },
    { skill: "MySQL", icon: "devicon-mysql-plain" },
    { skill: "MongoDB", icon: "devicon-mongodb-plain" },
  ],
  design: [
    { skill: "Figma", icon: "devicon-figma-plain" },
    { skill: "Photoshop", icon: "devicon-photoshop-plain" },
  ],
  video: [
    { skill: "Premiere Pro", icon: "devicon-premierepro-plain" },
    { skill: "After Effects", icon: "devicon-aftereffects-plain" },
  ],
};
const Skills = () => {
  return (
    <div className="appears w-full px-4 absolute top-12">
      <article>
        <h1 className="text-2xl font-semibold mb-2">Skills</h1>
        <p className="text-sm text-pretty">
          In my professional and personal career, I have worked with different
          programming languages, frameworks and various tools that I have
          learned for a specific purpose and that have helped me grow as a
          multifaceted professional.
        </p>
      </article>
      <hr className="my-5 opacity-10" />

      {/* Frontend */}
      <Accordion
        title="Frontend"
        icon={<AppWindow size={24} strokeWidth={1.4} />}
      >
        {personalSkills.frontend.map((item, index) => (
          <div
            key={index}
            className="skill-item flex flex-col items-center transition-transform hover:scale-110"
          >
            <i className={`${item.icon} text-3xl fadeAndScale cursor-pointer`}></i>
            <p className="text-center mt-2 text-sm font-normal">{item.skill}</p>
          </div>
        ))}
      </Accordion>

      {/* Backend */}
      <Accordion title="Backend" icon={<Server size={24} strokeWidth={1.4} />}>
        {personalSkills.backend.map((item, index) => (
          <div
            key={index}
            className="skill-item flex flex-col items-center transition-transform hover:scale-110"
          >
            <i className={`${item.icon} text-3xl fadeAndScale cursor-pointer`}></i>
            <p className="text-center mt-2 text-sm font-normal">{item.skill}</p>
          </div>
        ))}
      </Accordion>

      {/* Design */}
      <Accordion
        title="Design"
        icon={<PanelsRightBottomIcon size={24} strokeWidth={1.4} />}
      >
        {personalSkills.design.map((item, index) => (
          <div
            key={index}
            className="skill-item flex flex-col items-center transition-transform hover:scale-110"
          >
            <i className={`${item.icon} text-3xl fadeAndScale cursor-pointer`}></i>
            <p className="text-center mt-2 text-sm font-normal">{item.skill}</p>
          </div>
        ))}
      </Accordion>

      {/* Video */}
      <Accordion title="Video" icon={<Video size={24} strokeWidth={1.4} />}>
        {personalSkills.video.map((item, index) => (
          <div
            key={index}
            className="skill-item flex flex-col items-center transition-transform hover:scale-110"
          >
            <i className={`${item.icon} text-3xl fadeAndScale cursor-pointer`}></i>
            <p className="text-center mt-2 text-sm font-normal">{item.skill}</p>
          </div>
        ))}
      </Accordion>
      <Link
        to={"/home"}
        className="flex justify-center items-center w-full gap-1 font-normal border border-white/10 rounded-lg p-1 transition hover:bg-white/5"
      >
        <Home size={20} strokeWidth={1.5} /> Back to home
      </Link>
    </div>
  );
};

export default Skills;
