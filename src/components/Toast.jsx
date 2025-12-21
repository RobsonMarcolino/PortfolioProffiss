import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const Toast = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[90] flex items-center gap-3 bg-[#1A2C24] text-white px-6 py-3 rounded-full shadow-2xl border border-[#FFC107]/20 animate-fade-in-down">
            <CheckCircle size={20} className="text-[#FFC107]" />
            <span className="font-bold text-sm tracking-wide">{message}</span>
            <button onClick={onClose} className="ml-2 hover:text-[#FFC107] transition-colors">
                <X size={16} />
            </button>
        </div>
    );
};

export default Toast;
