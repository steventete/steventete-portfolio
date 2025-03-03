import { Outlet } from "react-router-dom";
import StatusBar from "./StatusBar";
import ScreenIndicator from "./ScreenIndicator";

const Phone = () => {
  return (
    <>
    <div className="w-full h-dvh  bg-gradient-to-tr from-blue-500 via-blue-300 to-blue-800 flex items-center justify-center">
      <figure className="absolute bg-repeat h-dvh w-dvw bg-[url('https://transparenttextures.com/patterns/3px-tile.png')] opacity-30"/>
      <div className="h-[90dvh] bg-neutral-100 min-w-72 w-72 rounded-3xl z-10 relative overflow-auto">
        <StatusBar />
        <Outlet />
        <ScreenIndicator />
      </div>
    </div>
    <div className="h-[90dvh] bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900 bg-neutral-600 min-w-72 w-72 rounded-3xl z-0 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 shadow-xl shadow-black overflow-auto scale-x-[1.075] scale-y-[1.04]"></div>
    </>
  );
};

export default Phone;
