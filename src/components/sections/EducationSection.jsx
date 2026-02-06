import React from 'react';
import { Calendar } from 'lucide-react';

const EducationSection = ({ data }) => {
  const { education } = data;

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h2 className="text-4xl font-light text-gray-900">
          Education
        </h2>
        <p className="text-lg text-gray-600 font-light">
          Academic foundation that shaped my technical and creative perspective
        </p>
      </div>

      <div className="space-y-12">
        {education.map((edu, index) => (
          <div key={index} className="space-y-4 border-b border-gray-100 pb-12 last:border-b-0">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="text-2xl font-medium text-gray-900">
                  {edu.degree}
                </h3>
                <h4 className="text-lg text-gray-600 font-light">
                  {edu.school}
                </h4>
              </div>
              
              <div className="flex items-center text-gray-500 text-sm font-light">
                <Calendar className="w-4 h-4 mr-2" />
                {edu.year}
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed font-light max-w-3xl">
              {edu.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-gray-500 text-sm font-light italic">
        Continuous learning through online courses, workshops, and industry conferences.
      </p>
    </div>
  );
};

export default EducationSection;