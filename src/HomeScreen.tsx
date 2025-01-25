import StatusBar from "./components/StatusBar";
import Greeting from "./components/Greeting";
import Dock from "./components/Dock";

const HomeScreen = () => {
  return (
    <>
      <div className="appears bg-[url('https://papers.co/wallpaper/papers.co-vs45-texture-window-light-pattern-41-iphone-wallpaper.jpg')] h-full w-full rounded-3xl -z-10 bg-cover bg-no-repeat" />
      <StatusBar />
      <Greeting />
      <Dock />
    </>
  );
};
export default HomeScreen;
