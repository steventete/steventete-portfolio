import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const Accordion = ({ title, children, icon }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-4">
      <div className="flex items-center space-x-1 mb-4 hover:bg-white/5 rounded-lg transition duration-300 cursor-pointer" onClick={toggleAccordion}>
        {icon}
        <h2
          className="text-xl font-medium text-center"
          
        >
          {title}
        </h2>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        {isOpen && (
          <div className="skills-list flex flex-wrap gap-5 w-full">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
