"use client";
import React, { useState } from 'react';
import { 
  ChevronDown, 
  User, 
  ShoppingCart, 
  Search, 
  Star, 
  Play, 
  ArrowRight, 
  Code, 
  Database, 
  Smartphone, 
  Palette 
} from "lucide-react";
// import educationImage from '@/components/Image/welcome.png';

const Homepage = () => {
  const [cartCount] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 text-gray-600">
            <span>📞 +123-456-7890</span>
            <div className="flex space-x-2">
              <span>📧</span>
              <span>🐦</span>
              <span>📷</span>
              <span>💬</span>
              <span>📺</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-gray-600">
            <span>My Account</span>
            <span>FAQ</span>
            <span>Contact Us</span>
            <span>Privacy Policy</span>
            <span>Terms & Condition</span>
            <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl italic">hi</span>
              </div>
              <span className="text-3xl font-semibold text-gray-800">Study</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-gray-700">Home</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-gray-700">Courses</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-gray-700">Dashboard</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-gray-700">Pages</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-gray-700">Elements</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-gray-700">Blog</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <User className="w-6 h-6 text-gray-600 cursor-pointer" />
              <div className="relative cursor-pointer">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <Search className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Trustpilot */}
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-green-500 fill-current" />
                <span className="text-green-600 font-semibold">Trustpilot</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-green-500 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">Excellent 4.9 out of 5</span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Education Is The Best
                </h1>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Key <span className="text-purple-500">Success In Life</span>
                </h1>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                  <span className="font-semibold">Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg flex items-center space-x-2 hover:border-blue-600 hover:text-blue-600 transition-colors">
                  <Play className="w-5 h-5" />
                  <span className="font-semibold">Watch Video</span>
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              {/* Background Shapes */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full opacity-70 transform rotate-12"></div>
                <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-70 transform -rotate-12"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full opacity-70"></div>
              </div>

             {/* Main Image Container */}
<div className="relative z-10 flex justify-center">
  <div className="relative">
    {/* Woman Image Placeholder */}
    <div className="w-80 h-96 bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
      <div className="w-full h-full bg-gradient-to-b from-purple-200 to-blue-300 flex items-center justify-center">
        <div className="text-gray-600 text-8xl">👩‍🎓</div>
      </div>
    </div>
    {/* Floating Cards */}
    <div className="absolute -top-4 -left-8 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3">
      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
        <span className="text-2xl">🎓</span>
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-800">36k+</div>
        <div className="text-xs text-gray-500">Enrolled Students</div>
        <div className="flex -space-x-2 mt-1">
          <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
          <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
          <div className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></div>
          <div className="w-6 h-6 bg-red-400 rounded-full border-2 border-white"></div>
        </div>
      </div>
    </div>

                  <div className="absolute -bottom-4 -right-8 bg-white rounded-lg shadow-lg p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 text-lg">✓</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-800">Your</div>
                        <div className="text-xs text-gray-500">Admission Confirmed</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -right-12 bg-white rounded-lg shadow-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 font-bold">99%</span>
                      </div>
                      <div className="text-xs text-gray-500">Satisfied</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-32 left-8 text-purple-400">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z"/>
                </svg>
              </div>
              <div className="absolute bottom-20 right-16 text-blue-400">
                <div className="w-6 h-6 border-2 border-current rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              CATEGORIES
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore Top Courses Categories
            </h2>
            <h2 className="text-4xl lg:text-5xl font-bold">
              That <span className="text-purple-500">Change Yourself</span>
            </h2>
          </div>

          {/* Course Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Design */}
            <div className="text-center group cursor-pointer">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Palette className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Web Design</h3>
              <p className="text-gray-500">1Course</p>
            </div>

            {/* Backend */}
            <div className="text-center group cursor-pointer">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Database className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Backend</h3>
              <p className="text-gray-500">2 Courses</p>
            </div>

            {/* Full Stack */}
            <div className="text-center group cursor-pointer">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Code className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Full Stack</h3>
              <p className="text-gray-500">1Course</p>
            </div>

            {/* Mobile Application */}
            <div className="text-center group cursor-pointer">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile Application</h3>
              <p className="text-gray-500">1Course</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;