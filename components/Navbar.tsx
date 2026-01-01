import React, { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { content, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { name: content.nav.home, href: '#home' },
    { name: content.nav.about, href: '#about' },
    { name: content.nav.experience, href: '#experience' },
    { name: content.nav.projects, href: '#projects' },
    { name: content.nav.skills, href: '#skills' },
    { name: content.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-darker/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-white tracking-tight">
          Dev<span className="text-primary">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm text-slate-300 hover:text-primary transition-colors border border-slate-700 rounded-full px-3 py-1"
          >
            <Languages className="w-4 h-4" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-slate-300 hover:text-white"
          >
             <span className="font-bold">{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
          
          <button 
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full start-0 w-full bg-darker border-b border-slate-800 py-4 px-6 flex flex-col gap-4 shadow-xl text-start">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-300 hover:text-primary py-2 block"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;