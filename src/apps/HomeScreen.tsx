import Greeting from "../components/Greeting";
import Dock from "../components/Dock";
import Wallpaper from "../components/home/Wallpaper";

const HomeScreen = () => {
  return (
    <>
    <section className="h-full w-full appears rounded-3xl">
      <Wallpaper />
      <Greeting />
      <Dock />
      </section>
    </>
  );
};
export default HomeScreen;
