import React from 'react';

const SkillsSection = ({ data }) => {
  const { skills } = data;
  
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Skills & Expertise
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
        <div className="w-24 h-1 bg-gray-900 mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          
          return (
            <div key={category} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category}
              </h3>
              
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-gray-700 to-gray-900 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-600">
          Always learning and exploring new technologies to stay current with industry trends.
        </p>
      </div>
    </div>
  );
};

export default SkillsSection;