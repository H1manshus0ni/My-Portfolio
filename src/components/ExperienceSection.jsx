
import React from "react";
import { experienceData } from "../data/Experience.js";
import SectionTitle from "./SectionTitle.jsx";

const ExperienceSection = ({ theme }) => {
  const textColor = theme === "dark" ? "text-white" : "text-gray-800";
  const bgColor = theme === "dark" ? "bg-gray-800" : "bg-white";

  return (
    <section className={`py-12 ${bgColor}`} style={{ height: "auto" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="mt-8 flex flex-col gap-4">
          {experienceData.map((experience, index) => (
            <div key={index} className={`flex ${textColor}`}>
              <div className="mr-4 mt-2">
                <span className="inline-block h-4 w-4 bg-white rounded-full"></span>
              </div>
              <div className="flex flex-col">
                <h3 className={`text-lg font-semibold ${textColor}`}>
                  {experience.title}
                </h3>
                <p className={`text-sm ${textColor}`}>
                  {experience.company} - {experience.duration}
                </p>
                <p className={`text-sm ${textColor}`}>
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;


