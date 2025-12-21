import React, { useState, useEffect } from 'react';

const skills = [
    { name: 'Data Science', value: 90 },
    { name: 'Front-End', value: 95 },
    { name: 'Back-End/Python', value: 85 },
    { name: 'Cloud/DevOps', value: 75 },
    { name: 'UI/UX Design', value: 80 },
];

const SkillRadar = () => {
    const [animationProgress, setAnimationProgress] = useState(0);
    const size = 300;
    const center = size / 2;
    const radius = (size / 2) - 50; // Padding for labels

    useEffect(() => {
        // Animate the polygon growth
        const timer = setTimeout(() => {
            setAnimationProgress(1);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    // Helper to calculate points on the circle
    const getPoint = (value, index, total) => {
        const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
        // Animate value based on progress
        const distance = (radius * (value / 100)) * animationProgress;
        const x = center + distance * Math.cos(angle);
        const y = center + distance * Math.sin(angle);
        return { x, y };
    };

    const points = skills.map((skill, i) => getPoint(skill.value, i, skills.length));
    const polygonPath = points.map(p => `${p.x},${p.y}`).join(' ');

    // Background Grid (5 levels: 20%, 40%, 60%, 80%, 100%)
    const levels = [20, 40, 60, 80, 100];

    return (
        <div className="relative w-full max-w-[400px] h-[400px] flex items-center justify-center font-sans">
            <svg width={size} height={size} className="overflow-visible">
                {/* Background Web/Grid */}
                {levels.map((level, i) => {
                    const levelPoints = skills.map((_, index) =>
                        getPoint(level, index, skills.length)
                    );
                    const levelPath = levelPoints.map(p => `${p.x},${p.y}`).join(' ');

                    return (
                        <polygon
                            key={i}
                            points={levelPath}
                            fill="none"
                            stroke="white"
                            strokeOpacity={0.1}
                            strokeWidth="1"
                        />
                    );
                })}

                {/* Axis Lines */}
                {skills.map((_, i) => {
                    const point = getPoint(100, i, skills.length);
                    return (
                        <line
                            key={i}
                            x1={center}
                            y1={center}
                            x2={point.x}
                            y2={point.y}
                            stroke="white"
                            strokeOpacity={0.1}
                        />
                    );
                })}

                {/* Data Polygon */}
                <polygon
                    points={polygonPath}
                    fill="rgba(255, 193, 7, 0.2)"
                    stroke="#FFC107"
                    strokeWidth="2"
                    className="transition-all duration-1000 ease-out drop-shadow-[0_0_10px_rgba(255,193,7,0.5)]"
                />

                {/* Dots at Vertices */}
                {points.map((p, i) => (
                    <circle
                        key={i}
                        cx={p.x}
                        cy={p.y}
                        r="4"
                        fill="#FFC107"
                        className="transition-all duration-1000 ease-out"
                    />
                ))}

                {/* Labels */}
                {skills.map((skill, i) => {
                    // Get position for label (slightly outside radius)
                    // If we pass '115' as value it pushes label further out
                    const labelPos = getPoint(120, i, skills.length);

                    return (
                        <text
                            key={i}
                            x={labelPos.x}
                            y={labelPos.y}
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            className="fill-gray-300 text-xs font-bold uppercase tracking-wider"
                            style={{
                                // Prevent label animation, keep them fixed
                                transformBox: 'fill-box',
                                transformOrigin: 'center'
                            }}
                        >
                            {skill.name}
                        </text>
                    );
                })}
            </svg>

            {/* Central "Core" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#1A2C24]/50 backdrop-blur-sm rounded-full border border-[#FFC107]/30 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#FFC107] rounded-full animate-pulse"></div>
            </div>
        </div>
    );
};

export default SkillRadar;
