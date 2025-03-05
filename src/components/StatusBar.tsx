import { Radio } from "lucide-react";
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
    <header className="flex justify-between items-center px-4 pt-2.5 pb-1 z-50 rounded-t-3xl absolute top-0 w-full max-w-72 pointer-events-none bg-transparent border border-transparent">
      <div className="flex items-center  mix-blend-difference">
        <Radio size={26} strokeWidth={1.3} />
      </div>
      <span className="size-3.5 rounded-full border-gray-800 border bg-gradient-to-b from-black to-gray-800" />
      <span className="font-light mix-blend-difference">{time}</span>
    </header>
  );
};

export default StatusBar;
