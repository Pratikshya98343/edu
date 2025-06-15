"use client";
import React from "react";
import {
  LayoutDashboard,
  User,
  BookOpen,
  Heart,
  Star,
  Clock,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname for client-side active link highlighting

const StudentLayout = ({ children }) => {
  const pathname = usePathname(); // Get current path

  // This profile data will likely come from an API in a real app,
  // but for now, keep it here or lift it to a context if shared widely.
  const profileData = {
    firstName: "Emily",
    lastName: "Hannah",
    username: "emily.hannah",
    email: "emily.hannah@example.com",
    phone: "+1-202-555-0174",
    occupation: "Application Developer",
    registrationDate: "February 25, 2025",
    bio: "I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.",
  };

  const navigationItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    { id: "profile", label: "My Profile", icon: User, href: "/profile" },
    {
      id: "courses",
      label: "Enrolled Courses",
      icon: BookOpen,
      href: "/courses",
    },
    { id: "wishlist", label: "Wishlist", icon: Heart, href: "/wishlist" },
    { id: "reviews", label: "Reviews", icon: Star, href: "/reviews" },
    {
      id: "order-history",
      label: "Order History",
      icon: Clock,
      href: "/order-history",
    },
  ];

  const userActions = [
    { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
    { id: "logout", label: "Logout", icon: LogOut, href: "/logout" }, // Logout would typically be an action, not a page
  ];

  // Function to determine if a link is active based on the current pathname
  const isActive = (href) => {
    // For the root dashboard, check if the current path is exactly '/dashboard' or the root '/' of the student group
    if (href === "/dashboard") {
      return pathname === "/dashboard" || pathname === "/";
    }
    // For other paths, check if the current path starts with the href
    return pathname.startsWith(href);
  };

  return (
    <div className="m-0 box-border font-sans bg-gradient-to-b from-purple-300 via-cyan-300 via-30% to-white to-50% min-h-screen p-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="px-30 py-40 pt-20 relative overflow-hidden mb-17"
          style={{
            backgroundImage: `url('/Image/student.png')`, // Path relative to public folder
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center relative z-15">
            <div className="flex items-center space-x-6 mb-16 lg:mb-0">
              <div className="w-25 h-25 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img
                  src="/Image/StudentIcon.png" // Path relative to public folder
                  alt="Emily's Profile"
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
                  const isCurrent = isActive(item.href); // Use the isActive function
                  return (
                    <Link href={item.href} key={item.id} passHref>
                      {" "}
                      {/* passHref is often useful with custom components */}
                      <button
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 border-r-4 ${
                          isCurrent
                            ? "bg-indigo-50 text-indigo-700 border-indigo-500 font-semibold"
                            : "text-slate-600 hover:bg-slate-100 border-transparent hover:text-slate-900"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </button>
                    </Link>
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
                      <Link href={item.href} key={item.id} passHref>
                        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                          <Icon className="w-5 h-5" />
                          <span>{item.label}</span>
                        </button>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content Area - this is where the specific page content will be rendered */}
          <div className="flex-1 p-8 bg-slate-50 rounded-r-xl">
            {children} {/* This is where your page content will be rendered */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
