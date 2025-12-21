import React, { useState } from 'react';
import { Terminal, Code, Layout, RefreshCw } from 'lucide-react';
import SkillRadar from './SkillRadar';
import Button from './Button';

const ProfileDisplay = ({ image }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="flex flex-col items-center gap-8 perspective-1000">

            {/* 3D Card Container */}
            <div className={`relative w-[400px] h-[400px] transition-transform duration-1000 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

                {/* FRONT: Photo */}
                <div className="absolute inset-0 backface-hidden">
                    <div className="w-full h-full border border-white/10 rounded-full flex items-center justify-center relative animate-spin-slow">
                        <div className="absolute -top-6 left-1/2 bg-[#2a4539] p-3 rounded-full shadow-lg"><Terminal size={24} className="text-[#FFC107]" /></div>
                        <div className="absolute top-1/2 -right-6 bg-[#2a4539] p-3 rounded-full shadow-lg"><Code size={24} className="text-[#FFC107]" /></div>
                        <div className="absolute -bottom-6 left-1/2 bg-[#2a4539] p-3 rounded-full shadow-lg"><Layout size={24} className="text-[#FFC107]" /></div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#FFC107] rounded-full overflow-hidden border-8 border-[#1A2C24] shadow-2xl">
                        <img
                            src={image}
                            alt="Robson Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* BACK: Radar Chart */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1A2C24] rounded-full flex items-center justify-center border-4 border-[#FFC107]/20 shadow-inner">
                    <SkillRadar />
                </div>

            </div>

            {/* Switch Toggle */}
            <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all group cursor-pointer"
            >
                <RefreshCw size={20} className={`text-[#FFC107] transition-transform duration-500 ${isFlipped ? 'rotate-180' : ''}`} />
                <span className="text-white font-bold text-sm tracking-wide">
                    {isFlipped ? 'View Photo' : 'Analyze Skills'}
                </span>
            </button>

        </div>
    );
};

export default ProfileDisplay;
