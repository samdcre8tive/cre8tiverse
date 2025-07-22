import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Clock, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle,
  User,
  BookOpen,
  List,
  X,
  Menu,
  ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import CourseNavigation from '../components/CourseNavigation';
import Breadcrumb from '../components/Breadcrumb';
import ProgressBar from '../components/ProgressBar';

const CourseLessonA3 = () => {
  const navigate = useNavigate();
  const [showTimecodes, setShowTimecodes] = useState(false);
  const { isLessonCompleted, markLessonComplete, markLessonIncomplete } = useProgress();
  const isCompleted = isLessonCompleted('a3');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const timecodes = [
    { time: '00:00', title: 'Intro' },
    { time: '00:45', title: 'What Is the Text Tool in Adobe Illustrator' },
    { time: '02:25', title: 'How to Increase Point Size in Illustrator' },
    { time: '02:48', title: 'Leading: Line Spacing in Illustrator Explained' },
    { time: '03:16', title: 'Tracking: Adjusting Letter Spacing in Illustrator' },
    { time: '03:54', title: 'Kerning: Spacing Between Two Characters' },
    { time: '04:45', title: 'How to Use the Paragraph Panel in Illustrator' },
    { time: '05:30', title: 'What Does Hyphenate Mean in Illustrator' },
    { time: '06:15', title: 'Fill vs Stroke in Adobe Illustrator' },
    { time: '08:15', title: 'What Is a Colour Code in Graphic Design?' },
    { time: '09:10', title: 'Using the Eyedropper Tool in Illustrator' },
    { time: '10:17', title: 'How to Use Gradient in Adobe Illustrator' }
  ];

  const learningOutcomes = [
    'Master Text and Type Tools in Adobe Illustrator',
    'Understand Character and Paragraph Panel controls',
    'Apply Fill Colours, Strokes, and Gradients effectively',
    'Use the Eyedropper Tool for color sampling',
    'Control typography spacing: leading, tracking, and kerning',
    'Create professional text layouts and effects'
  ];

  const handleMarkComplete = () => {
    if (isCompleted) {
      markLessonIncomplete('a3');
    } else {
      markLessonComplete('a3');
    }
  };

  const handleBackToCourse = () => {
    navigate('/course/adobe-illustrator-expert');
  };

  const breadcrumbItems = [
    { label: 'Courses', path: '/courses' },
    { label: 'Adobe Illustrator Expert', path: '/course/adobe-illustrator-expert' },
    { label: 'Working with Text, Colour & Gradients' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Mobile Navigation Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={handleBackToCourse}
            className="flex items-center text-primary hover:text-primary/80"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Back to Course</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Progress Bar */}
            <ProgressBar />

            {/* Video Player Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative">
                <div className="aspect-video bg-black">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/40gztuRtBi4?si=example" 
                    title="Working with Text, Colour, Strokes & Gradients in Illustrator | Cre8tiverse" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Simple Navigation Buttons - Immediately below video */}
              <div className="p-6 border-b border-gray-200">
                <CourseNavigation currentLessonId="a3" />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      Working with Text, Colour, Strokes & Gradients in Illustrator
                    </h1>
                    <p className="text-lg text-gray-600">
                      Master typography and color techniques for professional designs.
                    </p>
                  </div>
                  
                  <motion.button
                    onClick={handleMarkComplete}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      isCompleted 
                        ? 'bg-green-100 text-green-700 border-2 border-green-200' 
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                  >
                    <CheckCircle className={`w-5 h-5 mr-2 ${isCompleted ? 'fill-current' : ''}`} />
                    {isCompleted ? 'Completed' : 'Mark as Complete'}
                  </motion.button>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>11 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>Lesson A3</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>Samuel Aku</span>
                  </div>
                </div>

                <div className="lg:hidden mb-6">
                  <button
                    onClick={() => setShowTimecodes(!showTimecodes)}
                    className="flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    <List className="w-5 h-5 mr-2" />
                    {showTimecodes ? 'Hide' : 'Show'} Timecodes
                  </button>
                </div>

                <AnimatePresence>
                  {showTimecodes && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="lg:hidden mb-6 overflow-hidden"
                    >
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-primary mb-3">Lesson Timecodes</h4>
                        <div className="space-y-2">
                          {timecodes.map((item, index) => (
                            <div key={index} className="flex items-center text-sm">
                              <span className="font-mono text-accent mr-3 min-w-[50px]">{item.time}</span>
                              <span className="text-gray-700">{item.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Lesson Overview Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Lesson Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  In this lesson, you'll learn how to use Text and Type Tools, explore the Character and Paragraph Panels, 
                  and understand how to apply Fill Colours, Strokes, and Gradients. We'll also dive into the Eyedropper Tool 
                  to quickly copy colours and styles for efficient design workflows.
                </p>
              </div>
            </motion.div>

            {/* What You'll Learn Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {learningOutcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Downloadable Resources Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-primary to-accent rounded-2xl shadow-lg p-6 md:p-8 text-white"
            >
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Downloadable Resources</h2>
                  <p className="text-white/90 mb-4">
                    Get the practice files and templates for this lesson
                  </p>
                  <p className="text-sm text-white/75">
                    Unzip with WinRAR, WinZip or similar tools.
                  </p>
                </div>
                <motion.a
                  href="https://tinyurl.com/ai-files-cre8"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download Lesson Files
                </motion.a>
              </div>
            </motion.div>

            {/* Instructor Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Your Instructor</h2>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-6">
                  <img
                    src="https://i.imgur.com/1UHbIBn.jpeg"
                    alt="Samuel Aku"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Samuel Aku</h3>
                  <p className="text-gray-600">
                    Samuel is a multimedia faculty and creative professional at Cre8tiverse, 
                    focused on simplifying design for beginners and digital creatives.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Navigation */}
          <CourseNavigation currentLessonId="a3" className="lg:col-span-1" />
        </div>
      </div>
    </div>
  );
};

export default CourseLessonA3;