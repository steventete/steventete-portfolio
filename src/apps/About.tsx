import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const About = () => {
  return (
    <>
      <div className="appears w-full flex top-14 absolute justify-center">
        <section className="flex w-full items-center space-x-3 mx-auto">
          <figure className="w-3/12">
            <img
              className="rounded-full "
              src="https://avatars.githubusercontent.com/u/128250217?v=4"
              alt="Steven Tete profile photo"
            />
          </figure>
          <article className="w-1/2">
            <p className="text-2xl">Steven Tete</p>
            <p>FullStack Developer</p>
          </article>
        </section>
      </div>

      <Link
        to={"/home"}
        className="flex justify-center items-center w-[90%] left-1/2 -translate-x-1/2 gap-1 font-normal border border-white/10 rounded-lg p-1 transition hover:bg-white/5 absolute bottom-5"
      >
        <Home size={20} strokeWidth={1.5} /> Back to home
      </Link>
    </>
  );
};

export default About;
