import {
  CalendarCheckIcon,
  Newspaper,
  TrendingUp,
  YoutubeIcon,
  LayoutListIcon,
} from "lucide-react";
import BackButton from "../components/BackButton";

const experiences = [
  {
    id: 1,
    title: "FullStack Developer",
    company: "Hey Profe",
    date: "2023 - 2024",
    description:
      "Developed landing pages with Astro and TailwindCSS, also worked with PHP and MySQL to create and admin panel.",
    icon: LayoutListIcon,
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "TecnoZet",
    date: "2024",
    description: "Created a dynamic website for a YouTube content creator.",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Fullstack Developer",
    company: "AutoRank",
    date: "2024",
    description: "Worked with Wordpress to create a car review website.",
    icon: Newspaper,
  },
  {
    id: 4,
    title: "Content Creator",
    company: "SimpleTTech",
    date: "2020 - Present",
    description:
      "Create tutorials and reviews about smartphones and technology.",
    icon: YoutubeIcon,
  },
];

const Experience = () => {
  return (
    <section className="mt-12 mx-3 appears">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">
        My Experience
      </h2>

      <div className="relative">
        {/* Línea vertical estilizada (solo absolute) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-purple-800 -z-10" />

        <div className="space-y-8">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.id}
                className="flex justify-center items-center"
              >
                <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 w-full max-w-[95%] p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full shadow-md">
                      <Icon className="text-blue-600" size={24} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2 text-sm">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 text-sm">{exp.description}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center text-green-600 text-sm justify-center">
                    <CalendarCheckIcon
                      strokeWidth={1.5}
                      size={18}
                      className="mr-2"
                    />
                    <span className="font-medium">{exp.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Botón de retroceso */}
      <div className="mt-6 flex justify-center">
        <BackButton />
      </div>
    </section>
  );
};

export default Experience;
