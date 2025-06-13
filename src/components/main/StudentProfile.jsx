"use client";
import React, { useState } from "react";
import {
  LayoutDashboard,
  Trash2,
  Code,
  Database,
  Layers,
  User,
  Users,
  BookOpen,
  Heart,
  Star,
  FileText,
  Clock,
  Settings,
  LogOut,
  Bell,
  ArrowRight,
  Camera,
  Save,
  Edit3,
} from "lucide-react";

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Emily",
    lastName: "Hannah",
    username: "emily.hannah",
    email: "emily.hannah@example.com",
    phone: "+1-202-555-0174",
    occupation: "Application Developer",
    registrationDate: "February 25, 2025",
    bio: "I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.",
  });

  const orderData = [
     { id: '#5478', course: 'App Development', date: 'January 27, 2022', price: '$100.99', status: 'completed' },
    { id: '#4585', course: 'Graphic', date: 'May 27, 2022', price: '$200.99', status: 'processing' },
    { id: '#6656', course: 'Graphic', date: 'March 27, 2022', price: '$200.99', status: 'completed' },
    { id: '#2045', course: 'Application', date: 'March 27, 2022', price: '$200.99', status: 'cancelled' },
    { id: '#5478', course: 'App Development', date: 'January 27, 2022', price: '$100.99', status: 'completed' },
    { id: '#4585', course: 'Graphic', date: 'May 27, 2022', price: '$200.99', status: 'processing' },
    { id: '#6656', course: 'Graphic', date: 'March 27, 2022', price: '$200.99', status: 'completed' },
    { id: '#2045', course: 'Application', date: 'March 27, 2022', price: '$200.99', status: 'cancelled' },
    { id: '#5478', course: 'App Development', date: 'January 27, 2022', price: '$100.99', status: 'completed' },
    { id: '#4585', course: 'Graphic', date: 'May 27, 2022', price: '$200.99', status: 'processing' },
  ];

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "profile", label: "My Profile", icon: User },
    { id: "courses", label: "Enrolled Courses", icon: BookOpen },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "reviews", label: "Reviews", icon: Star },
    { id: "order-history", label: "Order History", icon: Clock },
  ];

  const userActions = [
    { id: "settings", label: "Settings", icon: Settings },
    { id: "logout", label: "Logout", icon: LogOut },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleProfileUpdate = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically save to your backend
    console.log("Profile saved:", profileData);
  };
  const renderDashboard = () => (
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

  const renderReview = () => (
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
  );

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

  const renderCourses = () => (
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
              onClick={() => {
                /* Add filtering logic here if needed */
              }}
              // FIXED: Used backticks for template literal
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "courses" // Example active state logic
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
                    // FIXED: Used backticks for template literal
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
                          // FIXED: Used backticks for template literal
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
                        // FIXED: Used backticks for template literal
                        className={`h-2 rounded-full bg-gradient-to-r ${course.color} transition-all duration-300`}
                        // FIXED: Corrected style object syntax
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

  const renderProfileContent = () => (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="px-6 py-4 border-b border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800">My Profile</h2>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Registration Date
            </label>
            <p className="text-slate-800">
              {profileData.registrationDate} 8:01 am
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              First Name
            </label>
            <p className="text-slate-800">John</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Last Name
            </label>
            <p className="text-slate-800">Doe</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Username
            </label>
            <p className="text-slate-800">instructor</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Email
            </label>
            <p className="text-slate-800">example@gmail.com</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Phone Number
            </label>
            <p className="text-slate-800">+1-202-555-0174</p>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Skill/Occupation
            </label>
            <p className="text-slate-800">Application Developer</p>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Biography
            </label>
            <p className="text-slate-700 leading-relaxed">
              I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I
              have serious passion for UI effects, animations and creating
              intuitive, dynamic user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrderHistory = () => (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200">
        <h2 className="text-3xl font-bold text-slate-800">Order History</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Course Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orderData.map((order, index) => (
              <tr
                key={`${order.id}-${index}`}
                className="hover:bg-slate-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  {order.course}
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  {order.date}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-emerald-600">
                  {order.price}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

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

  const renderWishlist = () => (
    <div className="flex-1 p-3 bg-slate-50 rounded-r-xl">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 w-200 h-150">
        <div className="px-5 py-4 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800">Wishlist</h2>
        </div>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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
                      {course.lessons} Lessons · {course.students} Students
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
  );

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return renderProfileContent();
      case "order-history":
        return renderOrderHistory();
      case "wishlist":
        return renderWishlist();
      case "dashboard":
        return renderDashboard();
      case "courses":
        return renderCourses();
      case "reviews":
        return renderReview();
      default:
        return (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {navigationItems.find((item) => item.id === activeTab)?.label}
            </h2>
            <p className="text-slate-600">This section is coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="m-0  box-border font-sans bg-gradient-to-b from-purple-300 via-cyan-300  via-30% to-white to-50% min-h-screen p-5">
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
            <div className="flex items-center space-x-6 mb-10 lg:mb-0">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <img 
            src="Image/StudentIcon.png"
            alt="John's Profile"
            className="w-full h-full object-cover"
          />
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

            <div className="flex flex-col items-center space-y-4 mt-16">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 mb-10 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg">
                <span>Create Link New Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex min-h-[600px]">
          {/* Sidebar */}
          <div className="w-80 bg-white rounded-l-xl border-r border-slate-200 shadow-sm">
            <div className="p-6">
              <div className="text-slate-500 text-sm mb-6">
                WELCOME, {profileData.firstName}!
              </div>

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
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
