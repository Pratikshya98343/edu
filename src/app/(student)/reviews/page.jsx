"use client";
import React from "react";
import { Star, Edit3, Trash2 } from "lucide-react";

const StudentReviewsPage = () => {
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

  return (
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
};

export default StudentReviewsPage;
