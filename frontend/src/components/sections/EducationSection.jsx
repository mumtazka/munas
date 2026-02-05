import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection = ({ data }) => {
  const { education } = data;

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Education
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Academic foundation that shaped my technical and creative perspective
        </p>
        <div className="w-24 h-1 bg-gray-900 mx-auto mt-6"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < education.length - 1 && (
                <div className="absolute left-6 top-16 w-px h-20 bg-gray-300"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {edu.degree}
                    </h3>
                    
                    <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{edu.year}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">
                    {edu.school}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-600">
          Continuous learning through online courses, workshops, and industry conferences.
        </p>
      </div>
    </div>
  );
};

export default EducationSection;