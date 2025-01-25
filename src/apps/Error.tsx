import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center h-full bg-black -z-10 rounded-3xl">
<img className="object-contain" src="./src/assets/img/404.jpg" alt="404 image" />
<Link to="/" className="absolute bottom-5 text-white flex justify-center items-center gap-1"><ChevronLeft size={16} /><span className="text-lg">Back to Home</span></Link>
    </div>
);
};

export default Error;
