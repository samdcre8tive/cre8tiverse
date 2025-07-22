import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Courses = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  React.useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAuthenticated(!!user);
    };
    
    checkAuth();
  }, []);
  
  const courseCategories = [
    {
      title: 'Graphic Design',
      courses: [
        { title: 'Become an Adobe Illustrator Expert', available: true },
        { title: 'Become a Photoshop Expert', available: false },
        { title: 'Become an InDesign Expert', available: false },
      ]
    },
    {
      title: 'Audio-Visual Editing',
      courses: [{ title: 'Coming Soon', available: false }]
    },
    {
      title: 'Motion Graphics',
      courses: [{ title: 'Coming Soon', available: false }]
    },
    {
      title: 'Product Design (UI/UX)',
      courses: [{ title: 'Coming Soon', available: false }]
    },
    {
      title: '3D Modeling and Architectural Design',
      courses: [{ title: 'Coming Soon', available: false }]
    },
    {
      title: 'Digital Marketing',
      courses: [{ title: 'Coming Soon', available: false }]
    },
    {
      title: 'Web Design',
      courses: [{ title: 'Coming Soon', available: false }]
    }
  ];

  const handleCourseClick = (course: { title: string; available: boolean }) => {
    if (!isAuthenticated) {
      navigate('/signup');
      return;
    }

    if (!course.available) {
      return;
    }

    // Handle course access here
    console.log('Accessing course:', course.title);
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary text-center mb-4">Our Courses</h1>
          <p className="text-gray-600 text-center mb-12 text-lg">
            {isAuthenticated 
              ? 'Enhance your skills with our professional courses'
              : 'Sign up to access our courses'}
          </p>

          <div className="space-y-8">
            {courseCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-primary mb-4">{category.title}</h2>
                  <div className="space-y-4">
                    {category.courses.map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        onClick={() => handleCourseClick(course)}
                        className={`flex items-center justify-between p-4 rounded-lg ${
                          isAuthenticated && course.available
                            ? 'bg-primary/5 hover:bg-primary/10 cursor-pointer'
                            : 'bg-gray-100 cursor-not-allowed'
                        }`}
                      >
                        <span className={isAuthenticated && course.available ? 'text-primary' : 'text-gray-500'}>
                          {course.title}
                        </span>
                        {isAuthenticated && course.available ? (
                          <Unlock className="text-primary" size={20} />
                        ) : (
                          <Lock className="text-gray-400" size={20} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {!isAuthenticated && (
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6 text-lg">
                Sign up to access all courses as they become available
              </p>
              <motion.button
                onClick={() => navigate('/signup')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold text-lg"
              >
                Sign Up to Access All Courses
              </motion.button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;