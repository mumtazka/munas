import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../ui/button';

const ProjectsSection = ({ data }) => {
  const { projects } = data;
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, isFeatured = false }) => (
    <div className={`group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${
      isFeatured ? 'md:col-span-2' : ''
    }`}>
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-8">
        <h3 className={`font-bold text-gray-900 mb-3 ${
          isFeatured ? 'text-2xl' : 'text-xl'
        }`}>
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center space-x-2 border-gray-300 hover:border-gray-500"
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="flex items-center space-x-2 border-gray-300 hover:border-gray-500"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A selection of projects that showcase my skills and passion for creating meaningful digital experiences.
        </p>
        <div className="w-24 h-1 bg-gray-900 mx-auto mt-6"></div>
      </div>

      {/* Featured Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} isFeatured />
        ))}
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Other Projects
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}

      <div className="text-center mt-16">
        <p className="text-gray-600 mb-6">
          Want to see more of my work?
        </p>
        <Button
          variant="outline"
          className="border-gray-300 hover:border-gray-500"
          onClick={() => window.open('https://github.com/alexmorgan', '_blank')}
        >
          View All Projects on GitHub
        </Button>
      </div>
    </div>
  );
};

export default ProjectsSection;