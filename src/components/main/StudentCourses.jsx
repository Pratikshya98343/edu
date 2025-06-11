"use client";
import React, { useState } from 'react';
import { User, BookOpen, Heart, Award, Settings, LogOut, Star, Users, Clock, BarChart3, Zap, Code, Database, Layers,ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('enrolled');

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', active: false },
    { icon: User, label: 'My Profile', active: false },
    { icon: BookOpen, label: 'Enrolled Courses', active: true },
    { icon: Heart, label: 'Wishlist', active: false },
    { icon: Star, label: 'Reviews', active: false },
    { icon: Award, label: 'My Quiz Attempts', active: false },
    { icon: Clock, label: 'Order History', active: false },
  ];

  const courses = [
    {
      id: 1,
      title: 'React Front To Back',
      instructor: 'Brad Traversy',
      rating: 4.8,
      reviews: 102,
      students: 100,
      lessons: 45,
      progress: 42,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      icon: Code,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'PHP Beginner Advanced',
      instructor: 'John Smith',
      rating: 4.6,
      reviews: 21,
      students: 100,
      lessons: 52,
      progress: 65,
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop',
      icon: Database,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Angular Zero to Mastery',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      reviews: 102,
      students: 100,
      lessons: 68,
      progress: 90,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
      icon: Layers,
      color: 'from-green-500 to-teal-600'
    }
  ];

  const tabs = [
    { id: 'enrolled', label: 'Enrolled Courses' },
    { id: 'active', label: 'Active Courses' },
    { id: 'completed', label: 'Completed Courses' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=100&h=100&fit=crop&crop=face" 
                  alt="Emily Hannah" 
                  className="w-20 h-20 rounded-full border-4 border-white/30 shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-1">
                  <Award className="w-4 h-4 text-yellow-800" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-1">EMILY HANNAH</h1>
                <p className="text-blue-100 text-lg">A Connection To The Something</p>
                <p className="text-blue-200">React To The Work</p>
                <div className="flex items-center mt-2 space-x-4">
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">3 Courses Enrolled</span>
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">4 Certificates</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                  <Zap className="w-8 h-8 text-yellow-800" />
                </div>
              </div>
              <button className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg transition-colors">
                Create Link New Course →
              </button>
            </div>
          </div>
        </div>
      </div><div className="m-0 p-4 box-border font-sans bg-gradient-to-b from-purple-300 via-cyan-300 via-30% via-30% to-white to-50% min-h-screen p-5">
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
            < div className="flex items-center space-x-6 mb-6 lg:mb-0">
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
        </div>


      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 bg-white rounded-2xl shadow-lg p-6 h-fit">
            <div className="mb-6">
              <h3 className="text-gray-400 text-sm font-medium mb-4">WELCOME, EMILY!</h3>
            </div>
            
            <nav className="space-y-2">
              {sidebarItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                    item.active 
                      ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-gray-400 text-sm font-medium mb-4">USER</h4>
              <div className="space-y-2">
                <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
                  <Settings className="w-5 h-5" />
                  <span className="font-medium">Settings</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Enrolled Courses</h2>
              
              {/* Tabs */}
              <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-xl w-fit">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Course Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative">
                      <div className={`h-48 bg-gradient-to-br ${course.color} p-6 flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10 text-center text-white">
                          <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                            <course.icon className="w-8 h-8" />
                          </div>
                          <div className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                            {course.lessons} Lessons
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                            <BookOpen className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">({course.reviews} Reviews)</span>
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </h3>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{course.students} Students</span>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-gray-600">COMPLETE</span>
                          <span className="font-medium text-gray-800">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${course.color} transition-all duration-300`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-blue-50 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-100 transition-colors">
                        Download Certificate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
  );
};

export default Dashboard;