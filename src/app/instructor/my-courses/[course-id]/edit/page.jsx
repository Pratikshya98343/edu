"use client";
import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Save,
  ArrowLeft,
  Upload,
  X,
  Plus,
  Trash2,
  BookOpen,
  Video,
  FileText,
} from 'lucide-react';
import Link from 'next/link';

const EditCoursePage = () => {
  const params = useParams();
  const router = useRouter();

  const [courseData, setCourseData] = useState({
    title: "React Front To Back",
    description: "Complete React development course from basics to advanced concepts",
    category: "Web Development",
    level: "Intermediate",
    price: 60,
    originalPrice: 84.99,
    thumbnail: "",
    requirements: ["Basic JavaScript knowledge", "HTML/CSS fundamentals"],
    objectives: ["Master React fundamentals", "Build real-world projects", "Understand modern React patterns"],
    chapters: [
      {
        id: 1,
        title: "React Fundamentals",
        lessons: [
          { id: 1, title: "What is React?", duration: "19:45", videoUrl: "" },
          { id: 2, title: "Setting Up Environment", duration: "25:30", videoUrl: "" }
        ]
      }
    ]
  });

  const [activeTab, setActiveTab] = useState('basic');
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (field, value) => {
    setCourseData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setCourseData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field, defaultValue = "") => {
    setCourseData(prev => ({
      ...prev,
      [field]: [...prev[field], defaultValue]
    }));
  };

  const removeArrayItem = (field, index) => {
    setCourseData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  // Handler for chapter changes
  const handleChapterChange = (chapterIndex, field, value) => {
    setCourseData(prev => ({
      ...prev,
      chapters: prev.chapters.map((chapter, index) => 
        index === chapterIndex ? { ...chapter, [field]: value } : chapter
      )
    }));
  };

  // Handler for lesson changes
  const handleLessonChange = (chapterIndex, lessonIndex, field, value) => {
    setCourseData(prev => ({
      ...prev,
      chapters: prev.chapters.map((chapter, chIndex) => 
        chIndex === chapterIndex 
          ? {
              ...chapter,
              lessons: chapter.lessons.map((lesson, lIndex) =>
                lIndex === lessonIndex ? { ...lesson, [field]: value } : lesson
              )
            }
          : chapter
      )
    }));
  };

  // Handler for adding new chapters
  const addChapter = () => {
    const newChapter = {
      id: Date.now(),
      title: "New Chapter",
      lessons: []
    };
    setCourseData(prev => ({
      ...prev,
      chapters: [...prev.chapters, newChapter]
    }));
  };

  // Handler for adding new lessons
  const addLesson = (chapterIndex) => {
    const newLesson = {
      id: Date.now(),
      title: "New Lesson",
      duration: "00:00",
      videoUrl: ""
    };
    setCourseData(prev => ({
      ...prev,
      chapters: prev.chapters.map((chapter, index) =>
        index === chapterIndex
          ? { ...chapter, lessons: [...chapter.lessons, newLesson] }
          : chapter
      )
    }));
  };

  // Handler for removing lessons
  const removeLesson = (chapterIndex, lessonIndex) => {
    setCourseData(prev => ({
      ...prev,
      chapters: prev.chapters.map((chapter, index) =>
        index === chapterIndex
          ? { ...chapter, lessons: chapter.lessons.filter((_, lIndex) => lIndex !== lessonIndex) }
          : chapter
      )
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      console.log('Saving course:', courseData);
      setTimeout(() => {
        setIsSaving(false);
        alert('Course updated successfully!');
      }, 1000);
    } catch (error) {
      setIsSaving(false);
      alert('Error saving course');
    }
  };

  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: BookOpen },
    { id: 'curriculum', label: 'Curriculum', icon: Video },
  ];

  return (
    <div className="w-full p-3 sm:p-4 lg:p-6">
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        
        <div className="px-4 sm:px-6 py-4 sm:py-6 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Link href="/instructor/my-courses">
                <button className="flex items-center space-x-2 text-gray-900 hover:text-gray-800">
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Courses</span>
                </button>
              </Link>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                  Edit Course
                </h2>
              </div>
            </div>
            
            <div className="flex items-center">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
              >
                {isSaving ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <Save className="w-4 h-4" />
                )}
                <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-4 sm:px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-800 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 sm:p-6">
          {activeTab === 'basic' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Course Title
                  </label>
                  <input
                    type="text"
                    value={courseData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-900"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Category
                  </label>
                  <select
                    value={courseData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Design">Design</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Description
                </label>
                <textarea
                  value={courseData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-900"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Level
                  </label>
                  <select
                    value={courseData.level}
                    onChange={(e) => handleInputChange('level', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    value={courseData.price}
                    onChange={(e) => handleInputChange('price', parseFloat(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-900"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Original Price ($)
                  </label>
                  <input
                    type="number"
                    value={courseData.originalPrice}
                    onChange={(e) => handleInputChange('originalPrice', parseFloat(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Course Thumbnail
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-700 mx-auto mb-2" />
                  <p className="text-sm text-gray-900">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-600">PNG, JPG up to 2MB</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Requirements
                </label>
                <div className="space-y-2">
                  {courseData.requirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={req}
                        onChange={(e) => handleArrayChange('requirements', index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-900"
                        placeholder="Enter requirement"
                      />
                      <button
                        onClick={() => removeArrayItem('requirements', index)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => addArrayItem('requirements')}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Requirement</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Course Curriculum</h3>
                <button 
                  onClick={addChapter}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Chapter</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {courseData.chapters.map((chapter, chapterIndex) => (
                  <div key={chapter.id} className="border border-gray-200 rounded-lg">
                    <div className="p-4 bg-gray-50 border-b border-gray-200">
                      <input
                        type="text"
                        value={chapter.title}
                        onChange={(e) => handleChapterChange(chapterIndex, 'title', e.target.value)}
                        className="w-full font-medium text-gray-900 bg-transparent border-none focus:outline-none placeholder-gray-500"
                        placeholder="Chapter title"
                      />
                    </div>
                    <div className="p-4">
                      <div className="space-y-3">
                        {chapter.lessons.map((lesson, lessonIndex) => (
                          <div key={lesson.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <Video className="w-5 h-5 text-gray-700" />
                            <input
                              type="text"
                              value={lesson.title}
                              onChange={(e) => handleLessonChange(chapterIndex, lessonIndex, 'title', e.target.value)}
                              className="flex-1 bg-transparent border-none focus:outline-none placeholder-gray-500 text-gray-900"
                              placeholder="Lesson title"
                            />
                            <input
                              type="text"
                              value={lesson.duration}
                              onChange={(e) => handleLessonChange(chapterIndex, lessonIndex, 'duration', e.target.value)}
                              className="w-20 text-sm text-gray-900 bg-transparent border-none focus:outline-none text-center placeholder-gray-500"
                              placeholder="00:00"
                            />
                            <button 
                              onClick={() => removeLesson(chapterIndex, lessonIndex)}
                              className="p-1 text-red-600 hover:bg-red-50 rounded"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                        <button 
                          onClick={() => addLesson(chapterIndex)}
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 p-2"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Add Lesson</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditCoursePage;
