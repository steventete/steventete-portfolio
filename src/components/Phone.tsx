import { Outlet } from "react-router-dom";
import StatusBar from "./StatusBar";
import ScreenIndicator from "./ScreenIndicator";

const Phone = () => {
  return (
    <div className="w-full h-dvh bg-white text-white flex items-center justify-center">
      <figure className="absolute bg-repeat h-dvh w-dvw bg-[url('https://transparenttextures.com/patterns/asfalt-light.png')] opacity-30"/>
      <div className="h-[90dvh] bg-neutral-950 min-w-72 w-72 rounded-3xl z-10 relative shadow-xl shadow-black overflow-auto">
        <StatusBar />
        <Outlet />
        <ScreenIndicator />
      </div>
    </div>
  );
};

export default Phone;
