import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  highlight?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, highlight = false }) => {
  // Rotate slightly randomly for organic feel (simulated with ternary for consistency)
  const rotation = highlight ? 'rotate-1' : '-rotate-1';
  const colorClass = highlight ? 'bg-[#fff1f2]' : 'bg-white'; // Pink tint for highlight
  
  return (
    <div className={`relative p-6 pt-8 rounded-sm shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${colorClass} ${rotation}`}>
      {/* Tape Element */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-white/40 border border-white/50 shadow-sm rotate-2 backdrop-blur-sm z-10"></div>
      
      <div className="flex justify-between items-start mb-1 relative z-0">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider font-sans">{label}</p>
      </div>
      <h3 className={`text-4xl font-hand font-bold ${highlight ? 'text-pink-600' : 'text-gray-800'}`}>
        {value}
      </h3>
    </div>
  );
};