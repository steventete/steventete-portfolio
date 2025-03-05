import { Outlet } from "react-router-dom";
import StatusBar from "./StatusBar";
import ScreenIndicator from "./ScreenIndicator";

const Phone = () => {
  return (
    <>
      <div className="w-full h-dvh  bg-gradient-to-tr from-violet-500 via-cyan-500 to-purple-800 flex items-center justify-center">
              <figure className="absolute bg-repeat h-dvh w-dvw bg-[url('https://transparenttextures.com/patterns/3px-tile.png')] opacity-30" />
        <div className="h-[37.5rem] bg-neutral-100 min-w-72 w-72 rounded-3xl z-10 relative appears">
        <StatusBar />
        <ScreenIndicator />
          <section className="h-full w-full flex flex-col overflow-auto">
          <Outlet />
          </section>
        </div>
      </div>
      <div className="h-[37.5rem] bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900 bg-neutral-600 min-w-72 w-72 rounded-3xl z-0 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 shadow-xl shadow-black overflow-auto scale-x-[1.075] scale-y-[1.04]" />
    </>
  );
};

export default Phone;
