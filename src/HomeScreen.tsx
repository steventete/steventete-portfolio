import StatusBar from "./components/StatusBar";
import Greeting from "./components/Greeting";
import Dock from "./components/Dock";

const HomeScreen = () => {
  return (
    <>
      <div className="appears bg-[url('https://w.wallhaven.cc/full/6k/wallhaven-6k3zql.jpg')] h-full w-full rounded-3xl -z-10 bg-cover bg-no-repeat" />
      <StatusBar />
      <Greeting />
      <Dock />
    </>
  );
};
export default HomeScreen;
