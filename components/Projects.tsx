import React from 'react';
import Section from './ui/Section';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { content } = useLanguage();

  return (
    <Section id="projects" title={content.projects.title} subtitle="true" className="bg-darker">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.projects.list.map((project) => (
          <div key={project.id} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4 h-20 overflow-y-auto">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="text-xs bg-slate-700/50 text-blue-300 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-slate-500 px-1 py-1">+{project.technologies.length - 3}</span>
                )}
              </div>
              
              <div className="flex gap-4 pt-4 border-t border-slate-700">
                {project.github && (
                  <a href={project.github} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                    <Github className="w-4 h-4" /> {content.projects.code}
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="flex items-center gap-2 text-sm text-primary hover:text-blue-400 transition-colors ms-auto">
                    {content.projects.demo} <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;