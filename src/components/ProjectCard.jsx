import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Skeleton from './Skeleton';

const ProjectCard = ({ title, description, tags, image, video, repoLink, demoLink, className = "", imageHeight = "h-64", objectFit = "object-cover", showPhoneFrame = false }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleMediaLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className={`group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col ${className}`} data-aos="fade-up">
            {/* Image/Video Container */}
            <div className={`${imageHeight} overflow-hidden relative w-full shrink-0 bg-gray-50 dark:bg-gray-900`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 z-10 pointer-events-none"></div>

                {isLoading && (
                    <div className="absolute inset-0 z-20 p-4">
                        <Skeleton className="w-full h-full rounded-2xl" />
                    </div>
                )}

                {video && showPhoneFrame ? (
                    <div className={`w-full h-full flex items-center justify-center p-4 scale-90 md:scale-100 transition-transform duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-full aspect-[9/19] shadow-xl">
                            <div className="w-[148px] h-[18px] bg-gray-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
                            <div className="h-[32px] w-[3px] bg-gray-900 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-900 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-900 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-900 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                                <video
                                    src={video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    onLoadedData={handleMediaLoad}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                ) : video ? (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        onLoadedData={handleMediaLoad}
                        className={`w-full h-full ${objectFit} transform group-hover:scale-105 transition-transform duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    />
                ) : (
                    <img
                        src={image}
                        alt={title}
                        onLoad={handleMediaLoad}
                        className={`w-full h-full ${objectFit} transform group-hover:scale-110 transition-transform duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    />
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-[#1A2C24] dark:text-white mb-2 group-hover:text-[#FFC107] transition-colors">
                    {title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold rounded-full uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                    <a
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-[#1A2C24] dark:text-white hover:text-[#FFC107] dark:hover:text-[#FFC107] transition-colors"
                    >
                        <Github size={18} />
                        Código
                    </a>
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-[#1A2C24] dark:text-white hover:text-[#FFC107] dark:hover:text-[#FFC107] transition-colors"
                    >
                        <ExternalLink size={18} />
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
