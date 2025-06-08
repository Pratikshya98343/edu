"use client";
import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-50 py-4 px-8">
      <div className="max-w-9xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Logo and Social Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg italic">hi</span>
              </div>
              <span className="text-2xl font-semibold text-gray-800">Study</span>
            </div>
            
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition-colors">
                <FaFacebook className="w-4 h-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition-colors">
                <FaTwitter className="w-4 h-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition-colors">
                <FaInstagram className="w-4 h-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition-colors">
                <FaLinkedin className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            <button className="flex items-center space-x-3 border border-gray-300 rounded-full px-6 py-2 hover:border-blue-600 hover:text-blue-600 transition-colors">
              <span className="text-gray-700 text-sm">Contact With Us</span>
              <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 border-r border-b border-white transform rotate-[-45deg] translate-x-[-1px]"></div>
              </div>
            </button>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Useful Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Marketplace</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">kindergarten</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">University</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Classic Lms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Company</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Become Teacher</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Instructor</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Get Contact */}
          <div className="mt-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Get Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Phone: (406) 555-0120</p>
              <p className="text-gray-600">E-mail: admin@example.com</p>
              
              <div className="mt-1">
                <h4 className="text-gray-800 font-medium mb-1">Newsletter</h4>
                <p className="text-gray-600 text-sm mb-2">
                  2000+ Our students are subscribe Around the World, Don't be shy introduce yourself!
                </p>
                
                <div className="space-y-2">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email Here"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 pr-12"
                    />
                    <button
                      onClick={handleSubmit}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
                    >
                      <IoSend className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
                  >
                    Submit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-4 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-600 text-xs">
              © Copyright 2025 <span className="text-blue-600">Rainbow-Themes</span> All Rights Reserved
            </div>
            <div className="flex space-x-4 text-xs">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of service</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Subscription</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Login & Register</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;