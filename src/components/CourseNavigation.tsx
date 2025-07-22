import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Play, CheckCircle, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  path: string;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface CourseNavigationProps {
  currentLessonId?: string;
  className?: string;
}

const CourseNavigation: React.FC<CourseNavigationProps> = ({ currentLessonId, className = '' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedModules, setExpandedModules] = useState<string[]>(['intro', 'section-a']);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isLessonCompleted } = useProgress();

  const courseModules: Module[] = [
    {
      id: 'intro',
      title: 'Course Introduction',
      lessons: [
        {
          id: 'intro',
          title: 'Course Overview',
          duration: '3 min 50 sec',
          path: '/course/adobe-illustrator-expert/intro'
        }
      ]
    },
    {
      id: 'section-a',
      title: 'Section A: Illustrator Essentials',
      lessons: [
        {
          id: 'a1',
          title: 'What is Adobe Illustrator?',
          duration: '17 min 47 sec',
          path: '/course/adobe-illustrator-expert/lesson/a1'
        },
        {
          id: 'a2',
          title: 'Artboards, Interface & Tools',
          duration: '16 min 45 sec',
          path: '/course/adobe-illustrator-expert/lesson/a2'
        },
        {
          id: 'a3',
          title: 'Text, Colour & Gradients',
          duration: '11 min 26 sec',
          path: '/course/adobe-illustrator-expert/lesson/a3'
        },
        {
          id: 'a4',
          title: 'Drawing Shapes & Pathfinder',
          duration: '11 min',
          path: '/course/adobe-illustrator-expert/lesson/a4'
        },
        {
          id: 'a5',
          title: 'Mastering Layers & Grouping',
          duration: '10 min 15 sec',
          path: '/course/adobe-illustrator-expert/lesson/a5'
        },
        {
          id: 'a6',
          title: 'Grouping & Alignment',
          duration: '3 min 3 sec',
          path: '/course/adobe-illustrator-expert/lesson/a6'
        },
        {
          id: 'a7',
          title: 'Creating Character Puppet',
          duration: '24 min 29 sec',
          path: '/course/adobe-illustrator-expert/lesson/a7'
        },
        {
          id: 'a8',
          title: 'Saving Files & Export Formats',
          duration: '14 min 1 sec',
          path: '/course/adobe-illustrator-expert/lesson/a8'
        },
        {
          id: 'a9',
          title: 'Templates & Keyboard Shortcuts',
          duration: '4 min 45 sec',
          path: '/course/adobe-illustrator-expert/lesson/a9'
        },
        {
          id: 'a10',
          title: 'Free Resources & Assets',
          duration: '12 min 24 sec',
          path: '/course/adobe-illustrator-expert/lesson/a10'
        },
        {
          id: 'a11',
          title: 'Design Inspiration & Portfolio',
          duration: '6 min 33 sec',
          path: '/course/adobe-illustrator-expert/lesson/a11'
        },
        {
          id: 'a12',
          title: 'Clipping Masks Comparison',
          duration: '3 min 9 sec',
          path: '/course/adobe-illustrator-expert/lesson/a12'
        }
      ]
    },
    {
      id: 'section-b',
      title: 'Section B: Creative Practical',
      lessons: [
        {
          id: 'b1',
          title: 'Wordmark Logo Design',
          duration: '41 min 41 sec',
          path: '/course/adobe-illustrator-expert/lesson/b1'
        },
        {
          id: 'b2',
          title: '3D Bottle Design',
          duration: '19 min 13 sec',
          path: '/course/adobe-illustrator-expert/lesson/b2'
        }
      ]
    },
    {
      id: 'section-c',
      title: 'Section C: Advanced Projects',
      lessons: [
        {
          id: 'c1',
          title: 'Flyer Design Part 1',
          duration: '21 min 2 sec',
          path: '/course/adobe-illustrator-expert/lesson/c1'
        },
        {
          id: 'c2',
          title: 'Flyer Design Part 2',
          duration: '31 min 26 sec',
          path: '/course/adobe-illustrator-expert/lesson/c2'
        }
      ]
    }
  ];

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleLessonClick = (lesson: Lesson) => {
    navigate(lesson.path);
    setIsMobileOpen(false);
  };

  const getCurrentLessonIndex = () => {
    let index = 0;
    for (const module of courseModules) {
      for (const lesson of module.lessons) {
        if (lesson.id === currentLessonId) {
          return index;
        }
        index++;
      }
    }
    return -1;
  };

  const getAllLessons = () => {
    return courseModules.flatMap(module => module.lessons);
  };

  const currentIndex = getCurrentLessonIndex();
  const allLessons = getAllLessons();
  const previousLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const NavigationContent = () => (
    <div className="space-y-2">
      <div className="mb-6">
        <h3 className="font-bold text-primary text-lg mb-2">Course Content</h3>
        <p className="text-sm text-gray-600">
          16 lessons • 4h 36m
        </p>
      </div>

      {courseModules.map((module) => (
        <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleModule(module.id)}
            className="w-full p-4 text-left hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between bg-gray-50"
          >
            <div>
              <h4 className="font-semibold text-sm text-primary">
                {module.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {module.lessons.length} lesson{module.lessons.length !== 1 ? 's' : ''}
              </p>
            </div>
            {expandedModules.includes(module.id) ? (
              <ChevronUp className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </button>

          <AnimatePresence>
            {expandedModules.includes(module.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-white">
                  {module.lessons.map((lesson) => {
                    const completed = isLessonCompleted(lesson.id);
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => handleLessonClick(lesson)}
                        className={`w-full p-3 text-left hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                          currentLessonId === lesson.id ? 'bg-primary/5 border-l-4 border-l-primary' : ''
                        }`}
                      >
                        <div className="flex items-center">
                          <div className="mr-3">
                            {currentLessonId === lesson.id ? (
                              <Play className="w-4 h-4 text-primary" />
                            ) : completed ? (
                              <CheckCircle className="w-4 h-4 text-green-500 fill-current" />
                            ) : (
                              <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className={`text-sm font-medium ${
                              currentLessonId === lesson.id 
                                ? 'text-primary' 
                                : completed
                                  ? 'text-green-700'
                                  : 'text-gray-800'
                            }`}>
                              {lesson.title}
                            </p>
                            {lesson.duration && (
                              <p className="text-xs text-gray-500">{lesson.duration}</p>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );

  // If we're on a lesson page and this is being called for navigation buttons under video
  // Return only simple navigation buttons, not the full course content
  if (currentLessonId && className === '') {
    return (
      <div className="flex flex-col md:flex-row gap-4">
        {previousLesson && (
          <motion.button
            onClick={() => handleLessonClick(previousLesson)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center bg-white text-primary border-2 border-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            Previous Lesson
          </motion.button>
        )}
        
        {nextLesson && (
          <motion.button
            onClick={() => handleLessonClick(nextLesson)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300"
          >
            Next Lesson
          </motion.button>
        )}
      </div>
    );
  }

  // For sidebar navigation, return the full course content
  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-20 right-4 z-40 bg-primary text-white p-3 rounded-full shadow-lg"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Desktop Sidebar */}
      <div className={`hidden lg:block ${className}`}>
        <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <NavigationContent />
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-primary">Course Navigation</h3>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <NavigationContent />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CourseNavigation;