"use client";
import React, { useState } from 'react';
import {
  LayoutDashboard,
  User,
  BookOpen,
  Heart,
  Star,
  FileText,
  ShoppingCart,
  MessageSquare,
  HelpCircle,
  List,
  Settings,
  LogOut,
  ArrowRight,
  Monitor,
  Laptop,
  Trophy,
  Users,
  Gift,
  DollarSign
} from 'lucide-react';

const InstructorDashboard = () => {
  const [activeNav, setActiveNav] = useState('dashboard');

  // Function to handle navigation click
  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };

  // Navigation items
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'courses', label: 'Enrolled Courses', icon: BookOpen },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'quiz', label: 'My Quiz Attempts', icon: HelpCircle },
    { id: 'order-history', label: 'Order History', icon: ShoppingCart },
  ];

  // Instructor-specific items
  const instructorItems = [
    { id: 'my-courses', label: 'My Courses', icon: BookOpen },
    { id: 'announcements', label: 'Announcements', icon: MessageSquare },
    { id: 'quiz-attempts', label: 'Quiz Attempts', icon: FileText },
    { id: 'assignments', label: 'Assignments', icon: List },
  ];

  // User actions
  const userActions = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'logout', label: 'Logout', icon: LogOut },
  ];

  // Stats for the dashboard
  const stats = [
    { icon: '📚', value: '30', color: 'text-blue-800', bg: 'from-blue-100 to-blue-200', iconBg: 'bg-blue-500' },
    { icon: '💻', value: '10', color: 'text-purple-700', bg: 'from-purple-100 to-purple-200', iconBg: 'bg-purple-500' },
    { icon: '🏆', value: '7', color: 'text-pink-600', bg: 'from-pink-100 to-pink-200', iconBg: 'bg-pink-500' },
    { icon: '👥', value: '160', color: 'text-red-600', bg: 'from-red-100 to-red-200', iconBg: 'bg-red-500' },
    { icon: '🎁', value: '20', color: 'text-orange-600', bg: 'from-orange-100 to-orange-200', iconBg: 'bg-orange-500' },
    { icon: '💰', value: '25000', color: 'text-yellow-600', bg: 'from-yellow-100 to-yellow-200', iconBg: 'bg-yellow-500' },
  ];

   
  // Function to render profile content
  const renderProfileContent = () => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">My Profile</h2>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Registration Date</dt>
            <dd className="mt-1 text-sm text-gray-900">February 25, 2025 6:01 gm</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">First Name</dt>
            <dd className="mt-1 text-sm text-gray-900">John</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Last Name</dt>
            <dd className="mt-1 text-sm text-gray-900">Doe</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Username</dt>
            <dd className="mt-1 text-sm text-gray-900">instructor</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900">example@gmail.com</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
            <dd className="mt-1 text-sm text-gray-900">+1-202-555-0174</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Skill/Occupation</dt>
            <dd className="mt-1 text-sm text-gray-900">Application Developer</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Biography</dt>
            <dd className="mt-1 text-sm text-gray-900">
              I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations, and creating intuitive, dynamic user experiences.
            </dd>
          </div>
        </dl>
      </div>
    );
  };

  // Function to render dashboard content
  const renderDashboard = () => {
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
  };

  const renderCourseContent = () => {

  }

  // Function to render content based on activeNav
  const renderContent = () => {
    switch (activeNav) {
        case 'dashboard':
        return renderDashboard();
      case 'profile':
        return renderProfileContent();
        case 'courses':
            return renderCourseContent();
      default:
        return (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {navigationItems.find((item) => item.id === activeNav)?.label}
            </h2>
            <p className="text-slate-600">This section is coming soon!</p>
          </div>
        );
    }
  };
    
  return (
    <div className="m-0 p-4 box-border font-sans bg-gradient-to-b from-purple-300 via-cyan-300 via-30% via-30% to-white to-50% min-h-screen p-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="px-30 py-30 pt-20 relative overflow-hidden mb-17"
          style={{
            backgroundImage: `url('/Image/Instructor.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center relative z-10 p-8">
            <div className="flex items-center space-x-6 mb-6 lg:mb-0">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img
                  src="Image/InstructorIcon.png"
                  alt="John's Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 mb-1">BOOTCAMP INSTRUCTOR</p>
                <h1 className="text-4xl font-bold text-white mb-2">LEARN WITH JOHN</h1>
                <div className="flex items-center space-x-6 text-white text-sm">
                  <span className="px-3 py-1 bg-white/20 rounded-full">CODING - TRAVEL - LIFESTYLE</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-10">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 mb-10 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg">
                <span>Create a New Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-4 right-20 w-32 h-32 opacity-10">
            <div className="w-full h-full border-l-2 border-white transform rotate-45"></div>
          </div>
          <div className="absolute bottom-8 right-8 w-16 h-16 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              <path d="M50 10 L90 90 L10 90 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
        <div className="flex min-h-[300px] mt-10">
          {/* Sidebar */}
          <div className="w-80 bg-slate-50 border-r border-slate-400 rounded-l-2xl">
            <div className="p-6">
              <div className="text-slate-500 text-sm mb-6">WELCOME, RAFI!</div>
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
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
                <div className="text-slate-400 text-xs font-semibold mb-4 tracking-wider">INSTRUCTOR</div>
                <nav className="space-y-2">
                  {instructorItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
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
              </div>
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
          <div className="flex-1">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;