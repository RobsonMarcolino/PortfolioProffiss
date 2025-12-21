import React, { useEffect, useState } from 'react';

const messages = [
    "Initializing...",
    "Loading Assets...",
    "Compiling Code...",
    "Starting Engine...",
    "Ready."
];

const Preloader = ({ onFinish }) => {
    const [count, setCount] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        // Counter Animation
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Speed up considerably as it gets closer to 100
                const randomJump = Math.floor(Math.random() * 5) + 1;
                return Math.min(prev + randomJump, 100);
            });
        }, 40);

        // Message Cycle
        const messageInterval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 400);

        return () => {
            clearInterval(interval);
            clearInterval(messageInterval);
        };
    }, []);

    useEffect(() => {
        if (count === 100) {
            setTimeout(() => {
                setIsFinished(true); // Trigger slide up
                setTimeout(() => {
                    onFinish(); // Unmount component after animation
                }, 1000); // 1s wait for slide up animation
            }, 500); // Short pause at 100%
        }
    }, [count, onFinish]);

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#15231d] text-white transition-transform duration-1000 ease-in-out ${isFinished ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <div className="flex flex-col items-end">
                {/* Giant Counter */}
                <div className="text-[8rem] md:text-[12rem] font-black font-heading leading-none text-[#FFC107] tabular-nums">
                    {count}%
                </div>

                {/* Status Message */}
                <div className="flex items-center gap-3 mt-4 text-gray-400 font-mono text-lg uppercase tracking-widest">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    {messages[Math.min(messageIndex, messages.length - 1)]}
                    {count === 100 && <span className="text-[#FFC107]">Done</span>}
                </div>
            </div>

            {/* Progress Bar Line */}
            <div className="absolute bottom-0 left-0 h-1 bg-[#FFC107] transition-all duration-300 ease-out" style={{ width: `${count}%` }}></div>
        </div>
    );
};

export default Preloader;
