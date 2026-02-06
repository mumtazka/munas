import React from 'react';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import EducationSection from './sections/EducationSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';

const RightContent = ({ data }) => {
  const sections = [
    { id: 'about', component: AboutSection },
    { id: 'skills', component: SkillsSection },
    { id: 'projects', component: ProjectsSection },
    { id: 'education', component: EducationSection },
    { id: 'certifications', component: CertificationsSection },
    { id: 'contact', component: ContactSection },
  ];

  return (
    <div className="bg-white">
      {sections.map(({ id, component: Component }) => (
        <section key={id} id={id} className="min-h-screen flex items-center">
          <div className="w-full max-w-4xl mx-auto px-12 py-20">
            <Component data={data} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default RightContent;