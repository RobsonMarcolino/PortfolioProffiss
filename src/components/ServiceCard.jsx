import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group relative p-[1px] rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC107]/20">
    {/* Gradient Border Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 opacity-100 group-hover:from-[#FFC107] group-hover:via-[#FFC107]/50 group-hover:to-transparent transition-all duration-500"></div>

    {/* Card Content */}
    <div className="relative h-full bg-[#FAFAFA] dark:bg-gray-900/90 backdrop-blur-xl p-8 rounded-[23px] transition-all duration-300 group-hover:bg-opacity-90">

      {/* Icon Container */}
      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-gray-200/50 dark:shadow-black/50 group-hover:scale-110 group-hover:bg-[#FFC107] transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-[#FFC107]">
        <Icon size={32} className="text-[#1A2C24] dark:text-white group-hover:text-[#1A2C24] transition-colors duration-300" />
      </div>

      <h3 className="text-2xl font-bold text-[#1A2C24] dark:text-white mb-4 font-heading group-hover:text-[#FFC107] transition-colors">
        {title}
      </h3>

      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 font-sans border-l-2 border-transparent group-hover:border-[#FFC107]/50 pl-0 group-hover:pl-4 transition-all duration-300">
        {description}
      </p>

      <a href="#projects-real" className="inline-flex items-center gap-2 text-sm font-bold text-[#1A2C24] dark:text-white group-hover:translate-x-2 transition-transform duration-300 font-sans">
        <span className="border-b-2 border-[#FFC107]/30 group-hover:border-[#FFC107]">View Projects</span>
        <ArrowRight size={16} className="text-[#FFC107]" />
      </a>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FFC107]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-[23px]"></div>
    </div>
  </div>
);

export default ServiceCard;