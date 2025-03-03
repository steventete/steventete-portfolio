import { BadgeDollarSign, GithubIcon, InstagramIcon, Mail, YoutubeIcon } from "lucide-react";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";

const icons = [
  {
    name: "Youtube",
    icon: YoutubeIcon,
    color: "text-red-700",
    url: "https://youtube.com/@SimpleTTech",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    color: "text-orange-700",
    url: "https://instagram.com/SimpleTTech",
  },
  {
    name: "Github",
    icon: GithubIcon,
    color: "text-black",
    url: "https://github.com/steventete"
  },
  {
    name: "Paypal",
    icon: BadgeDollarSign,
    color: "text-blue-700",
    url: "https://www.paypal.com/paypalme/simplettech"
  },
];
const About = () => {
  return (
    <>
      <div className="appears w-full top-14 mt-12 p-3">
        <section className="flex flex-col items-center space-y-6 mx-auto max-w-md mb-8">
          {/* Imagen */}
          <figure className="w-48 h-48">
            <img
              className="rounded-full w-full h-full object-cover"
              src="https://avatars.githubusercontent.com/u/128250217?v=4"
              alt="Steven Tete profile photo"
            />
          </figure>

          {/* Texto */}
          <article className="text-center">
            <p className="text-3xl font-semibold">Steven Tete</p>
            <p className="text-lg text-gray-400">FullStack Developer</p>
          </article>

          <div className="flex gap-4">
            {icons.map((icon, index) => {
              const Icon = icon.icon;
              return (
                <a
                  key={index}
                  href={icon.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 rounded-full bg-white shadow-md hover:shadow-xl transition ${icon.color}`}
                >
                  <Icon size={24} />
                </a>
              );
            }
            )}
                            <Link
                  to={"/contact"}
                  className={`p-2 rounded-full bg-white shadow-md hover:shadow-xl transition text-green-600`}
                >
                  <Mail size={24} />
                </Link>
          </div>
        </section>
        <BackButton />
      </div>
    </>
  );
};

export default About;