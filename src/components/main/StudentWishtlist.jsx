"use client";
import React, { useState } from "react";
import {
  User,
  BookOpen,
  Heart,
  Award,
  Settings,
  LogOut,
  Star,
  Users,
  Clock,
  BarChart3,
  Zap,
  Code,
  Database,
  Layers,
  ArrowRight,
  FileText,
} from "lucide-react";

const Wishlist = () => {
  const [activeTab, setActiveTab] = useState("wishlist");

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
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

  const wishlistData = [
    {
      id: 1,
      title: "React Front To Back",
      instructor: "Brad Traversy",
      rating: 5,
      reviews: 100,
      lessons: 50,
      students: 100,
      price: "$60",
      originalPrice: "$84.99",
      discount: true,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "PHP Beginner Advanced",
      instructor: "John Smith",
      rating: 4.6,
      reviews: 21,
      lessons: 50,
      students: 100,
      price: "$80",
      originalPrice: "$100",
      discount: true,
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Angular Zero to Mastery",
      instructor: "Sarah Johnson",
      rating: 4.9,
      reviews: 102,
      lessons: 50,
      students: 100,
      price: "$40",
      originalPrice: "$90",
      discount: true,
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="m-0  box-border font-sans bg-gradient-to-b from-purple-300 via-cyan-300 to-white min-h-screen p-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="px-30 py-30 pt-20 relative overflow-hidden mb-17"
          style={{
            backgroundImage: `url('/Image/student.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center relative z-10">
            <div className="flex items-center space-x-6 mb-6 lg:mb-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-2xl border-4 border-white shadow-lg">
                EH
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  EMILY HANNAH
                </h1>
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
                {sidebarItems.map((item) => {
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
                <div className="text-slate-400 text-xs font-semibold mb-4 tracking-wider">
                  USER
                </div>
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
          <div className="flex-1 p-8 bg-slate-50 rounded-r-xl">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200">
              <div className="px-6 py-4 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800">Wishlist</h2>
              </div>
              <div className="overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistData.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(course.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">
                            ({course.reviews} Reviews)
                          </span>
                        </div>
                        <h3 className="font-bold text-lg text-gray-800 mb-2">
                          {course.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-600 mb-4">
                          <Users className="w-4 h-4 mr-1" />
                          <span>
                            {course.lessons} Lessons · {course.students}{" "}
                            Students
                          </span>
                        </div>
                        <div className="flex items-center mb-4">
                          <span className="text-lg font-medium text-gray-800">
                            ${course.price}
                          </span>
                          {course.discount && (
                            <span className="ml-2 line-through text-gray-500">
                              ${course.originalPrice}
                            </span>
                          )}
                        </div>
                        <button className="w-full bg-blue-50 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-100 transition-colors">
                          Learn More
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

export default Wishlist;
