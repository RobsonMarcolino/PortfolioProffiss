import React, { useState } from 'react';
import Button from './Button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import useTheme from '../hooks/useTheme';
import useActiveSection from '../hooks/useActiveSection';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Track active section
  const sectionIds = ['home', 'skills', 'projects-real', 'about', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getLinkClass = (sectionName) => {
    const isActive = activeSection === sectionName || (sectionName === 'home' && !activeSection);
    return `text-sm font-medium transition-all duration-300 font-sans ${isActive
      ? 'text-[#FFC107] font-bold scale-105'
      : 'text-gray-300 hover:text-[#FFC107]'
      }`;
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center">
      <nav className="w-full container mx-auto bg-gradient-to-r from-[#15231d]/90 to-[#1A2C24]/90 rounded-full px-6 py-3 flex justify-between items-center shadow-2xl shadow-black/20 border border-white/5 backdrop-blur-md relative glass">

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#FFC107] rounded-full flex items-center justify-center text-[#1A2C24] font-black text-xl font-heading">
            R
          </div>
          <span className="text-2xl font-bold text-white tracking-tight font-heading">Robson.</span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className={getLinkClass('home')}>Home</a>
          <a href="#skills" className={getLinkClass('skills')}>Skills</a>
          <a href="#projects-real" className={getLinkClass('projects-real')}>Projects</a>
          <a href="#about" className={getLinkClass('about')}>About</a>
          <a href="#contact" className={getLinkClass('contact')}>Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Button variant="accent" href="#contact">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-white p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 bg-[#1A2C24]/95 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-4 shadow-2xl border border-white/10 md:hidden animate-fade-in-down">
            <a href="#" onClick={toggleMenu} className="text-white font-bold hover:text-[#FFC107] transition-colors text-center py-2 font-heading">Home</a>
            <a href="#skills" onClick={toggleMenu} className="text-gray-300 hover:text-[#FFC107] transition-colors text-center py-2 font-heading">Skills</a>
            <a href="#projects-real" onClick={toggleMenu} className="text-gray-300 hover:text-[#FFC107] transition-colors text-center py-2 font-heading">Projects</a>
            <a href="#about" onClick={toggleMenu} className="text-gray-300 hover:text-[#FFC107] transition-colors text-center py-2 font-heading">About</a>
            <a href="#contact" onClick={toggleMenu} className="text-gray-300 hover:text-[#FFC107] transition-colors text-center py-2 font-heading">Contact</a>
            <Button variant="accent" href="#contact" className="w-full" onClick={toggleMenu}>
              Let's Talk
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
