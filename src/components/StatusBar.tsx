import { SignalHigh } from "lucide-react";
import { useState, useEffect } from "react";

const StatusBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hour = date.getHours().toString().padStart(2, "0");
      const minute = date.getMinutes().toString().padStart(2, "0");
      setTime(`${hour}:${minute}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex justify-between items-center text-white px-4 py-2 z-20 rounded-t-3xl fixed top-8 w-full max-w-72 mix-blend-screen pointer-events-none bg-transparent">
      <div className="flex items-center space-x-1">
        <SignalHigh size={24} />
      </div>
      <span className="size-3.5 rounded-full border-gray-800 border bg-gradient-to-b from-black to-gray-800"/>
      <span className="font-light">{time}</span>
    </header>
  );
};

export default StatusBar;
