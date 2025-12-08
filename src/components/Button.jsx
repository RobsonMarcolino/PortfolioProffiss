import React from 'react';
import { ArrowRight, Download, Play, Mail, Layout, Smartphone, Monitor, Globe, Figma, PenTool, Code, Star, Terminal, Zap } from 'lucide-react';

const Button = ({ children, variant = 'primary', icon: Icon, className = '', href, ...props }) => {
  const baseStyle = "px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 text-sm inline-flex justify-center";

  const variants = {
    primary: "bg-[#1A2C24] text-white hover:bg-[#2a4539] hover:shadow-lg hover:-translate-y-1",
    secondary: "bg-white text-[#1A2C24] border border-[#1A2C24]/10 hover:border-[#1A2C24] hover:bg-gray-50",
    accent: "bg-[#FFC107] text-[#1A2C24] hover:bg-[#ffcd38] hover:shadow-lg hover:-translate-y-1",
    outline: "border-2 border-white/20 text-white hover:bg-white/10"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      className={`${baseStyle} ${variants[variant]} ${className}`}
      href={href}
      {...props}
    >
      {children}
      {Icon && <Icon size={16} />}
    </Component>
  );
};

export default Button;