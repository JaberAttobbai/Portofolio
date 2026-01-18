import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { Github, Linkedin, Mail, Download, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from '../lib/animation-variants';

const Hero: React.FC = () => {
  const { content } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const techStack = ['Cloud Architecture', 'AWS Solutions', 'Full-Stack Development', 'MERN Stack', 'DevOps'];
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const currentTech = techStack[currentTechIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentTech.length) {
        setTypedText(currentTech.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentTechIndex]);

  return (
    <Section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            variants={scaleIn}
            className="mb-6 md:mb-8 flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-2xl relative">
                <img
                  src="/profile.jpg"
                  alt="Jaber Farhan"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={fadeInUp} className="mb-3 md:mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-slate-800/50 rounded-full text-xs md:text-sm text-slate-300 border border-slate-700">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
              {content.hero.availability}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 px-4"
          >
            <span className="gradient-text">{content.hero.name}</span>
          </motion.h1>

          {/* Title & Typed Effect */}
          <motion.div variants={fadeInUp} className="mb-6 md:mb-8 px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-200 mb-3 md:mb-4">
              {content.hero.title}
            </h2>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary min-h-[2rem] md:min-h-[2.5rem] flex items-center justify-center">
              <span className="font-mono">{typedText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-0.5 h-5 md:h-6 bg-primary ml-1"
              />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
          >
            {content.hero.tagline}
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12 max-w-4xl mx-auto px-4"
          >
            {content.about.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="glass-morphism p-4 md:p-6 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 md:px-8 md:py-4 gradient-primary rounded-full text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              Hire Me
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 md:px-8 md:py-4 bg-slate-800 rounded-full text-white font-semibold border border-slate-700 hover:border-primary transition-all duration-300 text-center text-sm md:text-base"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/cv/Jaber-Farhan-CV.pdf"
              download="Jaber-Farhan-CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 md:px-8 md:py-4 bg-slate-800/50 rounded-full text-slate-300 font-semibold border border-slate-700 hover:border-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              {content.about.resumeBtn}
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-4"
          >
            <motion.a
              href="https://github.com/JaberAttobbai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/jaber-attobbai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:jabermahyoub@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex items-center justify-center gap-2 text-slate-400"
          >
            <MapPin className="w-4 h-4" />
            <span>{content.hero.location}</span>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Hero;