"use client";
import React from "react";
import { Code, Database, Layers, Users, Star, BookOpen } from "lucide-react";

const StudentCoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "React Front To Back",
      instructor: "Brad Traversy",
      rating: 4.8,
      reviews: 102,
      students: 100,
      lessons: 45,
      progress: 42,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      icon: Code,
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "PHP Beginner Advanced",
      instructor: "John Smith",
      rating: 4.6,
      reviews: 21,
      students: 100,
      lessons: 52,
      progress: 65,
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
      icon: Database,
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      title: "Angular Zero to Mastery",
      instructor: "Sarah Johnson",
      rating: 4.9,
      reviews: 102,
      students: 100,
      lessons: 68,
      progress: 90,
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      icon: Layers,
      color: "from-green-500 to-teal-600",
    },
  ];

  const tabs = [
    { id: "enrolled", label: "Enrolled Courses" },
    { id: "active", label: "Active Courses" },
    { id: "completed", label: "Completed Courses" },
  ];

  // You might want to manage the active tab for filtering within this component's state
  const [activeCourseTab, setActiveCourseTab] = React.useState("enrolled");

  return (
    <div className="flex-1 p-7 ">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-230">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Enrolled Courses
        </h2>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-xl w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCourseTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeCourseTab === tab.id // Use local state for these tabs
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const CourseIcon = course.icon;
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative">
                  <div
                    className={`h-48 bg-gradient-to-br ${course.color} p-6 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 text-center text-white">
                      <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <CourseIcon className="w-8 h-8" />
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
                      <span className="font-medium text-gray-800">
                        {course.progress}%
                      </span>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentCoursesPage;
