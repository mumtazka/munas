import React from 'react';

const AboutSection = ({ data }) => {
  const { personal } = data;

  return (
    <div className="space-y-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          {personal.name}
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          {personal.title}
        </p>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {personal.bio}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                Location
              </h3>
              <p className="text-gray-600 ml-5">{personal.location}</p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                Experience
              </h3>
              <p className="text-gray-600 ml-5">5+ Years</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-600 italic">
            &ldquo;{personal.tagline}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;