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

const Header = () => {
  const [cartCount] = useState(0);

  return (
    <div className= "bg-white">
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
      </div>
);
}
export default Header;