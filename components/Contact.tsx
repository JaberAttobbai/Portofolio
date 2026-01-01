import React from 'react';
import Section from './ui/Section';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { content } = useLanguage();

  return (
    <Section id="contact" className="bg-darker py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{content.contact.title}</h2>
        <p className="text-slate-400 text-lg mb-10">
          {content.contact.text}
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:jabermahyoub@gmail.com" className="hover:text-white transition-colors">jabermahyoub@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{content.hero.location}</span>
            </div>
        </div>

        <a 
          href="mailto:jabermahyoub@gmail.com"
          className="inline-block px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded hover:bg-primary hover:text-white transition-all duration-300"
        >
          {content.contact.action}
        </a>
        
        <footer className="mt-20 pt-8 border-t border-slate-800 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} {content.hero.name}. {content.contact.footer}</p>
        </footer>
      </div>
    </Section>
  );
};

export default Contact;