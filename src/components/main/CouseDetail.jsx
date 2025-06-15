'use client';
import React from 'react';
import { Star, Play, Calendar, User, Video, BookOpen, Facebook, Twitter, Instagram, Linkedin, Phone } from 'lucide-react';

export default function CourseLandingPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, rgb(195, 164, 245), rgb(224, 211, 251), white 90%)' }}>
    
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Hero Box with Purple Background */}
            <div className="rounded-xl p-6" style={{ backgroundColor: '#a874e6' }}>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                The Complete Histudy 2025:<br />
                From Zero to Expert!
              </h1>
              <p className="text-white text-lg">
                Master Python by building 100 projects in 100 days. Learn data science, automation, build<br />
                websites, games and apps!
              </p>
            </div>

            {/* Rating and Stats */}
            <div className="flex items-center space-x-6">
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                Bestseller
              </span>
              <div className="flex items-center space-x-1">
                <span className="text-orange-500 font-bold">4.8</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">(25,479 rating)</span>
                <span className="text-gray-500 text-sm">616,029 students</span>
              </div>
            </div>

            {/* Instructor Info */}
            <div className="flex items-center space-x-3">
              <img src="/image/StudentIcon.png" alt="Instructor" className="w-10 h-10 rounded-full" />
              <span className="text-gray-600">By Claudia Pruitt in Designing</span>
            </div>

            {/* Additional Course Info */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Last updated 12/2025</span>
              <span>🌐 English</span>
              <span>✓ Certified Course</span>
            </div>

            {/* Main Course Image Section */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-purple-400 to-purple-200 p-8">
              <div className="flex items-center justify-between">
                
                {/* Course Text Details */}
                <div className="text-white space-y-1">
                  <div className="text-sm opacity-75">01 JANUARY - 15 MARCH</div>
                  <h2 className="text-3xl font-bold">Difficult Things<br />About Education.</h2>
                  <div className="text-sm opacity-75">COURSE BY<br />JELIANA ELENA</div>
                  
                  {/* Class & Videos */}
                  <div className="flex space-x-4 mt-6">
                    <div className="flex items-center space-x-1 bg-white/20 rounded-lg px-4 py-2">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm">26 Class</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
                      <Video className="w-4 h-4" />
                      <span className="text-sm">65 Videos</span>
                    </div>
                  </div>

                  {/* Enrolled Students */}
                  <div className="flex items-center space-x-2 bg-purple-600 rounded-lg px-4 py-2 mt-4">
                    <User className="w-4 h-4" />
                    <span className="text-sm">40 Enroll Students</span>
                  </div>
                </div>

                <div className="relative hidden md:block">
                  <img 
                    src="Image/girl.png" 
                    alt="Instructor" 
                    className="w-100 h-64 object-cover rounded-lg" 
                  />                 
                </div>
              </div>

              {/* Decorative Books */}
              <div className="absolute bottom-4 left-8">
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            
            {/* Preview Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="relative mb-4">
                <img 
                  src="/Image/girl.png" 
                  alt="Course preview" 
                  className="w-full h-48 object-cover rounded-lg" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-purple-600 ml-1" />
                  </div>
                </div>
              </div>

              {/* Price Section */}
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl font-bold text-gray-800">$70</span>
                <span className="text-xl text-gray-400 line-through">$212</span>
                <span className="text-red-500 text-sm font-medium">3 days left!</span>
              </div>

              {/* Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition duration-300">
                  Add to Cart
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition duration-300">
                  Buy Now
                </button>
              </div>

              {/* Guarantee Text */}
              <div className="text-center text-sm text-gray-600 mb-6">
                30-Day Money-Back Guarantee
              </div>

              {/* Course Metadata */}
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Start Date</span>
                  <span className="font-medium">5 Hrs 20 Min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Enrolled</span>
                  <span className="font-medium">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lectures</span>
                  <span className="font-medium">50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Skill Level</span>
                  <span className="font-medium">Basic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Language</span>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">Show More</span>
                    <span className="text-gray-400">⌄</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex justify-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Facebook className="w-5 h-5 text-gray-600" />
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Twitter className="w-5 h-5 text-gray-600" />
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-gray-600" />
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              <div className="text-center text-sm text-gray-600 mb-3">
                For details about the course
              </div>
              <div className="bg-purple-100 text-purple-700 text-center py-3 rounded-lg">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Call Us: +44 000 888 777</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}