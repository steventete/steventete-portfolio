import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const BackButton = () => {
  return (
    <Link
      to={"/"}
      className="flex px-4 py-2 justify-center items-center w-full gap-1 font-normal border bg-transparent border-black rounded-lg p-1 transition text-black mx-auto my-4 hover:scale-95 hover:bg-black/5"
    >
      <Home size={20} strokeWidth={1.8} /> Back to home
    </Link>
  );
};

export default BackButton;
