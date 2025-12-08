import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-100/50 dark:shadow-black/30 hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-black/50 transition-all duration-300 group cursor-pointer hover:-translate-y-2">
    <div className="w-14 h-14 bg-[#F5F5F5] dark:bg-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFC107] transition-colors duration-300">
      <Icon size={28} className="text-[#1A2C24] dark:text-white group-hover:text-[#1A2C24]" />
    </div>
    <h3 className="text-xl font-bold text-[#1A2C24] dark:text-white mb-3">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">{description}</p>
    <a href="#" className="text-[#1A2C24] dark:text-white font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
      Ver Projetos <ArrowRight size={16} />
    </a>
  </div>
);

export default ServiceCard;