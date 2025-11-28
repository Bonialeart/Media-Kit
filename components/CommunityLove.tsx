import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Youtube, Instagram } from 'lucide-react';

// Custom TikTok icon since Lucide doesn't have it perfectly sometimes, or reuse Lucide's if available.
// For simplicity, I'll use text or a generic video icon if needed, but let's try to map them.

const PlatformIcon = ({ platform }: { platform: string }) => {
    switch (platform) {
        case 'youtube': return <Youtube size={16} className="text-red-600" />;
        case 'instagram': return <Instagram size={16} className="text-pink-600" />;
        case 'tiktok': return (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
        );
        default: return null;
    }
};

export const CommunityLove: React.FC = () => {
    return (
        <div className="relative py-12">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')] opacity-10 rounded-sm"></div>

            <div className="text-center mb-12 relative z-10">
                <h2 className="text-4xl font-hand font-bold text-gray-900 transform -rotate-1">Community Love</h2>
                <p className="text-gray-500 font-hand text-xl mt-2">What people are saying</p>
                <div className="h-1 w-32 bg-yellow-400 mx-auto mt-2 rounded-full transform rotate-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {TESTIMONIALS.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className={`relative p-6 shadow-lg transition-transform hover:scale-105 hover:z-10 ${testimonial.color} ${testimonial.rotation}`}
                    >
                        {/* Pin or Tape */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 shadow-sm border border-red-600 z-20"></div>
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-black/20 z-10"></div>

                        <p className="font-hand text-xl text-gray-800 leading-snug mb-4">
                            "{testimonial.comment}"
                        </p>

                        <div className="flex items-center justify-between border-t border-black/10 pt-3">
                            <span className="font-bold font-sans text-xs text-gray-600">{testimonial.user}</span>
                            <PlatformIcon platform={testimonial.platform} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
