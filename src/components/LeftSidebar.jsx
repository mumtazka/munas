import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const LeftSidebar = ({ data }) => {
  const { personal, social } = data;

  const socialLinks = [
    { icon: Github, url: social.github, label: 'GitHub' },
    { icon: Linkedin, url: social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, url: social.instagram, label: 'Instagram' },
    { icon: Mail, url: `mailto:${social.email}`, label: 'Email' }
  ];

  return (
    <div className="h-full bg-white/95 backdrop-blur-sm border-r border-gray-100 flex flex-col">
      {/* Profile Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="text-center mb-8">
          <img
            src={personal.profileImage}
            alt={personal.name}
            className="w-32 h-32 rounded-full object-cover shadow-lg mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {personal.name}
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            {personal.title}
          </p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            {personal.tagline}
          </p>
        </div>
      </div>

      {/* Social Links - Vertical */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        {socialLinks.map(({ icon: Icon, url, label }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label={label}
          >
            <Icon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;