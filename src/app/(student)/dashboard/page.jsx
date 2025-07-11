"use client"; // Needs to be a client component for interactive elements
import React from "react";

const StudentDashboardPage = () => {
  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-9 shadow-xl min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
        <h2 className="text-gray-700 text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8">
          Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {/* Total Courses Card */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-center shadow-lg sm:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl sm:text-2xl">
              📚
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-blue-800">
              30
            </div>
            <div className="text-gray-500 text-xs sm:text-sm font-medium">
              Total Courses
            </div>
          </div>

          {/* Active Courses Card */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-center shadow-lg sm:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl sm:text-2xl">
              💻
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-purple-700">
              10
            </div>
            <div className="text-gray-500 text-xs sm:text-sm font-medium">
              Active Courses
            </div>
          </div>

          {/* Certificates Card */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-center shadow-lg sm:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xl sm:text-2xl">
              🏆
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-amber-600">
              7
            </div>
            <div className="text-gray-500 text-xs sm:text-sm font-medium">
              Certificates
            </div>
          </div>
        </div>

        {/* Optional: Add a quick stats section for larger screens */}
        <div className="mt-8 sm:mt-10 lg:mt-12 hidden sm:block">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 sm:p-6">
            <h3 className="text-gray-700 text-lg sm:text-xl font-semibold mb-4">
              Quick Overview
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600">85%</div>
                <div className="text-xs sm:text-sm text-gray-500">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">4.8</div>
                <div className="text-xs sm:text-sm text-gray-500">Avg Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600">120h</div>
                <div className="text-xs sm:text-sm text-gray-500">Study Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600">15</div>
                <div className="text-xs sm:text-sm text-gray-500">Achievements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardPage;
