import React from 'react';

const AboutSection = ({ data }) => {
  const { personal } = data;

  return (
    <div className="space-y-16">
      <div className="space-y-12">
        <h1 className="text-6xl font-light text-gray-900 leading-tight">
          {personal.name}
        </h1>
        
        <div className="space-y-6">
          <h2 className="text-2xl text-gray-600 font-light">
            {personal.title}
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl font-light">
            {personal.bio}
          </p>
          
          <p className="text-base text-gray-500 italic max-w-2xl font-light">
            &ldquo;{personal.tagline}&rdquo;
          </p>
        </div>

        <div className="flex space-x-16 text-sm text-gray-600">
          <div>
            <span className="block font-medium text-gray-900">Location</span>
            <span className="font-light">{personal.location}</span>
          </div>
          
          <div>
            <span className="block font-medium text-gray-900">Experience</span>
            <span className="font-light">5+ Years</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;