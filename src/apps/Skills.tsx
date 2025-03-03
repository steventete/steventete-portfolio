import { AppWindow, Server, PanelsRightBottom, Video } from "lucide-react";
import BackButton from "../components/BackButton";
import SkillCategory from "../components/SkillCategory";

const personalSkills = {
  frontend: [
    { skill: "HTML", icon: "devicon-html5-plain", color: "text-orange-500" },
    { skill: "CSS", icon: "devicon-css3-plain", color: "text-blue-500" },
    {
      skill: "TwCSS",
      icon: "devicon-tailwindcss-plain",
      color: "text-teal-500",
    },
    { skill: "JS", icon: "devicon-javascript-plain", color: "text-yellow-500" },
    { skill: "TS", icon: "devicon-typescript-plain", color: "text-blue-600" },
    { skill: "React", icon: "devicon-react-plain", color: "text-blue-400" },
    { skill: "Astro", icon: "devicon-astro-plain", color: "text-pink-500" },
  ],
  backend: [
    { skill: "Node", icon: "devicon-nodejs-plain", color: "text-green-600" },
    {
      skill: "Express",
      icon: "devicon-express-original",
      color: "text-gray-500",
    },
    { skill: "MySQL", icon: "devicon-mysql-plain", color: "text-blue-600" },
    {
      skill: "MongoDB",
      icon: "devicon-mongodb-plain",
      color: "text-green-500",
    },
  ],
  design: [
    { skill: "Figma", icon: "devicon-figma-plain", color: "text-purple-600" },
    {
      skill: "Photoshop",
      icon: "devicon-photoshop-plain",
      color: "text-blue-800",
    },
  ],
  video: [
    {
      skill: "Premiere Pro",
      icon: "devicon-premierepro-plain",
      color: "text-blue-900",
    },
    {
      skill: "After Effects",
      icon: "devicon-aftereffects-plain",
      color: "text-blue-900",
    },
  ],
};

const Skills = () => {
  return (
    <div className="appears w-full px-4 mt-12">
      <article className="mb-6">
        <h1 className="text-4xl font-semibold mb-2 text-gray-800">My Skills</h1>
      </article>

      <hr className="my-5 opacity-10" />

      <SkillCategory
        title="Frontend"
        icon={<AppWindow size={24} strokeWidth={1.4} />}
        skills={personalSkills.frontend}
        bgColor="bg-blue-500/20 text-blue-400"
      />

      <SkillCategory
        title="Backend"
        icon={<Server size={24} strokeWidth={1.4} />}
        skills={personalSkills.backend}
        bgColor="bg-green-500/20 text-green-400"
      />

      <SkillCategory
        title="Design"
        icon={<PanelsRightBottom size={24} strokeWidth={1.4} />}
        skills={personalSkills.design}
        bgColor="bg-purple-500/20 text-purple-400"
      />

      <SkillCategory
        title="Video"
        icon={<Video size={24} strokeWidth={1.4} />}
        skills={personalSkills.video}
        bgColor="bg-red-500/20 text-red-400"
      />

      <BackButton />
    </div>
  );
};

export default Skills;
