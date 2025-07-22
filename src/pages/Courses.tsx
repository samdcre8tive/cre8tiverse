import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Lock, Play, Rocket, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = useState<string | null>('graphic-design');
  // Authentication is disabled - all users can access courses
  const isAuthenticated = true; // Changed to true so everyone can access

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const courseCategories = [
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      icon: '🎨',
      description: 'Master visual communication, branding, and composition using Adobe\'s industry-standard tools.',
      available: true,
      subCourses: [
        {
          title: 'Become an Adobe Illustrator Expert',
          description: 'Design logos, icons, and vector illustrations like a professional designer.',
          available: true,
          link: '/course/adobe-illustrator-expert'
        },
        {
          title: 'Become a Photoshop Expert',
          description: 'Master photo editing, digital art, and advanced image manipulation techniques.',
          available: false
        },
        {
          title: 'Become an InDesign Expert',
          description: 'Create stunning layouts for magazines, brochures, and digital publications.',
          available: false
        }
      ]
    },
    {
      id: 'audio-visual',
      title: 'Audio-Visual Editing',
      icon: '🎬',
      description: 'Master video editing tools and storytelling techniques to bring ideas to life through motion and sound.',
      available: false
    },
    {
      id: 'motion-graphics',
      title: 'Motion Graphics',
      icon: '🎞',
      description: 'Create compelling animated content with Adobe After Effects and modern motion design principles.',
      available: false
    },
    {
      id: 'product-design',
      title: 'Product Design (UI/UX)',
      icon: '🧩',
      description: 'Learn the end-to-end process of designing digital experiences using Figma and Adobe XD.',
      available: false
    },
    {
      id: '3d-modeling',
      title: '3D Modeling & Architectural Design',
      icon: '🏛',
      description: 'Explore modeling tools like AutoCAD, 3Ds Max, Maya, and Unreal Engine to visualize architectural spaces.',
      available: false
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: '📢',
      description: 'Build campaigns, understand analytics, and leverage social media for digital impact.',
      available: false
    },
    {
      id: 'web-design',
      title: 'Web Design',
      icon: '💻',
      description: 'Design visually stunning, responsive websites using HTML, CSS, and no-code tools.',
      available: false
    }
  ];

  const toggleCategory = (categoryId: string) => {
    const category = courseCategories.find(cat => cat.id === categoryId);
    if (category && category.available) {
      setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    }
  };

  const handleCourseClick = (course: { title: string; available: boolean; link?: string }) => {
    if (!course.available) return;
    if (course.link) {
      navigate(course.link);
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section id="courses-hero" className="py-12 md:py-24 bg-primary relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <Rocket className="w-8 h-8 md:w-16 md:h-16 mr-2 md:mr-6 text-accent" />
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-black tracking-tight">
                Start Learning
              </h1>
            </div>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-light mb-4 md:mb-6 max-w-4xl mx-auto leading-relaxed opacity-90">
              Upskill with our multimedia-focused courses, curated for creatives and tech enthusiasts.
            </h2>
            <div className="flex items-center justify-center text-accent font-medium text-base md:text-base mb-8">
              <div className="flex items-center">
                <Star className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                <span>Industry-Standard Tools</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 md:mb-4">
              Course Categories
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive range of multimedia courses designed to elevate your creative skills
            </p>
          </div>

          <div className="space-y-4 md:space-y-8">
            {courseCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border-2 transition-all duration-500 ${
                  !category.available 
                    ? 'border-gray-200 opacity-60 grayscale' 
                    : 'border-transparent hover:border-primary/30 hover:shadow-2xl'
                }`}
              >
                {/* Category Header */}
                <div
                  onClick={() => toggleCategory(category.id)}
                  className={`p-4 md:p-8 transition-all duration-300 ${
                    !category.available 
                      ? 'bg-gray-50 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 cursor-pointer'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 md:space-x-6 flex-1">
                      <div className={`text-2xl md:text-5xl ${!category.available ? 'grayscale' : ''}`}>
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg md:text-3xl font-bold mb-2 md:mb-3 ${
                          !category.available ? 'text-gray-400' : 'text-primary'
                        }`}>
                          {category.title}
                        </h3>
                        <p className={`text-base md:text-lg leading-relaxed max-w-4xl ${
                          !category.available ? 'text-gray-400' : 'text-gray-700'
                        }`}>
                          {category.description}
                        </p>
                        {!category.available && (
                          <p className="text-sm text-gray-500 mt-2 italic">Coming Soon</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 ml-2 md:ml-4">
                      {!category.available ? (
                        <div className="bg-gray-300 text-gray-500 p-2 md:p-4 rounded-full">
                          <Lock className="w-4 h-4 md:w-6 md:h-6" />
                        </div>
                      ) : (
                        <motion.div
                          animate={{ rotate: expandedCategory === category.id ? 90 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-primary/10 p-2 md:p-4 rounded-full"
                        >
                          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedCategory === category.id && category.subCourses && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 md:p-8 pt-0 bg-gradient-to-b from-transparent to-gray-50/50">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4 md:mb-8"></div>
                        
                        <div className="mb-4 md:mb-6">
                          <h4 className="text-lg md:text-2xl font-bold text-gray-800 mb-1 md:mb-2">
                            Available Courses
                          </h4>
                          <p className="text-base md:text-base text-gray-600">
                            Specialized courses within {category.title}
                          </p>
                        </div>
                        
                        <div className="grid gap-3 md:gap-6">
                          {category.subCourses.map((course, courseIndex) => (
                            <motion.div
                              key={courseIndex}
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: courseIndex * 0.1 }}
                              onClick={() => handleCourseClick(course)}
                              className={`p-4 md:p-6 rounded-xl md:rounded-2xl border-2 transition-all duration-300 ${
                                course.available
                                  ? 'border-primary/20 bg-white hover:border-primary/40 hover:shadow-lg cursor-pointer transform hover:-translate-y-1'
                                  : 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60 grayscale'
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
                                    <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${course.available ? 'bg-accent' : 'bg-gray-400'}`}></div>
                                    <h5 className={`text-base md:text-xl font-bold ${course.available ? 'text-primary' : 'text-gray-500'}`}>
                                      {course.title}
                                    </h5>
                                    {!course.available && (
                                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">Coming Soon</span>
                                    )}
                                  </div>
                                  <p className={`text-sm md:text-base leading-relaxed ${course.available ? 'text-gray-700' : 'text-gray-400'}`}>
                                    {course.description}
                                  </p>
                                </div>
                                
                                <div className="ml-3 md:ml-6">
                                  {course.available ? (
                                    <div className="bg-primary text-white p-2 md:p-3 rounded-full shadow-lg">
                                      <Play className="w-3 h-3 md:w-5 md:h-5" />
                                    </div>
                                  ) : (
                                    <div className="bg-gray-300 text-gray-500 p-2 md:p-3 rounded-full">
                                      <Lock className="w-3 h-3 md:w-5 md:h-5" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-12 md:mt-20"
          >
            <div className="bg-primary p-6 md:p-12 rounded-2xl md:rounded-3xl text-white text-center relative overflow-hidden">
              <div className="relative">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                  Ready to Transform Your Creative Journey?
                </h3>
                <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of creatives who have already started their learning adventure with us.
                </p>
                <motion.button
                  onClick={handleSignUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Sign Up
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses;