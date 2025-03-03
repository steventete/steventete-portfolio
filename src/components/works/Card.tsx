type Work = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demo: string;
  };
  
  interface CardProps {
    work: Work;
  }
  
  function getRandomTailwindColor() {
    const colors = [
      "bg-red-500/10 text-red-600 border-red-600",
      "bg-blue-500/10 text-blue-600 border-blue-600",
      "bg-green-500/10 text-green-600 border-green-600",
      "bg-yellow-500/10 text-yellow-600 border-yellow-600",
      "bg-indigo-500/10 text-indigo-600 border-indigo-600",
      "bg-purple-500/10 text-purple-600 border-purple-600",
      "bg-pink-500/10 text-pink-600 border-pink-600",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  const Card: React.FC<CardProps> = ({ work }) => {
    return (
      <a
        href={work.demo}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center border border-black/20 pb-5 mx-2 m-4 rounded-lg hover:shadow-lg hover:shadow-black/30 bg-white/30 shadow-md"
      >
        <figure className="w-full h-32 overflow-hidden rounded-t-lg">
          <img className="rounded-t-lg" src={work.image} alt={work.title} />
        </figure>
        <section className="w-11/12">
          <h2 className="text-xl font-semibold mt-2 mb-1">{work.title}</h2>
          <p className="text-sm text-pretty font-light">{work.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {work.technologies.map((tech, index) => {
              const colorClass = getRandomTailwindColor();
              return (
                <span
                  key={index}
                  className={`px-2 py-1 rounded-md border text-xs font-medium ${colorClass}`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </section>
      </a>
    );
  };
  
  export default Card;
  