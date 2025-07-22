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
  ArrowLeft,
  Trophy,
  Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import CourseNavigation from '../components/CourseNavigation';
import Breadcrumb from '../components/Breadcrumb';
import ProgressBar from '../components/ProgressBar';

const CourseLessonC2 = () => {
  const navigate = useNavigate();
  const [showTimecodes, setShowTimecodes] = useState(false);
  const { isLessonCompleted, markLessonComplete, markLessonIncomplete } = useProgress();
  const isCompleted = isLessonCompleted('c2');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const timecodes = [
    { time: '0:00', title: 'Intro to Clipping Masks and Illustrator Tools' },
    { time: '1:14', title: 'How to Use Clipping Masks in Adobe Illustrator' },
    { time: '11:59', title: 'Fix Missing Tools: Add Tools to the Tools Panel in Illustrator' },
    { time: '12:45', title: 'How to Draw a Perfect Triangle in Adobe Illustrator' },
    { time: '28:42', title: 'How to Export Your Design in Adobe Illustrator' }
  ];

  const learningOutcomes = [
    'Master advanced clipping mask techniques',
    'Add depth, textures, and effects to your designs',
    'Fix missing tools in the Tools Panel',
    'Draw perfect triangles and geometric shapes',
    'Export professional flyer designs',
    'Complete a polished, professional flyer project'
  ];

  const handleMarkComplete = () => {
    if (isCompleted) {
      markLessonIncomplete('c2');
    } else {
      markLessonComplete('c2');
    }
  };

  const handleBackToCourse = () => {
    navigate('/course/adobe-illustrator-expert');
  };

  const handleSubmitProject = () => {
    navigate('/course/adobe-illustrator-expert/submit-project');
  };

  const handleScrollToCourseComplete = () => {
    const courseCompleteSection = document.getElementById('course-complete-section');
    if (courseCompleteSection) {
      courseCompleteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breadcrumbItems = [
    { label: 'Courses', path: '/courses' },
    { label: 'Adobe Illustrator Expert', path: '/course/adobe-illustrator-expert' },
    { label: 'Flyer Design Part 2' }
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
                    src="https://www.youtube.com/embed/7yB0D5xxPqA?si=example" 
                    title="Flyer Design in Adobe Illustrator – Part 2: Final Touches | Cre8tiverse" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Simple Navigation Buttons - Immediately below video */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col md:flex-row gap-4">
                  <motion.button
                    onClick={() => navigate('/course/adobe-illustrator-expert/lesson/c1')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center bg-white text-primary border-2 border-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Previous Lesson
                  </motion.button>
                  
                  <motion.button
                    onClick={handleScrollToCourseComplete}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300"
                  >
                    <Award className="w-5 h-5 mr-2" />
                    Congratulations! Submit Project
                  </motion.button>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      Flyer Design in Adobe Illustrator – Part 2: Final Touches
                    </h1>
                    <p className="text-lg text-gray-600">
                      Complete your flyer with advanced techniques and professional finishing.
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
                    <span>31 min 26 sec</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>Lesson C2 - Final Lesson</span>
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
                  In this continuation of the flyer design process, we take things a step further with advanced techniques 
                  and final touches in Adobe Illustrator. From perfecting your layout to adding depth, textures, and effects, 
                  you'll refine your flyer design to achieve a polished, professional look. We also dive deeper into the use 
                  of illustrator tools to enhance your design and make it stand out.
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

            {/* Course Completion Section */}
            <motion.div
              id="course-complete-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg p-6 md:p-8 text-white"
            >
              <div className="text-center">
                <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">🎉 Course Complete!</h2>
                <p className="text-xl mb-6 opacity-90">
                  Congratulations! You've completed the entire Adobe Illustrator Expert course. You now have the skills to create professional designs, logos, and illustrations.
                </p>
                <div className="bg-white/20 rounded-lg p-4 mb-6">
                  <p className="text-lg font-semibold mb-2">Course Complete:</p>
                  <p className="text-sm opacity-90">
                    ✅ 16 Comprehensive Lessons<br />
                    ✅ 4h 36m of Content<br />
                    ✅ Real-World Projects<br />
                    ✅ Professional Techniques
                  </p>
                </div>
                <motion.button
                  onClick={handleSubmitProject}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center mx-auto"
                >
                  <Award className="w-6 h-6 mr-3" />
                  Submit Your Project
                </motion.button>
              </div>
            </motion.div>

            {/* Downloadable Resources Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
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
              transition={{ duration: 0.8, delay: 0.6 }}
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
          <CourseNavigation currentLessonId="c2" className="lg:col-span-1" />
        </div>
      </div>
    </div>
  );
};

export default CourseLessonC2;