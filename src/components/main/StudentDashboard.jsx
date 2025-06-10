"use client";
import { useEffect, useState } from 'react';

const StudentDashboard = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');

  const handleNavClick = (navName) => {
    setActiveNav(navName);
  };

  return (
    <div className="m-0 p-4 box-border font-sans bg-gradient-to-b from-purple-500 via-cyan-500 via-30% via-50% to-white to-50% min-h-screen p-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-emerald-500 rounded-2xl p-10 mb-5 relative overflow-hidden">
          {/* Sun decoration */}
          <div className="absolute top-8 right-36 w-15 h-15 bg-amber-500 rounded-full z-10"></div>
          
          <div className="flex items-center justify-between relative z-20 max-md:flex-col max-md:gap-5 max-md:text-center">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-full border-3 border-white/50 bg-gray-100"></div>
                <div>
                  <h1 className="text-white text-4xl font-bold mb-2 tracking-widest">EMILY HANNAH</h1>
                  <div className="text-white/90 text-sm mb-1">🎯 Courses Enrolled: 4 Certificate</div>
                  <div className="text-white/80 text-sm">Road To This World</div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-xl">💎</div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-70 h-50 bg-gradient-to-br from-yellow-200 to-amber-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold relative overflow-hidden">
                <div className="absolute right-5 bottom-0 w-30 h-40 bg-black/10 rounded-t-full"></div>
                <div className="absolute top-5 right-8 text-orange-500 text-2xl">🦋</div>
              </div>
              <button className="absolute -bottom-4 right-5 bg-blue-500 hover:bg-blue-600 text-white border-none py-3 px-6 rounded-full text-sm font-semibold cursor-pointer shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5">
                Create Link New Course →
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-5 max-md:flex-col">
          {/* Sidebar */}
          <div className="w-75 max-md:w-full bg-white rounded-2xl p-8 h-fit shadow-xl">
            <div className="mb-8">
              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-5">MY ACCOUNT</div>
              {[
                { icon: '📊', name: 'Dashboard' },
                { icon: '👤', name: 'My Profile' },
                { icon: '📚', name: 'Enrolled Courses' },
                { icon: '❤️', name: 'Wishlist' },
                { icon: '⭐', name: 'Reviews' },
                { icon: '📝', name: 'My Quiz Attempts' },
                { icon: '🛒', name: 'Order History' }
              ].map((item) => (
                <div
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className={`flex items-center gap-4 py-3 px-4 rounded-lg cursor-pointer transition-all mb-1 text-sm font-medium ${
                    activeNav === item.name
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                  }`}
                >
                  <div className="w-5 h-5 text-center">{item.icon}</div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
            
            <div>
              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-5">USER</div>
              {[
                { icon: '⚙️', name: 'Settings' },
                { icon: '🚪', name: 'Logout' }
              ].map((item) => (
                <div
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className={`flex items-center gap-4 py-3 px-4 rounded-lg cursor-pointer transition-all mb-1 text-sm font-medium ${
                    activeNav === item.name
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                  }`}
                >
                  <div className="w-5 h-5 text-center">{item.icon}</div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Content */}
           <div className="flex-1">
            <div className="bg-white rounded-2xl p-9 shadow-xl">
              <h2 className="text-gray-700 text-2xl font-semibold mb-8">Dashboard</h2>
              
              <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-10 text-center shadow-xl transition-transform hover:-translate-y-1">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl">📚</div>
                  <div className="text-5xl font-bold mb-3 text-blue-800">30</div>
                  <div className="text-gray-500 text-sm font-medium">Total Courses</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-10 text-center shadow-xl transition-transform hover:-translate-y-1">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-2xl">💻</div>
                  <div className="text-5xl font-bold mb-3 text-purple-700">10</div>
                  <div className="text-gray-500 text-sm font-medium">Active Courses</div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-10 text-center shadow-xl transition-transform hover:-translate-y-1">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-2xl">🏆</div>
                  <div className="text-5xl font-bold mb-3 text-amber-600">7</div>
                  <div className="text-gray-500 text-sm font-medium">Certificates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;