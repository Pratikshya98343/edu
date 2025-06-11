"use client";
import React, { useEffect, useState } from 'react';
import { 
  LayoutDashboard, 
  User, 
  BookOpen, 
  Heart, 
  Star, 
  FileText, 
  Clock, 
  Settings, 
  LogOut,
  Bell,
  ArrowRight
} from 'lucide-react';

const StudentDashboard = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');

  const handleNavClick = (navName) => {
    setActiveNav(navName);
  };

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'courses', label: 'Enrolled Courses', icon: BookOpen },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'quiz', label: 'My Quiz Attempts', icon: FileText },
    { id: 'order-history', label: 'Order History', icon: Clock },
  ];

  const userActions = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'logout', label: 'Logout', icon: LogOut },
  ];

  return (
    <div className="m-0 p-4 box-border font-sans bg-gradient-to-b from-purple-300 via-cyan-300 via-30% via-30% to-white to-50% min-h-screen p-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          className="px-30 py-30 pt-20 relative overflow-hidden mb-17" 
          style={{
            backgroundImage: `url('/Image/student.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center relative z-10">
            <div className="flex items-center space-x-6 mb-6 lg:mb-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-2xl border-4 border-white shadow-lg">
                EH
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">EMILY HANNAH</h1>
                <div className="flex items-center space-x-6 text-white text-sm">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>5 Courses Enrolled</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>4 Certificates</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 mt-10">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 mb-10 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg">
                <span>Create Link New Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex min-h-[300px] mt-10">
          {/* Sidebar */}
          <div className="w-80 bg-slate-50 border-r border-slate-400">
            <div className="p-6">
              <div className="text-slate-500 text-sm mb-6">WELCOME, Raj!</div>

              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveNav(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 border-r-4 ${
                        activeNav === item.id
                          ? 'bg-indigo-50 text-indigo-700 border-indigo-500 font-semibold'
                          : 'text-slate-600 hover:bg-slate-100 border-transparent hover:text-slate-900'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-10 pt-6 border-t border-slate-200">
                <div className="text-slate-400 text-xs font-semibold mb-4 tracking-wider">USER</div>
                <nav className="space-y-2">
                  {userActions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
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