"use client";
import React from "react";
import { Star, Users } from "lucide-react";

const StudentWishlistPage = () => {
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

  return (
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
};

export default StudentWishlistPage;
