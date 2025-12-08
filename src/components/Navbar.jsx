import React, { useState } from 'react';
import Button from './Button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center">
      <nav className="w-full container mx-auto bg-gradient-to-r from-[#15231d] to-[#1A2C24] rounded-full px-6 py-3 flex justify-between items-center shadow-2xl shadow-black/20 border border-white/5 backdrop-blur-md relative">

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#FFC107] rounded-full flex items-center justify-center text-[#1A2C24] font-black text-xl">
            R
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">Robson.</span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="text-white font-bold hover:text-[#FFC107] transition-colors">Home</a>
          <a href="#skills" className="hover:text-[#FFC107] transition-colors">Habilidades</a>
          <a href="#projects-real" className="hover:text-[#FFC107] transition-colors">Projetos</a>
          <a href="#about" className="hover:text-[#FFC107] transition-colors">Sobre</a>
          <a href="#contact" className="hover:text-[#FFC107] transition-colors">Contato</a>
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
            Vamos Conversar
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
          <div className="absolute top-full left-0 right-0 mt-4 bg-[#1A2C24] rounded-2xl p-6 flex flex-col gap-4 shadow-2xl border border-white/10 md:hidden animate-fade-in-down">
            <a href="#" onClick={toggleMenu} className="text-white font-bold hover:text-[#FFC107] transition-colors text-center py-2">Home</a>
            <a href="#skills" onClick={toggleMenu} className="text-gray-300 hover:text-[#FFC107] transition-colors text-center py-2">Habilidades</a>
            <a href="#projects-real" onClick={toggleMenu} className="text-gray-300 hover:text-[#FFC107] transition-colors text-center py-2">Projetos</a>
            <a href="#about" onClick={toggleMenu} className="text-gray-300 hover:text-[#FFC107] transition-colors text-center py-2">Sobre</a>
            <a href="#contact" onClick={toggleMenu} className="text-gray-300 hover:text-[#FFC107] transition-colors text-center py-2">Contato</a>
            <Button variant="accent" href="#contact" className="w-full" onClick={toggleMenu}>
              Vamos Conversar
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
