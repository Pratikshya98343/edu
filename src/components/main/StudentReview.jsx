"use client";
import React, { useState } from "react";
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
  ArrowRight,
  Edit3,
  Trash2,
} from "lucide-react";

const StudentReviews = () => {
  const [activeTab, setActiveTab] = useState("reviews");

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "profile", label: "My Profile", icon: User },
    { id: "courses", label: "Enrolled Courses", icon: BookOpen },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "reviews", label: "Reviews", icon: Star },
    { id: "quiz", label: "My Quiz Attempts", icon: FileText },
    { id: "order-history", label: "Order History", icon: Clock },
  ];

  const userActions = [
    { id: "settings", label: "Settings", icon: Settings },
    { id: "logout", label: "Logout", icon: LogOut },
  ];

  const reviewData = [
    {
      course: "Speaking Korean for Beginners",
      feedback: "Good",
      rating: 5,
      reviewsCount: 9,
    },
    {
      course: "Introduction to Calculus",
      feedback: "Good",
      rating: 4,
      reviewsCount: 9,
    },
    {
      course: "How to Write Your First Novel",
      feedback: "Good",
      rating: 5,
      reviewsCount: 9,
    },
    {
      course: "Speaking Korean for Beginners",
      feedback: "Good",
      rating: 5,
      reviewsCount: 9,
    },
    {
      course: "How to Write Your First Novel",
      feedback: "Good",
      rating: 5,
      reviewsCount: 9,
    },
    {
      course: "Speaking Korean for Beginners",
      feedback: "Good",
      rating: 5,
      reviewsCount: 9,
    },
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
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 border-r-4 ${
                        activeTab === item.id
                          ? "bg-indigo-50 text-indigo-700 border-indigo-500 font-semibold"
                          : "text-slate-600 hover:bg-slate-100 border-transparent hover:text-slate-900"
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

            {/* Main Content */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 w-[800px] md:w-[900px] lg:w-[1000px] max-w-full">
  <div className="px-20 py-4 border-b border-slate-200">
    <h2 className="text-2xl font-bold text-slate-800">Reviews</h2>
  </div>
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="bg-slate-50 border-b border-slate-200">
          <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
            Course
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
            Feedback
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {reviewData.map((review, index) => (
          <tr
            key={index}
            className="hover:bg-slate-50 transition-colors duration-150"
          >
            <td className="px-6 py-4 text-sm font-medium text-slate-900">
              {review.course}
            </td>
            <td className="px-6 py-4 flex items-start space-x-4">
              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? "fill-current" : ""
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-600">
                  ({review.reviewsCount} Reviews)
                </span>
              </div>
              {/* Feedback */}
              <div className="text-sm text-slate-700">
                {review.feedback}
              </div>
              {/* Actions */}
              <div className="flex items-center space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-full">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-full">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
        </div>
      </div>    
    </div>
  );
}
  
export default StudentReviews;