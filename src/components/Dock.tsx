import {
  User,
  CodeXml,
  BriefcaseBusiness,
  LayoutDashboard,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const icons = [
  {
    name: "Code",
    icon: CodeXml,
    route: "/works",
  },
  {
    name: "Briefcase",
    icon: BriefcaseBusiness,
    route: "/experience",
  },
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    route: "/skills",
  },
  {
    name: "Mail",
    icon: Mail,
    route: "/contact",
  },
  {
    name: "User",
    icon: User,
    route: "/",
  },
];

const Dock = () => {
  return (
    <div className="bg-black/30 flex justify-center items-center text-white py-3 rounded-2xl absolute bottom-4 w-[95%] left-1/2 -translate-x-1/2">
      <div className="flex items-center space-x-4">
        {icons.map((icon, index) => (
          <Link
            key={index}
            to={icon.route}
            className="size-9 p-1.5 rounded-xl border border-white/50 flex justify-center items-center cursor-pointer hover:bg-white/20 hover:p-2"
          >
            <icon.icon size={24} strokeWidth={1.3} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dock;
