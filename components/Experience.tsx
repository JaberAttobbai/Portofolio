import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { fadeInUp, fadeInLeft, staggerContainer } from '../lib/animation-variants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const { content } = useLanguage();
  const { ref, controls } = useScrollAnimation();

  return (
    <Section id="experience" title={content.experience.title} className="bg-dark">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="relative"
      >
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent opacity-30" />

        {/* Experience Items */}
        <div className="space-y-12">
          {content.experience.list.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary border-4 border-slate-900 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring' }}
              />

              {/* Content Card */}
              <motion.div
                className={`flex-1 md:w-5/12 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''
                  }`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="group bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                  style={{ boxShadow: 'var(--shadow-lg)' }}
                >
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`text-slate-300 text-sm leading-relaxed mb-4 ${index % 2 === 0 ? 'md:text-right' : ''
                      }`}>
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-slate-700/50 text-blue-300 rounded-full border border-slate-600/50 hover:border-primary/50 transition-colors"
                          style={{ borderRadius: 'var(--radius-full)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1 md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Experience;