import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { DEMOGRAPHICS } from '../constants';

export const AudienceCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Gender Chart */}
      <div className="bg-white p-6 pt-10 relative shadow-md rotate-1 transform transition-transform hover:rotate-0">
         {/* Tape */}
        <div className="absolute -top-3 right-1/2 transform translate-x-1/2 w-32 h-8 bg-white/40 border border-white/50 shadow-sm -rotate-2 backdrop-blur-sm z-10"></div>
        
        <div className="flex items-center gap-2 mb-6">
          <span className="font-hand text-2xl font-bold text-gray-800 border-b-2 border-pink-200">Gender</span>
        </div>
        
        <div className="h-64 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={DEMOGRAPHICS.gender}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {DEMOGRAPHICS.gender.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          {/* Legend */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <span className="font-hand text-xl text-gray-500">Ratio</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-8 mt-2">
            {DEMOGRAPHICS.gender.map((g) => (
                <div key={g.name} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: g.color }}></div>
                    <span className="font-hand text-lg text-gray-600">{g.name} <span className="text-gray-900 font-bold">{g.value}%</span></span>
                </div>
            ))}
        </div>
      </div>

      {/* Age Chart */}
      <div className="bg-white p-6 pt-10 relative shadow-md -rotate-1 transform transition-transform hover:rotate-0">
        {/* Tape */}
        <div className="absolute -top-3 left-8 w-24 h-8 bg-white/40 border border-white/50 shadow-sm rotate-1 backdrop-blur-sm z-10"></div>

        <div className="flex items-center gap-2 mb-6">
          <h3 className="font-hand text-2xl font-bold text-gray-800 border-b-2 border-blue-200">Age Range</h3>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={DEMOGRAPHICS.age.filter(d => d.value > 0)}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={40} tick={{fontSize: 14, fontFamily: 'Patrick Hand', fill: '#4b5563'}} axisLine={false} tickLine={false} />
              <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{ borderRadius: '0px', border: '1px solid #e5e7eb', boxShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="value" fill="#374151" barSize={15} animationDuration={1500}>
                {/* 
                 // @ts-ignore */}
                {({ payload, x, y, width, height, value }) => (
                    <text x={x + width + 8} y={y + height / 1.2} fill="#374151" fontFamily="Patrick Hand" fontSize={16} fontWeight={600} textAnchor="start">{value}%</text>
                )}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Countries */}
      <div className="bg-white p-6 pt-10 relative shadow-md md:col-span-2 rotate-1 relative">
         {/* Tape */}
         <div className="absolute -top-3 right-8 w-32 h-8 bg-white/40 border border-white/50 shadow-sm -rotate-3 backdrop-blur-sm z-10"></div>
         <div className="absolute -bottom-3 left-8 w-32 h-8 bg-white/40 border border-white/50 shadow-sm -rotate-1 backdrop-blur-sm z-10"></div>

        <div className="flex items-center gap-2 mb-6">
            <h3 className="font-hand text-2xl font-bold text-gray-800 border-b-2 border-green-200">Top Countries</h3>
        </div>
        <div className="space-y-4">
            {DEMOGRAPHICS.countries.map((country, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 hover:bg-gray-50 transition-colors border-b border-gray-100 border-dashed last:border-0">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl filter drop-shadow-sm">{country.flag}</span>
                        <span className="font-hand text-xl text-gray-700">{country.name}</span>
                    </div>
                    <div className="flex items-center gap-4 w-1/2">
                        <div className="w-full bg-gray-100 h-3 rounded-sm overflow-hidden border border-gray-200">
                            <div className="bg-gray-800 h-full" style={{ width: `${country.value}%` }}></div>
                        </div>
                        <span className="font-hand text-lg font-bold text-gray-900 w-12 text-right">{country.value}%</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};