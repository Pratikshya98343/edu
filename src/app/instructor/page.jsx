// src/app/instructor/page.js
"use client"; // This component uses client-side state, so mark it as a client component.

import React from 'react';




const stats = [
  { icon: '📚', value: '30', color: 'text-blue-800', bg: 'from-blue-100 to-blue-200', iconBg: 'bg-blue-500' },
  { icon: '💻', value: '10', color: 'text-purple-700', bg: 'from-purple-100 to-purple-200', iconBg: 'bg-purple-500' },
  { icon: '🏆', value: '7', color: 'text-pink-600', bg: 'from-pink-100 to-pink-200', iconBg: 'bg-pink-500' },
  { icon: '👥', value: '160', color: 'text-red-600', bg: 'from-red-100 to-red-200', iconBg: 'bg-red-500' },
  { icon: '🎁', value: '20', color: 'text-orange-600', bg: 'from-orange-100 to-orange-200', iconBg: 'bg-orange-500' },
  { icon: '💰', value: '25000', color: 'text-yellow-600', bg: 'from-yellow-100 to-yellow-200', iconBg: 'bg-yellow-500' },
];

export default function InstructorDashboardPage() { // Renamed to avoid confusion with the main component
  return (
    <div className="bg-white rounded-r-2xl p-9 shadow-xl">
      <h2 className="text-gray-700 text-2xl font-semibold mb-8">Dashboard</h2>
      <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.bg} rounded-2xl p-10 text-center shadow-xl transition-transform hover:-translate-y-1`}
          >
            <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${stat.iconBg} text-white flex items-center justify-center text-2xl`}>
              {stat.icon}
            </div>
            <div className={`text-5xl font-bold mb-3 ${stat.color}`}>{stat.value}</div>
            <div className="text-gray-500 text-sm font-medium">
              {index === 0 && 'Total Courses'}
              {index === 1 && 'Active Courses'}
              {index === 2 && 'Certificates'}
              {index === 3 && 'Students'}
              {index === 4 && 'Assignments'}
              {index === 5 && 'Revenue'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}