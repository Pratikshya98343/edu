"use client";
import React, { useState, useEffect } from "react";
import {
  Bell,
  BellRing,
  Check,
  X,
  Clock,
  BookOpen,
  ShoppingCart,
  Star,
  Heart,
  Settings,
  Trash2,
  Filter,
  Search,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Icon mapping for notification types
  const getNotificationIcon = (type) => {
    switch (type) {
      case "course":   return BookOpen;
      case "order":    return ShoppingCart;
      case "review":   return Star;
      case "wishlist": return Heart;
      case "system":   return Settings;
      default:         return Bell;
    }
  };

  // Color mapping for notification types
  const getNotificationColor = (type) => {
    switch (type) {
      case "course":   return "blue";
      case "order":    return "green";
      case "review":   return "yellow";
      case "wishlist": return "red";
      case "system":   return "gray";
      default:         return "blue";
    }
  };

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/student/notifications", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to fetch notifications");
      const data = await res.json();
      const processed = (data.notifications || []).map((n) => ({
        ...n,
        icon: getNotificationIcon(n.type),
        color: getNotificationColor(n.type),
      }));
      setNotifications(processed);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load notifications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const formatTimeAgo = (ts) => {
    const now = new Date(),
          then = new Date(ts),
          diffMin = Math.floor((now - then) / (1000 * 60));
    if (diffMin < 1) return "Just now";
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24) return `${diffH}h ago`;
    return `${Math.floor(diffH / 24)}d ago`;
  };

  const markAsRead = async (id) => {
    try {
      const res = await fetch(`/api/student/notifications/${id}/read`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (res.ok) {
        setNotifications((prev) =>
          prev.map((n) =>
            n.id === id ? { ...n, isRead: true } : n
          )
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const markAsUnread = async (id) => {
    try {
      const res = await fetch(`/api/student/notifications/${id}/unread`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (res.ok) {
        setNotifications((prev) =>
          prev.map((n) =>
            n.id === id ? { ...n, isRead: false } : n
          )
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNotification = async (id) => {
    try {
      const res = await fetch(`/api/student/notifications/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (res.ok) {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const markAllAsRead = async () => {
    try {
      const res = await fetch("/api/student/notifications/mark-all-read", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (res.ok) {
        setNotifications((prev) =>
          prev.map((n) => ({ ...n, isRead: true }))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const clearAllNotifications = async () => {
    try {
      const res = await fetch("/api/student/notifications/clear-all", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (res.ok) setNotifications([]);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredNotifications = notifications.filter((n) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "unread" && !n.isRead) ||
      (filter === "read" && n.isRead);
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      n.title.toLowerCase().includes(q) ||
      n.message.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const NotificationItem = ({ notification }) => {
    const Icon = notification.icon;
    const colorClasses = {
      blue:   "bg-blue-100 text-blue-600",
      green:  "bg-green-100 text-green-600",
      yellow: "bg-yellow-100 text-yellow-600",
      red:    "bg-red-100 text-red-600",
      gray:   "bg-gray-100 text-gray-700",
      purple: "bg-purple-100 text-purple-600",
    };

    return (
      <div
        className={`p-4 border border-slate-300 rounded-lg transition-all duration-200 hover:shadow-md ${
          notification.isRead ? "bg-white" : "bg-blue-50 border-blue-200"
        }`}
      >
        <div className="flex items-start space-x-4">
          <div className={`p-2 rounded-lg ${colorClasses[notification.color]}`}>
            <Icon className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3
                  className={`text-sm font-semibold ${
                    notification.isRead ? "text-slate-800" : "text-slate-900"
                  }`}
                >
                  {notification.title}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    notification.isRead ? "text-slate-700" : "text-slate-800"
                  }`}
                >
                  {notification.message}
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-xs text-slate-700 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {formatTimeAgo(notification.timestamp)}
                  </span>
                  {!notification.isRead && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      New
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() =>
                    notification.isRead
                      ? markAsUnread(notification.id)
                      : markAsRead(notification.id)
                  }
                  className="p-1 text-slate-700 hover:text-blue-600 transition-colors"
                  title={
                    notification.isRead
                      ? "Mark as unread"
                      : "Mark as read"
                  }
                >
                  <Check className="w-4 h-4" />
                </button>

                <button
                  onClick={() => deleteNotification(notification.id)}
                  className="p-1 text-slate-700 hover:text-red-600 transition-colors"
                  title="Delete notification"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800">Notifications</h1>
        </div>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-slate-800">Loading notifications...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center">
            <BellRing className="w-6 h-6 mr-2" />
            Notifications
            {unreadCount > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            )}
          </h1>
          <p className="text-slate-800 mt-1">
            Stay updated with your latest activities
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={fetchNotifications}
            disabled={loading}
            className="px-4 py-2 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <RefreshCw
              className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
            />
            <span>Refresh</span>
          </button>
          <button
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
            className="px-4 py-2 text-sm bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Mark All Read
          </button>
          <button
            onClick={clearAllNotifications}
            disabled={notifications.length === 0}
            className="px-4 py-2 text-sm bg-red-800 text-white rounded-lg hover:bg-red-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-800">{error}</span>
          </div>
          <button
            onClick={fetchNotifications}
            className="mt-3 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Search & Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1 sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-4 h-4" />
            <input
              type="text"
              placeholder="Search notifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-gray-700 text-sm"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-800" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 border border-gray-400 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-gray-700 text-sm bg-white"
            >
              <option value="all">All Notifications</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      {!loading && !error && (
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <div className="text-center py-12">
              <Bell className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-800 mb-2">
                {notifications.length === 0
                  ? "No notifications yet"
                  : "No notifications found"}
              </h3>
              <p className="text-slate-700">
                {notifications.length === 0
                  ? "You'll see notifications here when you have new activities."
                  : "Try adjusting your search or filter criteria."}
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
