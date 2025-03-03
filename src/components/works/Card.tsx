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
      "bg-red-500/5 text-red-400 border-red-400",
      "bg-blue-500/5 text-blue-400 border-blue-400",
      "bg-green-500/5 text-green-400 border-green-400",
      "bg-yellow-500/5 text-yellow-400 border-yellow-400",
      "bg-indigo-500/5 text-indigo-400 border-indigo-400",
      "bg-purple-500/5 text-purple-400 border-purple-400",
      "bg-pink-500/5 text-pink-400 border-pink-400",
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
  