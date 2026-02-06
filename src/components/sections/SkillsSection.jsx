import React from 'react';

const SkillsSection = ({ data }) => {
  const { skills } = data;
  
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h2 className="text-4xl font-light text-gray-900">
          Skills & Expertise
        </h2>
        <p className="text-lg text-gray-600 font-light">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((category) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          
          return (
            <div key={category} className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900">
                {category}
              </h3>
              
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-800 font-light">{skill.name}</span>
                    <span className="text-sm text-gray-500 font-light">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-gray-500 text-sm font-light italic">
        Always learning and exploring new technologies to stay current with industry trends.
      </p>
    </div>
  );
};

export default SkillsSection;