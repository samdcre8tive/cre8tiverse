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
import CourseNavigation from '../components/CourseNavigation';
import Breadcrumb from '../components/Breadcrumb';

const CourseLessonA8 = () => {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);
  const [showTimecodes, setShowTimecodes] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const timecodes = [
    { time: '0:00', title: 'Intro' },
    { time: '0:48', title: 'Saving a File for Future Editing (.ai Native Format)' },
    { time: '4:15', title: 'Export As in Adobe Illustrator' },
    { time: '5:10', title: 'Export As (Using Artboards)' },
    { time: '6:27', title: 'Export As (Using Range)' },
    { time: '7:26', title: 'Exporting' },
    { time: '8:00', title: 'Why PNG Maintains Transparency' },
    { time: '9:15', title: 'Exporting as SVG in Illustrator' },
    { time: '10:10', title: 'Exporting as PDF in Illustrator' }
  ];

  const learningOutcomes = [
    'Master different file saving methods in Illustrator',
    'Understand when to use Save As vs Export As',
    'Learn the differences between JPEG, PNG, SVG, and PDF',
    'Export files optimized for web, print, and editing',
    'Use artboard and range export options effectively',
    'Maintain file quality and transparency settings'
  ];

  const handleMarkComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const handleBackToCourse = () => {
    navigate('/course/adobe-illustrator-expert');
  };

  const breadcrumbItems = [
    { label: 'Courses', path: '/courses' },
    { label: 'Adobe Illustrator Expert', path: '/course/adobe-illustrator-expert' },
    { label: 'Saving Files & Export Formats' }
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
                    src="https://www.youtube.com/embed/1avT8obUXWk?si=DrhpC78ioWn-DXWG" 
                    title="How to Save Files in Illustrator – Save As, Export as, for Screens & File Formats | Cre8tiverse" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Simple Navigation Buttons - Immediately below video */}
              <div className="p-6 border-b border-gray-200">
                <CourseNavigation currentLessonId="a8" />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      How to Save Files in Illustrator – Save As, Export as, for Screens & File Formats
                    </h1>
                    <p className="text-lg text-gray-600">
                      Master file saving and exporting for web, print, and future editing.
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
                    <span>Lesson A8</span>
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
                  In this video, we'll explore how to save files in Adobe Illustrator using different methods like Save As, 
                  Export for Screens, and Export. You'll also learn the differences between JPEG, PNG, SVG, and PDF — and 
                  when to use each for your designs. Mastering these techniques ensures your projects are saved in the best 
                  formats for editing, web, or print.
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
          <CourseNavigation currentLessonId="a8" className="lg:col-span-1" />
        </div>
      </div>
    </div>
  );
};

export default CourseLessonA8;