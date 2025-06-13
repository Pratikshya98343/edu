"use client";
import React, { useState } from 'react';
import {
  LayoutDashboard,
  User,
  BookOpen,
  Heart,
  Star,
  FileText,
  ShoppingCart,
  MessageSquare,
  HelpCircle,
  List,
  Settings,
  LogOut,
  ArrowRight,
} from 'lucide-react';

// CourseCard Component
const CourseCard = ({ title, image, discount, lessons, students, price, oldPrice, reviews }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-md font-bold text-sm">
          {discount}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center text-yellow-400">
            ★★★★★
          </div>
          <span className="text-sm text-black">{reviews}</span>
          <span className="text-xl text-purple-600">&#128275;</span>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-black">{title}</h3>
        <p className="text-sm text-black flex items-center gap-1 mb-2">
          &#128196; {lessons} | {students}
        </p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-black">{price}</span>
          <del className="text-gray-500">{oldPrice}</del>
        </div>
        <button className="text-blue-600 flex items-center gap-1 hover:underline">
          &#128398; Edit
        </button>
      </div>
    </div>
  );
};

// Main Dashboard Component
const InstructorDashboard = () => {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    userName: "instructor",
    phoneNumber: "+1-202-555-0174",
    skillOccupation: "Application Developer",
    displayName: "John Doe",
    bio: "I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations, and creating intuitive, dynamic user experiences.",
  });

  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", formData);
    alert("Profile Updated Successfully!");
  };

  // Navigation Items
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'courses', label: 'Enrolled Courses', icon: BookOpen },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'quiz', label: 'My Quiz Attempts', icon: HelpCircle },
    { id: 'order-history', label: 'Order History', icon: ShoppingCart },
  ];

  const instructorItems = [
    { id: 'my-courses', label: 'My Courses', icon: BookOpen },
    { id: 'announcements', label: 'Announcements', icon: MessageSquare },
    { id: 'quiz-attempts', label: 'Quiz Attempts', icon: FileText },
    { id: 'assignments', label: 'Assignments', icon: List },
  ];

  const userActions = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'logout', label: 'Logout', icon: LogOut },
  ];

  // Stats for dashboard
  const stats = [
    { icon: '📚', value: '30', color: 'text-blue-800', bg: 'from-blue-100 to-blue-200', iconBg: 'bg-blue-500' },
    { icon: '💻', value: '10', color: 'text-purple-700', bg: 'from-purple-100 to-purple-200', iconBg: 'bg-purple-500' },
    { icon: '🏆', value: '7', color: 'text-pink-600', bg: 'from-pink-100 to-pink-200', iconBg: 'bg-pink-500' },
    { icon: '👥', value: '160', color: 'text-red-600', bg: 'from-red-100 to-red-200', iconBg: 'bg-red-500' },
    { icon: '🎁', value: '20', color: 'text-orange-600', bg: 'from-orange-100 to-orange-200', iconBg: 'bg-orange-500' },
    { icon: '💰', value: '25000', color: 'text-yellow-600', bg: 'from-yellow-100 to-yellow-200', iconBg: 'bg-yellow-500' },
  ];

  // Sample course data
  const courses = [
    {
      title: "React Front To Back",
      image: "/Image/coursegirl.png", 
      discount: "-34%",
      lessons: "50 Lessons",
      students: "100 Students",
      price: "$60",
      oldPrice: "$84.99",
      reviews: "(100 Reviews)",
    },
    {
      title: "PHP Beginner Advanced",
      image: "/Image/education.png",
      discount: "-20%",
      lessons: "50 Lessons",
      students: "100 Students",
      price: "$80",
      oldPrice: "$100",
      reviews: "(21 Reviews)",
    },
    {
      title: "Angular Zero to Mastery",
      image: "/Image/web.png",
      discount: "-54%",
      lessons: "50 Lessons",
      students: "100 Students",
      price: "$40",
      oldPrice: "$90",
      reviews: "(102 Reviews)",
    },
  ];

  const renderProfileContent = () => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">My Profile</h2>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Registration Date</dt>
            <dd className="mt-1 text-sm text-gray-900">February 25, 2025 6:01 gm</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">First Name</dt>
            <dd className="mt-1 text-sm text-gray-900">John</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Last Name</dt>
            <dd className="mt-1 text-sm text-gray-900">Doe</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Username</dt>
            <dd className="mt-1 text-sm text-gray-900">instructor</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900">example@gmail.com</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
            <dd className="mt-1 text-sm text-gray-900">+1-202-555-0174</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Skill/Occupation</dt>
            <dd className="mt-1 text-sm text-gray-900">Application Developer</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Biography</dt>
            <dd className="mt-1 text-sm text-gray-900">
              I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations, and creating intuitive, dynamic user experiences.
            </dd>
          </div>
        </dl>
      </div>
    );
  };

  const renderSettingsPage = () => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Username & Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Skill/Occupation */}
          <div>
            <label htmlFor="skillOccupation" className="block text-sm font-medium text-gray-700 mb-1">Skill / Occupation</label>
            <input
              type="text"
              id="skillOccupation"
              name="skillOccupation"
              value={formData.skillOccupation}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Display Name */}
          <div>
            <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-1">Display Name Publicly As</label>
            <select
              id="displayName"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="John Doe">John Doe</option>
              <option value="JD">JD</option>
              <option value="Developer">Developer</option>
            </select>
          </div>

          {/* Bio */}
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea
              id="bio"
              name="bio"
              rows="4"
              value={formData.bio}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-semibold transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    );
  };

  const renderDashboard = () => {
    return (
      <div className="bg-white rounded-r-2xl p-9 shadow-xl">
        <h2 className="text-gray-700 text-2xl font-semibold mb-8">Dashboard</h2>
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.bg} rounded-2xl p-10 text-center shadow-xl transition-transform hover:-translate-y-1`}
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${stat.iconBg} text-white flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
              <div className={`text-5xl font-bold mb-3 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-500 text-sm font-medium">
                {index === 0 && 'Total Courses'}
                {index === 1 && 'Active Courses'}
                {index === 2 && 'Certificates'}
                {index === 3 && 'Students'}
                {index === 4 && 'Assignments'}
                {index === 5 && 'Revenue'}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCourseContent = () => {
    return (
      <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-md h-200 mb-2">
        <h2 className="text-2xl font-bold mb-4 text-black">My Courses</h2>
        <div className="flex gap-6 mb-6">
          <button className="px-4 py-2 border-b-2 border-blue-500 text-black font-medium">Publish</button>
          <button className="px-4 py-2 text-black font-medium hover:border-b-2 hover:border-gray-400">Pending</button>
          <button className="px-4 py-2 text-black font-medium hover:border-b-2 hover:border-gray-400">Draft</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeNav) {
      case 'dashboard':
        return renderDashboard();
      case 'profile':
        return renderProfileContent();
      case 'courses':
        return renderCourseContent();
      case 'settings':
        return renderSettingsPage();
      default:
        return (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {navigationItems.find((item) => item.id === activeNav)?.label}
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
            backgroundImage: `url('/Image/Instructor.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center relative z-10 p-8">
            <div className="flex items-center space-x-6 mb-6 lg:mb-0">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img
                  src="/Image/InstructorIcon.png"
                  alt="John's Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 mb-1">BOOTCAMP INSTRUCTOR</p>
                <h1 className="text-4xl font-bold text-white mb-2">LEARN WITH JOHN</h1>
                <div className="flex items-center space-x-6 text-white text-sm">
                  <span className="px-3 py-1 bg-white/20 rounded-full">CODING - TRAVEL - LIFESTYLE</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-10">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 mb-10 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg">
                <span>Create a New Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex min-h-[300px] mt-10">
          {/* Sidebar */}
          <div className="w-80 bg-slate-50 border-r border-slate-400 rounded-l-2xl">
            <div className="p-6">
              <div className="text-slate-500 text-sm mb-6">WELCOME, RAFI!</div>
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 border-r-4 ${
                        activeNav === item.id
                          ? 'bg-indigo-50 text-indigo-700 border-indigo-500 font-semibold'
                          : 'text-slate-600 hover:bg-slate-100 border-transparent hover:text-slate-900'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
              <div className="mt-10 pt-6 border-t border-slate-200">
                <div className="text-slate-400 text-xs font-semibold mb-4 tracking-wider">INSTRUCTOR</div>
                <nav className="space-y-2">
                  {instructorItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 border-r-4 ${
                          activeNav === item.id
                            ? 'bg-indigo-50 text-indigo-700 border-indigo-500 font-semibold'
                            : 'text-slate-600 hover:bg-slate-100 border-transparent hover:text-slate-900'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
              <div className="mt-10 pt-6 border-t border-slate-200">
                <div className="text-slate-400 text-xs font-semibold mb-4 tracking-wider">USER</div>
                <nav className="space-y-2">
                  {userActions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
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
          {/* Dashboard Content */}
          <div className="flex-1">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;