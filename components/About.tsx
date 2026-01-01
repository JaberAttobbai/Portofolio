import React from 'react';
import Section from './ui/Section';
import { User, Code, Globe, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { content } = useLanguage();

  const getIcon = (idx: number) => {
    switch(idx) {
        case 0: return <User className="w-5 h-5 text-blue-400" />;
        case 1: return <Award className="w-5 h-5 text-yellow-400" />;
        case 2: return <Code className="w-5 h-5 text-purple-400" />;
        case 3: return <Globe className="w-5 h-5 text-green-400" />;
        default: return <User className="w-5 h-5" />;
    }
  };

  return (
    <Section id="about" title={content.about.title} subtitle="true" className="bg-darker">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          {content.about.text.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
          
          <div className="pt-6">
            <button className="px-6 py-2 border border-primary text-primary hover:bg-primary/10 rounded transition-colors">
              {content.about.resumeBtn}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {content.about.stats.map((stat, idx) => (
            <div key={idx} className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-colors">
              <div className="mb-3">{getIcon(idx)}</div>
              <div className="text-3xl font-bold text-white mb-1" dir="ltr">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;