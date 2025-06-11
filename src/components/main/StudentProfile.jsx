"use client";
import React, { useState } from 'react';
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
  Bell,
  ArrowRight,
  Camera,
  Save,
  Edit3
} from 'lucide-react';

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Emily',
    lastName: 'Hannah',
    username: 'emily.hannah',
    email: 'emily.hannah@example.com',
    phone: '+1-202-555-0174',
    occupation: 'Application Developer',
    registrationDate: 'February 25, 2025',
    bio: "I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences."
  });

  const orderData = [
    { id: '#5478', course: 'App Development', date: 'January 27, 2022', price: '$100.99', status: 'completed' },
    { id: '#4585', course: 'Graphic Design', date: 'May 27, 2022', price: '$200.99', status: 'processing' },
    { id: '#6656', course: 'UI/UX Design', date: 'March 27, 2022', price: '$200.99', status: 'completed' },
    { id: '#2045', course: 'Web Development', date: 'March 27, 2022', price: '$200.99', status: 'cancelled' },
    { id: '#5478', course: 'App Development', date: 'January 27, 2022', price: '$100.99', status: 'completed' },
    { id: '#4585', course: 'Graphic Design', date: 'May 27, 2022', price: '$200.99', status: 'processing' },
  ];

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'courses', label: 'Enrolled Courses', icon: BookOpen },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'quiz', label: 'My Quiz Attempts', icon: FileText },
    { id: 'order-history', label: 'Order History', icon: Clock },
  ];

  const userActions = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'logout', label: 'Logout', icon: LogOut },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleProfileUpdate = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically save to your backend
    console.log('Profile saved:', profileData);
  };

  const renderProfileContent = () => (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="px-6 py-4 border-b border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800">My Profile</h2>
      </div>
      
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">Registration Date</label>
            <p className="text-slate-800">{profileData.registrationDate} 8:01 am</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">First Name</label>
            <p className="text-slate-800">John</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">Last Name</label>
            <p className="text-slate-800">Doe</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">Username</label>
            <p className="text-slate-800">instructor</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">Email</label>
            <p className="text-slate-800">example@gmail.com</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">Phone Number</label>
            <p className="text-slate-800">+1-202-555-0174</p>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-600 mb-2">Skill/Occupation</label>
            <p className="text-slate-800">Application Developer</p>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-600 mb-2">Biography</label>
            <p className="text-slate-700 leading-relaxed">
              I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have 
              serious passion for UI effects, animations and creating intuitive, 
              dynamic user experiences.
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
              <tr key={`${order.id}-${index}`} className="hover:bg-slate-50 transition-colors duration-150">
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
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusStyle(order.status)}`}>
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

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfileContent();
      case 'order-history':
        return renderOrderHistory();
      default:
        return (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {navigationItems.find(item => item.id === activeTab)?.label}
            </h2>
            <p className="text-slate-600">This section is coming soon!</p>
          </div>
        );
    }
  };

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
                <div className="flex items-center space-x-6 mb-10 lg:mb-0">
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
    

        <div className="flex min-h-[600px]"> 
          {/* Sidebar */}
          <div className="w-80 bg-white rounded-l-xl border-r border-slate-200 shadow-sm">
            <div className="p-6">
              <div className="text-slate-500 text-sm mb-6">WELCOME, {profileData.firstName}!</div>
              
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 border-r-4 ${
                        activeTab === item.id
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
          <div className="flex-1 p-8 bg-slate-50 rounded-r-xl">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;