import React from "react";
import { FaTrophy, FaGithub, FaMedal } from "react-icons/fa";

const certifications = [
  {
    title: "First Prize in Paper Presentation",
    description:
      'Won first prize for presenting a paper on "AI IS A BANE OR BOON" at a state-level technical symposium.',
    icon: <FaTrophy className="text-yellow-400 text-3xl" />,
    skills: ["Public Speaking", "Research", "Presentation"],
  },
  {
    title: "Certified in Git & GitHub",
    description:
      "Completed professional certification in version control using Git and GitHub from a recognized platform.",
    icon: <FaGithub className="text-pink-400 text-3xl" />,
    skills: ["Git", "GitHub", "Version Control"],
  },
  {
    title: "Flipkart Runway 2025 Participant",
    description:
      "Selected to participate in Flipkart Runway, a prestigious program for young tech talent in India.",
    icon: <FaMedal className="text-purple-400 text-3xl" />,
    skills: ["Leadership", "Innovation", "Tech Talent"],
  },
];

const Certifications = () => {
  return (
    <section id="Certifications" className="py-16 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications & Achievements</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className=" rounded-2xl p-6  relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] shadow-lg hover:scale-[1.03] transition-transform"
            >
              <div className="flex items-center gap-4 mb-4">
                {cert.icon}
                <h3 className="text-xl font-semibold">{cert.title}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">{cert.description}</p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-[#s12122c] text-white text-xs px-3 py-1 rounded-full border border-[#2A0E61]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
