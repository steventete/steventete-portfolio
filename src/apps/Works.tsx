import BackButton from "../components/BackButton";
import Card from "../components/works/Card";

const works = [
  {
    title: "Hey Profe Website",
    description: "Landing page for an academic asesory website",
    image: "https://i.ibb.co/B2w54jmz/Hey-Profe-Screenshot.png",
    technologies: ["Astro", "TailwindCSS"],
    demo: "https://heyprofe.net",
  },
  {
    title: "TecnoZet Website",
    description: "Biography website for a YouTube content creator.",
    image: "https://i.ibb.co/TyZNH31/Tecno-Zet-Screenshot.png",
    technologies: ["Astro", "TailwindCSS"],
    demo: "https://tecnozet-webpage.vercel.app",
  },
  {
    title: "AutoRank Blog",
    description: "Blog for a car review website",
    image: "https://i.ibb.co/39wcLxGG/Auto-Rank-Screenshot.png",
    technologies: ["Wordpress"],
    demo: "https://autorank.com.co",
  },
  {
    title: "YT Comment Scraper",
    description: "Web application to scrape comments from YouTube videos",
    image:
      "https://raw.githubusercontent.com/steventete/YouTubeCommentScraper/refs/heads/main/screenshots/CommentsLoaded.png",
    technologies: ["React", "TailwindCSS"],
    demo: "https://youtubecommentscraper.vercel.app",
  },
  {
    title: "IntegralApp",
    description:
      "Python-based GUI application to simplify the calculation of definite integrals using numerical methods.",
    image:
      "https://raw.githubusercontent.com/steventete/integral-app/refs/heads/main/screenshots/graph-view.png",
    technologies: ["Python", "PyQt5"],
    demo: "https://github.com/steventete/integral-app",
  },
  {
    title: "WeatherNow",
    description: "Web application to check the weather in real time",
    image:
      "https://raw.githubusercontent.com/steventete/WeatherNow/refs/heads/main/Screenshots/Main.png",
    technologies: ["HTML", "CSS", "JS"],
    demo: "https://weathernowforecast.vercel.app",
  },
];

const Works = () => {
  return (
    <>
      <div className="appears mx-2 mt-12">
        <div className="w-full flex justify-center">
          <section className="w-11/12">
            <h1 className="text-4xl font-semibold mt-0 text-gray-800">
              My Works
            </h1>
          </section>
        </div>

        {works.map((work, index) => (
          <Card key={index} work={work} />
        ))}
        <BackButton />
      </div>
    </>
  );
};

export default Works;
