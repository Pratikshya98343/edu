"use client";
import React, { useState } from "react";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Star,
  Clock,
  BookOpen,
  CreditCard,
  Lock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Angela Yu",
      rating: 4.8,
      reviews: 2847,
      price: 89.99,
      originalPrice: 199.99,
      duration: "65 hours",
      lessons: 120,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Jose Portilla",
      rating: 4.9,
      reviews: 1923,
      price: 79.99,
      originalPrice: 149.99,
      duration: "45 hours",
      lessons: 85,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
      category: "Data Science",
    },
  ]);

  const [isProcessing, setIsProcessing] = useState(false);

  const removeFromCart = (courseId) => {
    setCartItems(cartItems.filter(item => item.id !== courseId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal();
  };

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert("Order confirmed! Redirecting to courses...");
      // In real app, redirect to success page or courses
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="w-full p-3 sm:p-4 lg:p-6">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="text-center py-12 sm:py-16">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">
              Your cart is empty
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mb-6">
              Browse our courses and add some to your cart
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Browse Courses
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-3 sm:p-4 lg:p-6">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 sm:py-6 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 flex items-center space-x-2">
                <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />
                <span>Shopping Cart</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1">
                {cartItems.length} course{cartItems.length !== 1 ? 's' : ''} in your cart
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 p-4 sm:p-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full sm:w-32 h-32 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-slate-800 line-clamp-2">
                          {course.title}
                        </h3>
                        <button
                          onClick={() => removeFromCart(course.id)}
                          className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                          title="Remove from cart"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <p className="text-sm text-slate-600 mb-2">
                        by {course.instructor}
                      </p>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-1">
                          <div className="flex">
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
                          </div>
                          <span className="text-sm text-slate-600">
                            {course.rating} ({course.reviews})
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-slate-600 mb-3">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{course.lessons} lessons</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-slate-800">
                            ${course.price}
                          </span>
                          {course.originalPrice > course.price && (
                            <span className="text-sm line-through text-slate-500">
                              ${course.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 rounded-xl p-4 sm:p-6 sticky top-6">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Order Summary</h3>
              
              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                
                <div className="border-t border-slate-200 pt-3">
                  <div className="flex justify-between text-lg font-bold text-slate-800">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-blue-400 transition-colors flex items-center justify-center space-x-2"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Secure Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
