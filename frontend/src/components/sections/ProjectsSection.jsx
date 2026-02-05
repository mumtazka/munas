import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, isFeatured = false }) => (
  <div className="space-y-6 border-b border-gray-100 pb-12 last:border-b-0">
    <div className="flex justify-between items-start">
      <h3 className={`font-medium text-gray-900 ${
        isFeatured ? 'text-2xl' : 'text-xl'
      }`}>
        {project.title}
      </h3>
      
      <div className="flex space-x-4 text-sm">
        <button
          onClick={() => window.open(project.liveUrl, '_blank')}
          className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Live</span>
        </button>
        
        <button
          onClick={() => window.open(project.githubUrl, '_blank')}
          className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>Code</span>
        </button>
      </div>
    </div>
    
    <p className="text-gray-700 leading-relaxed font-light max-w-3xl">
      {project.description}
    </p>
    
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded font-light"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const ProjectsSection = ({ data }) => {
  const { projects } = data;
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h2 className="text-4xl font-light text-gray-900">
          Selected Work
        </h2>
        <p className="text-lg text-gray-600 font-light">
          A selection of projects that showcase my skills and passion for creating meaningful digital experiences.
        </p>
      </div>

      <div className="space-y-12">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} isFeatured />
        ))}
      </div>

      {otherProjects.length > 0 && (
        <>
          <div className="space-y-4">
            <h3 className="text-2xl font-light text-gray-900">
              Other Projects
            </h3>
          </div>
          
          <div className="space-y-12">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}

      <div className="pt-8">
        <p className="text-gray-500 text-sm font-light">
          Want to see more of my work? Visit my{' '}
          <button
            onClick={() => window.open('https://github.com/alexmorgan', '_blank')}
            className="text-gray-900 hover:underline"
          >
            GitHub profile
          </button>
          .
        </p>
      </div>
    </div>
  );
};

export default ProjectsSection;