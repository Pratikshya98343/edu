import React from 'react';
import { Home, User, BookOpen, Heart, Star, FileText, Settings, LogOut, ArrowRight } from 'lucide-react';

export default function LearningDashboard() {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: User, label: 'My Profile' },
    { icon: BookOpen, label: 'Enrolled Courses' },
    { icon: Heart, label: 'Wishlist' },
    { icon: Star, label: 'Reviews' },
    { icon: FileText, label: 'My Quiz Attempts' },
    { icon: FileText, label: 'Order History' },
  ];

  const userMenuItems = [
    { icon: Settings, label: 'Settings' },
    { icon: LogOut, label: 'Logout' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-purple-200 to-purple-100">
      {/* Full Width Header Section */}
      <div className="h-72 bg-gradient-to-r from-cyan-400 via-blue-500 to-green-300 mx-6 mt-6 rounded-3xl overflow-hidden relative">
        {/* Decorative cloud */}
        <div className="absolute top-8 left-8">
          <div className="w-20 h-12 bg-cyan-300/40 rounded-xl"></div>
        </div>
        
        {/* Yellow circle */}
        <div className="absolute top-12 right-1/3 w-16 h-16 bg-yellow-400 rounded-full"></div>
        
        {/* Orange butterfly */}
        <div className="absolute top-8 right-32">
          <svg width="40" height="30" viewBox="0 0 40 30" className="text-orange-400">
            <path d="M10 15 Q5 5 15 10 Q20 15 15 20 Q5 25 10 15 M30 15 Q35 5 25 10 Q20 15 25 20 Q35 25 30 15 M15 15 h10" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Geometric shape bottom left */}
        <div className="absolute bottom-8 left-16">
          <div className="w-12 h-12 bg-blue-400/50 rounded-lg transform rotate-12"></div>
        </div>

        {/* Content Container */}
        <div className="flex items-center justify-between h-full px-12">
          {/* Left Content */}
          <div className="flex items-center space-x-8">
            {/* Profile Image */}
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
              <img 
                src="coursegir?w=150&h=150&fit=crop&crop=face"
                alt="Emily Hannah"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="text-white">
              <p className="text-sm opacity-90 mb-1 font-light">Looking Forward to Learning</p>
              <h1 className="text-4xl font-bold mb-2 tracking-wide">EMILY HANNAH</h1>
              <p className="text-base opacity-90 mb-4 font-light">A Conviction To No Something<br />Good To This World.</p>
              
              {/* Profile Stats */}
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-1">
                  <span className="text-xs">📚</span>
                  <span>5 Courses Enrolled</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-xs">🏆</span>
                  <span>4 Certificate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Woman Image */}
          <div className="flex flex-col items-end">
            <div className="mb-4">
              <img 
                src="coursegirl?w=200&h=250&fit=crop&crop=face"
                alt="Woman with book"
                className="h-52 w-auto object-cover"
              />
            </div>
            
            {/* Create Course Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center space-x-2 transition-colors shadow-lg font-medium">
              <span>Create Link New Course</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex px-3 pt-3 gap-5">
        {/* Left Sidebar */}
        <div className="w-95">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            {/* Welcome Back Header */}
            <div className="text-center mb-6">
              <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wide">Welcome Back</h3>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-1 mb-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                    item.active
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </nav>

            {/* User Section */}
            <div className="border-t border-gray-500 pt-6">
              <h3 className="text-gray-400 text-xs font-medium mb-4 uppercase tracking-wide">User</h3>
              <nav className="space-y-1">
                {userMenuItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <item.icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Right Dashboard Content */}
        <div className="flex-2">
          <div className="bg-white rounded-3x2 shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 h-50">Dashboard</h2>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6">
              {/* Card 1 - Blue */}
              <div className="bg-blue-50 rounded-2x3 p-8 text-center border border-blue-200">
                <div className="inline-flex items-center justify-center w-19 h-20  bg-blue-100 rounded-full mb-6">
                  <BookOpen className="text-blue-600 w-8 h-8" />
                </div>
                <div className="text-5xl font-bold text-blue-600">30</div>
              </div>

              {/* Card 2 - Purple */}
              <div className="bg-purple-50 rounded-1xl p-8 text-center border border-purple-200">
                <div className="inline-flex items-center justify-center w-16 h-20 bg-purple-100 rounded-full mb-6">
                  <FileText className="text-purple-600 w-8 h-8" />
                </div>
                <div className="text-5xl font-bold text-purple-600">10</div>
              </div>

              {/* Card 3 - Pink */}
              <div className="bg-pink-50 rounded-2xl p-8 text-center border border-pink-200">
                <div className="inline-flex items-center justify-center w-16 h-20 bg-pink-100 rounded-full mb-6">
                  <Star className="text-pink-600 w-8 h-8" />
                </div>
                <div className="text-5xl font-bold text-pink-600">7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}