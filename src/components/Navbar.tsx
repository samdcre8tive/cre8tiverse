import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const joinUsItems = [
    { label: 'Become a Faculty', path: '/teach' },
    { label: 'Become a Freelancer', path: '/become-a-freelancer' },
  ];

  const handleNavigation = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleCoursesClick = () => {
    navigate('/courses');
    setIsOpen(false);
  };

  const handleHireClick = () => {
    navigate('/start-request');
    setIsOpen(false);
  };

  const handleJoinUsClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setIsJoinUsOpen(false);
  };

  const handleAuthClick = () => {
    navigate('/login');
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => handleNavigation('home')}>
              <img
                className="h-8 w-auto"
                src="https://i.imgur.com/Z2zp8CH.png"
                alt="Cre8tiverse Logo"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Regular Navigation Items */}
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`nav-link ${
                    location.pathname === '/' && activeSection === item.id
                      ? 'text-primary font-semibold'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Courses Link */}
              <button
                onClick={handleCoursesClick}
                className={`nav-link ${
                  location.pathname === '/courses'
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Courses
              </button>
            </div>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-300"></div>

            {/* Special Buttons */}
            <div className="flex items-center space-x-4">
              {/* Hire Button - White with orange stroke and text */}
              <motion.button
                onClick={handleHireClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 border-2 min-h-[40px] ${
                  location.pathname === '/start-request'
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white text-accent border-accent hover:bg-accent hover:text-white'
                }`}
              >
                Hire
              </motion.button>

              {/* Join Us Dropdown - Orange */}
              <div className="relative">
                <motion.button
                  onMouseEnter={() => setIsJoinUsOpen(true)}
                  onMouseLeave={() => setIsJoinUsOpen(false)}
                  className="flex items-center bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg min-h-[40px]"
                >
                  <span>Join Us</span>
                  <motion.div
                    animate={{ rotate: isJoinUsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </motion.div>
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isJoinUsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setIsJoinUsOpen(true)}
                      onMouseLeave={() => setIsJoinUsOpen(false)}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    >
                      {joinUsItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleJoinUsClick(item.path)}
                          className="w-full text-left px-4 py-3 text-gray-700 hover:bg-primary hover:text-white transition-all duration-200 font-medium text-base min-h-[44px] flex items-center"
                        >
                          {item.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Auth Button */}
              <motion.button
                onClick={handleAuthClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg min-h-[40px]"
              >
                Login
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {/* Regular Navigation Items */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`mobile-nav-link ${
                  location.pathname === '/' && activeSection === item.id
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Courses Link */}
            <button
              onClick={handleCoursesClick}
              className={`mobile-nav-link ${
                location.pathname === '/courses'
                  ? 'text-primary font-semibold'
                  : 'text-gray-600 hover:text-primary hover:bg-gray-50'
              }`}
            >
              Courses
            </button>

            {/* Separator */}
            <div className="h-px bg-gray-200 my-2"></div>

            {/* Special Buttons for Mobile */}
            <div className="space-y-3 px-3">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Actions</p>
              
              {/* Hire Button */}
              <motion.button
                onClick={handleHireClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white px-4 py-3 rounded-lg font-medium text-base transition-all duration-300 mb-2 min-h-[44px]"
              >
                Hire
              </motion.button>

              {/* Join Us Section for Mobile */}
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mt-4">Join Us</p>
              {joinUsItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleJoinUsClick(item.path)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-accent hover:bg-accent/90 text-white px-4 py-3 rounded-lg font-medium text-base transition-all duration-300 mb-2 min-h-[44px]"
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.button
                onClick={handleAuthClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg font-medium text-base transition-all duration-300 min-h-[44px]"
              >
                Login
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;