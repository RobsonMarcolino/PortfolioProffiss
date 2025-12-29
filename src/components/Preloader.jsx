import React, { useEffect, useState } from 'react';
import LoadingVideo from '../assets/LOADING.mp4';

const Preloader = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);
    const [isExit, setIsExit] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + 1;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsExit(true); // Start fade out
                        setTimeout(onFinish, 800);
                    }, 500); // Hold for 0.5s at 100%
                    return 100;
                }
                return next;
            });
        }, 30); // ~3 seconds load time to enjoy the video

        return () => clearInterval(timer);
    }, [onFinish]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-1000 ease-in-out ${isExit ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                >
                    <source src={LoadingVideo} type="video/mp4" />
                </video>
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-black/40 bg-radial-gradient from-transparent to-black/80 z-10"></div>
            </div>

            {/* Minimal Content Overlay */}
            <div className="relative z-20 flex flex-col items-center mt-[20vh]"> {/* Pushed down a bit */}
                <h2 className="text-3xl md:text-5xl font-black text-white font-heading tracking-widest drop-shadow-xl mb-4">
                    Business Solutions Developer.
                </h2>

                {/* Slim Progress Bar */}
                <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                    <div
                        className="h-full bg-[#FFC107] shadow-[0_0_15px_#FFC107] transition-all duration-out ease-linear"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <p className="mt-2 text-xs font-mono text-gray-300 tracking-[0.3em] font-bold drop-shadow-md">
                    loading experience... {Math.round(progress)}%
                </p>
            </div>
        </div>
    );
};

export default Preloader;
