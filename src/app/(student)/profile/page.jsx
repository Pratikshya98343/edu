"use client";
import React, { useState } from "react";
import { Save, Edit3 } from "lucide-react"; // Make sure to import if used

const StudentProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Emily",
    lastName: "Hannah",
    username: "emily.hannah",
    email: "emily.hannah@example.com",
    phone: "+1-202-555-0174",
    occupation: "Application Developer",
    registrationDate: "February 25, 2025",
    bio: "I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.",
  });

  const handleProfileUpdate = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    console.log("Profile saved:", profileData);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="px-6 py-4 border-b border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800">My Profile</h2>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Registration Date
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.registrationDate}
                onChange={(e) => handleProfileUpdate('registrationDate', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-slate-800">
                {profileData.registrationDate} 8:01 am
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              First Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.firstName}
                onChange={(e) => handleProfileUpdate('firstName', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-slate-800">{profileData.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Last Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.lastName}
                onChange={(e) => handleProfileUpdate('lastName', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-slate-800">{profileData.lastName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Username
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.username}
                onChange={(e) => handleProfileUpdate('username', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-slate-800">{profileData.username}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => handleProfileUpdate('email', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-slate-800">{profileData.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Phone Number
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={profileData.phone}
                onChange={(e) => handleProfileUpdate('phone', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-slate-800">{profileData.phone}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Skill/Occupation
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.occupation}
                onChange={(e) => handleProfileUpdate('occupation', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-slate-800">{profileData.occupation}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Biography
            </label>
            {isEditing ? (
              <textarea
                value={profileData.bio}
                onChange={(e) => handleProfileUpdate('bio', e.target.value)}
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
            ) : (
              <p className="text-slate-700 leading-relaxed">
                {profileData.bio}
              </p>
            )}
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          {isEditing ? (
            <button
              onClick={handleSaveProfile}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center space-x-2"
            >
              <Save className="w-5 h-5" />
              <span>Save Changes</span>
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 flex items-center space-x-2"
            >
              <Edit3 className="w-5 h-5" />
              <span>Edit Profile</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;