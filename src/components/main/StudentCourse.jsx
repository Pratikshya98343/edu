'use client'
import React, { useState } from 'react';
import { Search, Filter, Star, ChevronRight, Heart } from 'lucide-react';

const CoursePage = () => {
  const [activeView, setActiveView] = useState('Grid');
  const [searchTerm, setSearchTerm] = useState('');
  
  const courses = [
    {
      id: 1,
      title: "Complete Python Development: From Zero to Expert",
      instructor: "Dr. Sarah Johnson",
      rating: 5,
      reviews: 1247,
      price: 89,
      originalPrice: 149,
      students: "15.2k",
      duration: "42h 30m",
      lectures: 285,
      description: "Master Python programming through hands-on projects. Learn data science, web development, automation, and build real-world applications.",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
      category: "Programming",
      level: "All Levels"
    },
    {
      id: 2,
      title: "Modern Web Development Bootcamp",
      instructor: "Michael Chen",
      rating: 5,
      reviews: 892,
      price: 94,
      originalPrice: 179,
      students: "12.8k",
      duration: "38h 15m",
      lectures: 198,
      description: "Build responsive websites using HTML5, CSS3, JavaScript, React, and Node.js. Includes portfolio projects and deployment strategies.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
      category: "Web Development",
      level: "Beginner"
    },
    {
      id: 3,
      title: "Data Science & Machine Learning Masterclass",
      instructor: "Prof. Emily Rodriguez",
      rating: 4,
      reviews: 634,
      price: 119,
      originalPrice: 199,
      students: "8.9k",
      duration: "35h 45m",
      lectures: 167,
      description: "Comprehensive course covering statistics, Python, pandas, scikit-learn, and TensorFlow. Build predictive models and data visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: "Data Science",
      level: "Intermediate"
    },
    {
      id: 4,
      title: "Digital Marketing Strategy & Analytics",
      instructor: "James Wilson",
      rating: 5,
      reviews: 756,
      price: 79,
      originalPrice: 129,
      students: "11.3k",
      duration: "28h 20m",
      lectures: 142,
      description: "Learn SEO, social media marketing, Google Analytics, and conversion optimization. Create effective digital marketing campaigns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Marketing",
      level: "Beginner"
    },
    {
      id: 5,
      title: "UX/UI Design Fundamentals",
      instructor: "Lisa Thompson",
      rating: 5,
      reviews: 943,
      price: 99,
      originalPrice: 169,
      students: "9.7k",
      duration: "32h 10m",
      lectures: 189,
      description: "Master user experience design principles, wireframing, prototyping with Figma, and user research methodologies.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop",
      category: "Design",
      level: "All Levels"
    },
    {
      id: 6,
      title: "Cloud Computing with AWS",
      instructor: "David Kumar",
      rating: 4,
      reviews: 512,
      price: 109,
      originalPrice: 189,
      students: "6.4k",
      duration: "41h 30m",
      lectures: 224,
      description: "Learn Amazon Web Services from basics to advanced. Cover EC2, S3, Lambda, and prepare for AWS certification exams.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      category: "Cloud Computing",
      level: "Intermediate"
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Professional Courses
              </h1>
              <p className="text-lg text-gray-600">
                Advance your career with expert-led courses from industry professionals
              </p>
            </div>
            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 w-fit">
              <span className="text-sm">📊</span>
              <span>{courses.length} Courses Available</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1">
              <button
                onClick={() => setActiveView('Grid')}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  activeView === 'Grid'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setActiveView('List')}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  activeView === 'List'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                List View
              </button>
            </div>
            <span className="text-gray-500 text-sm">
              Showing {filteredCourses.length} of {courses.length} courses
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses, instructors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-80 pl-4 pr-10 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <button className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600 hidden sm:inline">Filter</span>
            </button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Rating and Reviews */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {renderStars(course.rating)}
                  </div>
                  <span className="text-sm text-gray-500">
                    {course.rating}.0 ({course.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                {/* Course Stats */}
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <span>📚</span>
                    <span>{course.lectures} lectures</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⏱️</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👥</span>
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Instructor */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">
                      {course.instructor.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {course.instructor}
                  </span>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">
                      ${course.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ${course.originalPrice}
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                      {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                  <button className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-700 transition-colors">
                    <span>Enroll</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CoursePage;