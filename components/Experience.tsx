import React from 'react';
import Section from './ui/Section';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { content } = useLanguage();

  return (
    <Section id="experience" title={content.experience.title} subtitle="true" className="bg-dark">
      <div className="relative border-s-2 border-slate-700 ms-4 md:ms-8 space-y-12 my-12">
        {content.experience.list.map((job) => (
          <div key={job.id} className="relative ps-8 md:ps-12 group">
            {/* Timeline Dot - using inline styles for strict RTL control/overriding tailwind's left/right if needed, but logical properties usually safer */}
            <div className="absolute top-0 w-4 h-4 rounded-full bg-slate-700 border-2 border-dark group-hover:bg-primary transition-colors ltr:-left-[9px] rtl:-right-[9px]"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{job.role}</h3>
              <span className="text-sm text-primary font-mono bg-primary/10 px-2 py-1 rounded mt-1 sm:mt-0 w-fit" dir="ltr">
                {job.period}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-slate-400 mb-4">
              <Briefcase className="w-4 h-4" />
              <span className="font-medium">{job.company}</span>
            </div>
            
            <p className="text-slate-300 mb-4 leading-relaxed">
              {job.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {job.technologies.map(tech => (
                <span key={tech} className="text-xs px-2 py-1 rounded-full border border-slate-600 text-slate-400 hover:text-white hover:border-slate-400 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;