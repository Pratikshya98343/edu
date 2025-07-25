"use client";
import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  User,
  BookOpen,
  List,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

const InstructorLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { logout, user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Instructor",
    lastName: "",
    username: "john.instructor",
    email: "john.smith@example.com",
    phone: "+1-555-123-4567",
    title: "Senior Instructor",
    bio: "Passionate educator with 10+ years of experience in web development and programming instruction.",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        try {
          const response = await fetch('/api/instructor/profile');
          if (response.ok) {
            const data = await response.json();
            setProfileData({
              firstName: data.firstName || "Instructor",
              lastName: data.lastName || "",
              username: data.username || "john.instructor",
              email: data.email || "john.smith@example.com",
              phone: data.phone || "+1-555-123-4567",
              title: data.title || "Senior Instructor",
              bio: data.bio || "Passionate educator with 10+ years of experience in web development and programming instruction.",
            });
          }
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      }
    };
    fetchProfileData();
  }, [user]);

  const navigationItems = [
    { id: "dashboard",    label: "Dashboard",   icon: LayoutDashboard, href: "/instructor/dashboard" },
    { id: "profile",      label: "My Profile",  icon: User,            href: "/instructor/profile" },
    { id: "my-courses",   label: "My Courses",  icon: BookOpen,        href: "/instructor/my-courses" },
    { id: "assignments",  label: "Assignments", icon: List,            href: "/instructor/assignments" },
    { id: "notifications",label: "Notifications",icon: Bell,            href: "/instructor/notifications" },
  ];

  // logout removed from here
  const userActions = [
    { id: "settings", label: "Settings", icon: Settings, href: "/instructor/settings" },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      closeSidebar();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const isActive = (href) => {
    if (href === "/instructor/dashboard") {
      return pathname === "/instructor/dashboard" || pathname === "/instructor";
    }
    return pathname.startsWith(href);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar  = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-300 via-cyan-300 via-30% to-white to-50%">
      
      {/* ——— New Header with Logo + Logout ——— */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">EduVerse</span>
          </Link>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* ——— Existing Instructor “Profile Card” Section ——— */}
      <div className="relative z-30">
        <div className="max-w-7xl mx-auto p-2 sm:p-4 lg:p-5">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-4 sm:mb-6 lg:mb-8">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl flex-shrink-0">
                {profileData.firstName.charAt(0)}{profileData.lastName.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">{profileData.title}</div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
                  {profileData.firstName}{profileData.lastName ? ` ${profileData.lastName}` : ''}
                </h1>
                <div className="text-sm text-gray-600 mt-1">Instructor Dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ——— Mobile Menu Button ——— */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-[60] bg-white p-2 rounded-lg shadow-lg border border-slate-200"
      >
        {isSidebarOpen ? <X className="w-6 h-6 text-slate-600" /> : <Menu className="w-6 h-6 text-slate-600" />}
      </button>

      {/* ——— Main Layout: Sidebar + Content ——— */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-5">
        <div className="flex flex-col lg:flex-row min-h-[600px] relative">

          {/* Sidebar Overlay */}
          {isSidebarOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[45]"
              onClick={closeSidebar}
            />
          )}

          {/* Sidebar */}
          <div
            className={`
              fixed lg:sticky lg:top-0 top-0 left-0
              h-screen lg:h-screen
              w-80 max-w-[85vw] lg:w-80 lg:max-w-none
              bg-white rounded-r-xl lg:rounded-l-xl lg:rounded-r-none
              border-r lg:border border-slate-200 shadow-lg lg:shadow-sm
              transform transition-transform duration-300 ease-in-out z-[50] lg:z-auto
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
          >
            <div className="p-4 sm:p-6 h-full overflow-y-auto">
              
              <div className="text-slate-500 text-sm mb-6 mt-12 lg:mt-0">
                WELCOME, {profileData.firstName}!
              </div>

              <nav className="space-y-2">
                {navigationItems.map(item => {
                  const Icon = item.icon;
                  const current = isActive(item.href);
                  return (
                    <Link href={item.href} key={item.id} passHref>
                      <button
                        onClick={closeSidebar}
                        className={`
                          w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3
                          rounded-lg text-left transition-all duration-200 border-r-4 text-sm sm:text-base
                          ${current
                            ? "bg-indigo-50 text-indigo-700 border-indigo-500 font-semibold"
                            : "text-slate-600 hover:bg-slate-100 border-transparent hover:text-slate-900"
                          }
                        `}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </button>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 sm:mt-10 pt-6 border-t border-slate-200">
                <div className="text-slate-400 text-xs font-semibold mb-4 tracking-wider">
                  INSTRUCTOR
                </div>
                <nav className="space-y-2">
                  {userActions.map(item => {
                    const Icon = item.icon;
                    return (
                      <Link href={item.href} key={item.id} passHref>
                        <button
                          onClick={closeSidebar}
                          className="w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-left transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 text-sm sm:text-base"
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          <span className="truncate">{item.label}</span>
                        </button>
                      </Link>
                    );
                  })}
                </nav>
              </div>

            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-slate-50 rounded-xl lg:rounded-l-none lg:rounded-r-xl min-h-[600px]">
            {children}
          </div>

        </div>
      </div>
    </div>
  );
};

export default InstructorLayout;
