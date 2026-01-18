import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { Code, Server, Cloud, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { fadeInUp, scaleIn, staggerContainer } from '../lib/animation-variants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { content } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { ref, controls } = useScrollAnimation();

  const categories = [
    { name: 'All', icon: Code },
    { name: 'Frontend', icon: Code },
    { name: 'Backend', icon: Server },
    { name: 'Tools', icon: Wrench },
    { name: 'Design', icon: Wrench }
  ];

  const filteredSkills = selectedCategory === 'All'
    ? content.skills.list
    : content.skills.list.filter(skill =>
      skill.category === selectedCategory ||
      skill.category === (selectedCategory === 'Frontend' ? 'واجهة أمامية' : selectedCategory === 'Backend' ? 'خلفية' : 'أدوات')
    );

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'hsl(172, 100%, 41%)'; // Accent
    if (level >= 75) return 'hsl(214, 100%, 50%)'; // Primary
    if (level >= 60) return 'hsl(262, 83%, 58%)'; // Secondary
    return 'hsl(215, 20%, 65%)'; // Tertiary
  };

  return (
    <Section id="skills" title={content.skills.title} subtitle={content.skills.chartTitle} className="bg-dark">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        {/* Category Filter */}
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === cat.name
                  ? 'bg-gradient-primary text-white shadow-lg scale-105'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
              >
                <Icon className="w-3 h-3 md:w-4 md:h-4" />
                {cat.name}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Bar Chart */}
        <motion.div variants={fadeInUp} className="mb-8 md:mb-12 px-2">
          <ResponsiveContainer width="100%" height={300} className="md:hidden">
            <BarChart data={filteredSkills} layout="vertical">
              <XAxis type="number" domain={[0, 100]} stroke="rgba(148, 163, 184, 0.3)" />
              <YAxis
                dataKey="name"
                type="category"
                stroke="rgba(148, 163, 184, 0.3)"
                width={100}
                style={{ fontSize: '0.75rem' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(30, 41, 59, 0.9)',
                  border: '1px solid rgba(71, 85, 105, 0.5)',
                  borderRadius: '0.5rem',
                  color: 'white'
                }}
              />
              <Bar dataKey="level" radius={[0, 8, 8, 0]}>
                {filteredSkills.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getSkillColor(entry.level)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={400} className="hidden md:block">
            <BarChart data={filteredSkills} layout="vertical">
              <XAxis type="number" domain={[0, 100]} stroke="rgba(148, 163, 184, 0.3)" />
              <YAxis
                dataKey="name"
                type="category"
                stroke="rgba(148, 163, 184, 0.3)"
                width={150}
                style={{ fontSize: '0.875rem' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(30, 41, 59, 0.9)',
                  border: '1px solid rgba(71, 85, 105, 0.5)',
                  borderRadius: '0.5rem',
                  color: 'white'
                }}
              />
              <Bar dataKey="level" radius={[0, 8, 8, 0]}>
                {filteredSkills.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getSkillColor(entry.level)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-slate-800 p-4 md:p-6 rounded-xl border border-slate-700 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Progress Circle */}
              <div className="relative mb-3 md:mb-4">
                <motion.svg
                  className="w-20 h-20 md:w-24 md:h-24 mx-auto transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(71, 85, 105, 0.3)"
                    strokeWidth="8"
                  />
                  {/* Progress Circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={getSkillColor(skill.level)}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                    whileInView={{
                      strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.level / 100)
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </motion.svg>
                {/* Percentage */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-xl md:text-2xl font-bold gradient-text"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-center text-sm md:text-base font-semibold text-white group-hover:text-primary transition-colors">
                {skill.name}
              </h3>

              {/* Category Badge */}
              <p className="text-center text-xs text-slate-400 mt-2">
                {skill.category}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Cloud & AWS Highlight */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 md:mt-16 glass-morphism p-6 md:p-8 rounded-2xl border border-slate-700"
        >
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <Cloud className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h3 className="text-xl md:text-2xl font-bold gradient-text">Cloud & AWS Expertise</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: 'AWS Solutions Architecture', level: 95 },
              { name: 'Cloud Computing', level: 90 },
              { name: 'DevOps & CI/CD', level: 85 }
            ].map((cloudSkill) => (
              <div key={cloudSkill.name} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{cloudSkill.level}%</div>
                <div className="text-xs md:text-sm text-slate-400">{cloudSkill.name}</div>
                <div className="mt-3 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cloudSkill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Skills;