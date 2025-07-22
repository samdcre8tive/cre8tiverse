import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Multimedia-related background images
  const backgroundImages = [
    {
      url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1920&q=80',
      alt: 'Digital Marketing Analytics'
    },
    {
      url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1920&q=80',
      alt: 'Video Editing Workspace'
    },
    {
      url: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=1920&q=80',
      alt: 'Social Media Management'
    },
    {
      url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1920&q=80',
      alt: 'Graphic Design Studio'
    },
    {
      url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1920&q=80',
      alt: 'Creative Design Process'
    },
    {
      url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1920&q=80',
      alt: 'Web Development'
    }
  ];

  const handleStartLearning = () => {
    navigate('/courses');
  };

  const handleRequestService = () => {
    navigate('/start-request'); // Changed to navigate to hire page instead of WhatsApp
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Auto-rotate images every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative bg-primary text-white section-padding overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.15, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="absolute inset-0"
            >
              <img
                src={backgroundImages[currentImageIndex].url}
                alt={backgroundImages[currentImageIndex].alt}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/80"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full md:w-2/3 text-center md:text-left mb-12 md:mb-0 md:order-1 order-2"
            >
              {/* Professional heading hierarchy */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Cre8tiverse - Transforming Ideas into Reality
              </h1>
              
              {/* Image for mobile only - shows after title */}
              <div className="md:hidden mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl"
                >
                  <img
                    src="https://i.imgur.com/VvKYFUL.jpeg"
                    alt="Cre8tiverse Team"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Subtitle with proper sizing */}
              <h2 className="text-xl md:text-2xl lg:text-3xl text-accent mb-6 font-medium">
                Innovate, Create and Inspire
              </h2>
              
              {/* Body text with professional sizing */}
              <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl leading-relaxed text-white/90">
                Cre8tiverse is a digital agency that empowers individuals and brands with training, multimedia solutions, and insights to thrive in the evolving digital world.
              </p>
              
              <div className="flex justify-center md:justify-start">
                {/* Desktop: Hover dropdown */}
                <div className="hidden md:block dropdown-container relative">
                  <motion.button
                    className="bg-accent hover:bg-white hover:text-accent text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-xl min-h-[52px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                  >
                    Get Started
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        role="menu"
                      >
                        <button
                          onClick={handleStartLearning}
                          className="w-full text-left px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-accent transition-all duration-200 font-medium text-base min-h-[44px] flex items-center"
                          role="menuitem"
                        >
                          Start Learning
                        </button>
                        <button
                          onClick={handleRequestService}
                          className="w-full text-left px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-accent transition-all duration-200 font-medium text-base min-h-[44px] flex items-center"
                          role="menuitem"
                        >
                          Request Service
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile: Tap dropdown */}
                <div className="md:hidden dropdown-container relative">
                  <motion.button
                    onClick={toggleDropdown}
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center shadow-lg min-h-[52px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                  >
                    Get Started
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                        role="menu"
                      >
                        <button
                          onClick={() => {
                            handleStartLearning();
                            closeDropdown();
                          }}
                          className="w-full text-left px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-accent transition-all duration-200 font-medium text-base min-h-[44px] flex items-center"
                          role="menuitem"
                        >
                          Start Learning
                        </button>
                        <button
                          onClick={() => {
                            handleRequestService();
                            closeDropdown();
                          }}
                          className="w-full text-left px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-accent transition-all duration-200 font-medium text-base min-h-[44px] flex items-center"
                          role="menuitem"
                        >
                          Request Service
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Image - Desktop only */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 hidden md:flex w-full md:w-1/3 justify-center md:justify-end order-1 md:order-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              >
                <img
                  src="https://i.imgur.com/VvKYFUL.jpeg"
                  alt="Cre8tiverse Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Image Indicators */}
          <div className="relative z-10 flex justify-center mt-8 space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-accent scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Badge - Fixed to bottom-left corner */}
      <motion.a
        href="https://bolt.new/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 z-50 group"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          {/* Badge Image with professional sizing */}
          <img
            src="https://i.imgur.com/Fo90jQD.png"
            alt="Built with Bolt"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl"
          />
          
          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-300"></div>
          
          {/* Tooltip with proper text sizing */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Built with Bolt.new
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
          </div>
        </div>
      </motion.a>
    </div>
  );
};

export default Home;