import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getFeaturedProjects, FALLBACK_PROJECTS, ProjectData } from '../services/github';
import { fadeInUp, staggerContainer, cardHover } from '../lib/animation-variants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { content } = useLanguage();
  const [projects, setProjects] = useState<ProjectData[]>(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { ref, controls } = useScrollAnimation();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const githubProjects = await getFeaturedProjects();
        if (githubProjects.length > 0) {
          setProjects(githubProjects);
        }
      } catch (error) {
        console.error('Failed to load GitHub projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category || 'General')))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => (p.category || 'General') === selectedCategory);

  return (
    <Section id="projects" title={content.projects.title} subtitle="true" className="bg-darker">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        {/* Filter Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                  ? 'bg-gradient-primary text-white shadow-lg scale-105'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
        >
          {loading ? (
            // Loading skeletons
            [1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-800 rounded-xl h-96 animate-pulse" />
            ))
          ) : (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all duration-300"
                style={{
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    variants={cardHover}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5 text-slate-900" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-primary rounded-full hover:bg-primary-hover transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 h-20 overflow-y-auto leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="text-xs bg-slate-700/50 text-blue-300 px-3 py-1 rounded-full border border-slate-600/50 hover:border-primary/50 transition-colors"
                        style={{
                          fontSize: 'var(--text-xs)',
                          borderRadius: 'var(--radius-full)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-slate-500 px-2 py-1">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-slate-700">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" /> {content.projects.code}
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-blue-400 transition-colors ms-auto"
                      >
                        {content.projects.demo} <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {filteredProjects.length === 0 && !loading && (
          <motion.div
            variants={fadeInUp}
            className="text-center py-12 text-slate-400"
          >
            No projects found in this category.
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
};

export default Projects;