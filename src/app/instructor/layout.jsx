// src/app/instructor/layout.js
"use client"; // This component uses client-side state (useState), so mark it as a client component.

import React, { useState } from "react";
import { Star } from "lucide-react";
import {
  LayoutDashboard,
  User,
  BookOpen,
  MessageSquare,
  FileText,
  List,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link"; // Use Next.js Link for client-side navigation
import { usePathname } from "next/navigation"; // Hook to get current path

const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/instructor",
  },
  {
    id: "profile",
    label: "My Profile",
    icon: User,
    href: "/instructor/profile",
  },
  {
    id: "my-courses",
    label: "My Courses",
    icon: BookOpen,
    href: "/instructor/my-courses",
  },
  {
    id: "quiz-attempts",
    label: "Quiz Attempts",
    icon: FileText,
    href: "/instructor/quiz-attempts",
  },
  {
    id: "assignments",
    label: "Assignments",
    icon: List,
    href: "/instructor/assignments",
  },
];

const userActions = [
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/instructor/settings",
  },
  { id: "logout", label: "Logout", icon: LogOut, href: "/logout" }, // Adjust /logout path as needed
];

export default function InstructorLayout({ children }) {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="m-0 box-border font-sans bg-gradient-to-b from-purple-300 via-cyan-300 via-30% to-white to-50% min-h-screen p-5">
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
                <p className="text-sm text-white/80 mb-1">
                  BOOTCAMP INSTRUCTOR
                </p>
                <h1 className="text-4xl font-bold text-white mb-2">
                  LEARN WITH JOHN
                </h1>
                <div className="flex items-center space-x-6 text-white text-sm">
                  <span className="px-3 py-1 bg-white/20 rounded-full">
                    CODING - TRAVEL - LIFESTYLE
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-[300px] mt-10">
          {/* Sidebar */}
          <div className="w-80 bg-slate-50 border-r border-slate-400 rounded-l-2xl">
            <div className="p-6">
              <div className="text-slate-500 text-sm mb-6">WELCOME, Nisha!</div>
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  // Determine if the current link is active
                  const isActive =
                    item.href === pathname ||
                    (item.id === "dashboard" && pathname === "/instructor");
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 border-r-4 ${
                        isActive
                          ? "bg-indigo-50 text-indigo-700 border-indigo-500 font-semibold"
                          : "text-slate-600 hover:bg-slate-100 border-transparent hover:text-slate-900"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-10 pt-6 border-t border-slate-200">
                <nav className="space-y-2">
                  {userActions.map((item) => {
                    const Icon = item.icon;
                    const isActive = item.href === pathname;
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                          isActive
                            ? "bg-indigo-50 text-indigo-700 border-indigo-500 font-semibold"
                            : "text-slate-600 hover:bg-slate-100 border-transparent hover:text-slate-900"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
          {/* Children will be rendered here (the specific page for the route) */}
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
