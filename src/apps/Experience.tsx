import {
  CalendarCheckIcon,
  Newspaper,
  TrendingUp,
  YoutubeIcon,
  LayoutListIcon
} from "lucide-react";
import BackButton from "../components/BackButton";

const experiences = [
  {
    id: 1,
    title: "FullStack Developer",
    company: "Hey Profe",
    date: "2023 - 2024",
    description: "Developed landing pages with Astro and TailwindCSS, also worked with PHP and MySQL to create and admin panel.",
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
    description: "Create tutorials and reviews about smartphones and technology.",
    icon: YoutubeIcon,
  },
];

const Experience = () => {
  return (
    <section className="mt-12 mx-3 appears">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        My Experience
      </h2>

      <div className="relative">
        {/* Línea central vertical */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-[calc(100%-4rem)] w-0.5 bg-gray-300 dark:bg-gray-600"></div>

        {experiences.map((exp) => {
          const Icon = exp.icon;
          return (
            <div key={exp.id} className="mb-8 relative">
              {/* Tarjeta principal */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="p-6">
                  {/* Contenido principal */}
                  <div className="flex items-start space-x-4">
                    {/* Ícono */}
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full shadow-sm">
                      <Icon
                        className="text-blue-600 dark:text-blue-300"
                        size={24}
                      />
                    </div>

                    <div className="flex-1">
                      {/* Título y empresa */}
                      <h3 className="font-bold text-gray-800 dark:text-white text-lg">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-sm">
                        {exp.company}
                      </p>

                      {/* Descripción */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  {/* Fecha */}
                  <div className="mt-4 flex items-center text-green-600 dark:text-green-400 text-sm">
                    <CalendarCheckIcon
                      strokeWidth={1.5}
                      size={18}
                      className="mr-2"
                    />
                    <span className="font-medium">{exp.date}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <BackButton />
    </section>
  );
};

export default Experience;
