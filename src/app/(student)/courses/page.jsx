"use client";
import React from "react";
import { Code, Database, Layers, Users, Star, BookOpen, Play, ChevronRight, Clock } from "lucide-react";
import Link from "next/link";

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
      completedLessons: 19,
      duration: "12h 30m",
      lastAccessed: "2 days ago",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
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
      completedLessons: 34,
      duration: "18h 45m",
      lastAccessed: "1 day ago",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
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
      completedLessons: 61,
      duration: "25h 15m",
      lastAccessed: "Today",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      icon: Layers,
      color: "from-green-500 to-teal-600",
    },
  ];

  const tabs = [
    { id: "enrolled", label: "Enrolled Courses" },
    { id: "active", label: "Active Courses" },
    { id: "completed", label: "Completed Courses" },
  ];

  const [activeCourseTab, setActiveCourseTab] = React.useState("enrolled");

  return (
    <div className="w-full p-3 sm:p-4 lg:p-6 xl:p-7">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-none">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
          My Courses
        </h2>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-1 mb-6 sm:mb-8 bg-gray-100 p-1 rounded-xl w-full sm:w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCourseTab(tab.id)}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                activeCourseTab === tab.id
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {courses.map((course) => {
            const CourseIcon = course.icon;
            return (
              <div
                key={course.id}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative">
                  <div
                    className={`h-36 sm:h-44 lg:h-48 bg-gradient-to-br ${course.color} p-4 sm:p-6 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 text-center text-white">
                      <div className="bg-white/20 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 backdrop-blur-sm">
                        <CourseIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                      </div>
                      <div className="text-xs sm:text-sm font-medium bg-white/20 px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">
                        {course.lessons} Lessons
                      </div>
                    </div>
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            i < Math.floor(course.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs sm:text-sm text-gray-600 ml-1 sm:ml-2">
                        ({course.reviews})
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg lg:text-xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span>{course.students} Students</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                      <span className="text-gray-600 font-medium">
                        {course.completedLessons}/{course.lessons} Lessons
                      </span>
                      <span className="font-bold text-gray-800">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                      <div
                        className={`h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${course.color} transition-all duration-300`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Last accessed: {course.lastAccessed}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Link href={`/courses/${course.id}/lessons`} className="block">
                      <button className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base flex items-center justify-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>Continue Learning</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </Link>
                    
                    <Link href={`/courses/${course.id}/overview`} className="block">
                      <button className="w-full bg-gray-50 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm border border-gray-200">
                        Course Details
                      </button>
                    </Link>
                    
                    {course.progress === 100 && (
                      <button className="w-full bg-green-50 text-green-600 py-2.5 rounded-lg font-medium hover:bg-green-100 transition-colors text-sm border border-green-200">
                        Certificate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {courses.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              No courses found
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Start learning by enrolling in your first course!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCoursesPage;
