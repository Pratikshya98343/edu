// src/components/instructor/CourseCard.jsx
"use client"; // This component might use client-side features in the future, good to mark it.

import React from 'react';
import { Star } from 'lucide-react'; // Assuming Star icon is used for ratings

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
          {/* Star ratings - assuming you want to dynamically render them or keep static */}
          <div className="flex items-center text-yellow-400">
            {/* You could make this dynamic based on a 'rating' prop */}
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
          <span className="text-sm text-black">{reviews}</span>
          <span className="text-xl text-purple-600">&#128275;</span> {/* Bookmark icon */}
        </div>
        <h3 className="font-semibold text-lg mb-2 text-black">{title}</h3>
        <p className="text-sm text-black flex items-center gap-1 mb-2">
          &#128196; {lessons} | {students} {/* Book and Graduation Cap emoji */}
        </p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-black">{price}</span>
          <del className="text-gray-500">{oldPrice}</del>
        </div>
        <button className="text-blue-600 flex items-center gap-1 hover:underline">
          &#128398; Edit {/* Pencil emoji */}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;