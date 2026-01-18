import React from 'react';
import Section from './ui/Section';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { content } = useLanguage();

  return (
    <Section id="contact" className="bg-darker py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">{content.contact.title}</h2>
        <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10">
          {content.contact.text}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 text-slate-300">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <a href="mailto:jabermahyoub@gmail.com?subject=Contact from Portfolio&body=Hello, I would like to get in touch." className="hover:text-white transition-colors text-xs sm:text-sm md:text-base break-all">jabermahyoub@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-slate-300">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <a href="tel:+967778102165" className="hover:text-white transition-colors text-xs sm:text-sm md:text-base">+967 778102165</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-slate-300">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base">{content.hero.location}</span>
          </div>
        </div>

        <a
          href="mailto:jabermahyoub@gmail.com?subject=Contact from Portfolio&body=Hello, I would like to get in touch."
          className="inline-block px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-primary text-primary font-bold rounded hover:bg-primary hover:text-white transition-all duration-300 text-sm md:text-base"
        >
          {content.contact.action}
        </a>

        <footer className="mt-16 md:mt-20 pt-6 md:pt-8 border-t border-slate-800 text-slate-500 text-xs md:text-sm text-center">
          <p>© {new Date().getFullYear()} {content.hero.name}. All rights reserved.</p>
        </footer>
      </div>
    </Section>
  );
};

export default Contact;