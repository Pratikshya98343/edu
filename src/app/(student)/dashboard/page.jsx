"use client"; // Needs to be a client component for interactive elements
import React from "react";
// You may not need LayoutDashboard here if it's only in the layout
// import { LayoutDashboard } from "lucide-react";

const StudentDashboardPage = () => {
  return (
    <div className="flex-1">
      <div className="bg-white rounded-2xl p-9 shadow-xl h-170 align-middle">
        <h2 className="text-gray-700 text-2xl font-semibold mb-8">Dashboard</h2>

        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-10 text-center shadow-xl transition-transform hover:-translate-y-1">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl">
              📚
            </div>
            <div className="text-5xl font-bold mb-3 text-blue-800">30</div>
            <div className="text-gray-500 text-sm font-medium">
              Total Courses
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-10 text-center shadow-xl transition-transform hover:-translate-y-1">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-2xl">
              💻
            </div>
            <div className="text-5xl font-bold mb-3 text-purple-700">10</div>
            <div className="text-gray-500 text-sm font-medium">
              Active Courses
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-10 text-center shadow-xl transition-transform hover:-translate-y-1">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-2xl">
              🏆
            </div>
            <div className="text-5xl font-bold mb-3 text-amber-600">7</div>
            <div className="text-gray-500 text-sm font-medium">
              Certificates
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardPage;