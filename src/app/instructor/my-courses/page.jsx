// src/app/instructor/my-courses/page.js
"use client";

import React from 'react';
import CourseCard from '../../../components/instructor/CourseCard'; // Adjust path if CourseCard is moved

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

export default function InstructorMyCoursesPage() {
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
}