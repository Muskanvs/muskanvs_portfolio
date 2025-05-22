import React from "react";

type Experience = {
  title: string;
  company: string;
  description: string;
  period: string;
};

type ExperienceSectionProps = {
  experiences: Experience[];
};

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
  <section id="ExperienceSection" className="py-16 bg-transparent">

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#FFFFFF] mb-12">
          Experience
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-2 rounded"></div>
        </h2>

        <div className="relative border-l-2 border-blue-300 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              {/* Dot */}
              <div className="absolute w-4 h-4  border-4 border-blue-400 rounded-full left-[-10px] top-1"></div>

              <div className="bg-transparent shadow-md p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#ffffff]">{exp.title}</h3>
                <p className="font-semibold text-blue-400">{exp.company}</p>
                <p className="mt-2 text-gray-600">{exp.description}</p>
                <p className="mt-2 text-sm text-gray-400">{exp.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
