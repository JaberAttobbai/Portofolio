import React from 'react';
import Section from './ui/Section';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { content, dir } = useLanguage();
  
  // Group skills for display list
  const categories = Array.from(new Set(content.skills.list.map(s => s.category)));

  // Custom Tooltip for Recharts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-700 p-3 rounded shadow-lg text-start">
          <p className="text-white font-medium">{label}</p>
          <p className="text-primary text-sm">Proficiency: {payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Section id="skills" title={content.skills.title} subtitle="true" className="bg-dark">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Recharts Visualization */}
        <div className="h-[400px] w-full bg-slate-800/30 p-6 rounded-xl border border-slate-700/50" dir="ltr">
           <h3 className="text-xl font-semibold text-white mb-6 text-center">{content.skills.chartTitle}</h3>
           <ResponsiveContainer width="100%" height="100%">
             <BarChart data={content.skills.list} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
               <XAxis type="number" domain={[0, 100]} hide />
               <YAxis 
                dataKey="name" 
                type="category" 
                width={100} 
                tick={{ fill: '#94a3b8', fontSize: 12 }} 
                axisLine={false}
                tickLine={false}
               />
               <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
               <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                 {content.skills.list.map((entry, index) => (
                   <Cell key={`cell-${index}`} fill={entry.level > 90 ? '#3b82f6' : entry.level > 80 ? '#6366f1' : '#64748b'} />
                 ))}
               </Bar>
             </BarChart>
           </ResponsiveContainer>
        </div>

        {/* Tag Cloud / Detail View */}
        <div className="space-y-8">
          {categories.map(category => (
            <div key={category}>
              <h4 className="text-lg font-medium text-white mb-4 border-b border-slate-800 pb-2">{category}</h4>
              <div className="flex flex-wrap gap-3">
                {content.skills.list.filter(s => s.category === category).map(skill => (
                  <div key={skill.name} className="group relative">
                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded hover:bg-slate-700 hover:text-white transition-colors cursor-default text-sm border border-slate-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;