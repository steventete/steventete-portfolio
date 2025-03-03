
interface SkillCategoryProps {
    title: string;
    icon: React.ReactNode;
    skills: { skill: string; icon: string; color: string }[];
    bgColor: string;
  }
  
  const SkillCategory = ({
    title,
    icon,
    skills,
    bgColor,
  }: SkillCategoryProps) => {
    return (
      <div className="mb-8 appears">
        <div className="flex items-center mb-4">
          <div className={`p-2 rounded-lg mr-3 ${bgColor}`}>{icon}</div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
  
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg">
          <div className="grid grid-cols-4 gap-6">
            {skills.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <i
                  className={`${item.icon} ${item.color} text-3xl fadeAndScale cursor-pointer`}
                ></i>
                <p className="text-center mt-2 text-xs font-medium">
                  {item.skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default SkillCategory;