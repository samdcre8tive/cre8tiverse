import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-2/3 text-center md:text-left mb-8 md:mb-0 md:order-1 order-2"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Cre8tiverse - Transforming Ideas into Reality
              </h1>
              
              {/* Image for mobile only - shows after title */}
              <div className="md:hidden mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl"
                >
                  <img
                    src="https://i.imgur.com/VvKYFUL.jpeg"
                    alt="Cre8tiverse Team"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <h2 className="text-xl md:text-2xl text-accent mb-6">
                Innovate, Create and Inspire
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl">
                Cre8tiverse is a multimedia company offering creative digital marketing and EdTech solutions. 
                We craft innovative and engaging content to help clients and educators alike enhance their brand 
                presence and achieve their marketing goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.a
                  href="https://www.youtube.com/@cre8tiverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  EdTech Solutions
                </motion.a>
                <motion.a
                  href="https://web.facebook.com/cre8tiverse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore More
                </motion.a>
              </div>
            </motion.div>

            {/* Image - Desktop only */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:flex w-full md:w-1/3 justify-center md:justify-end order-1 md:order-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-96 h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              >
                <img
                  src="https://i.imgur.com/VvKYFUL.jpeg"
                  alt="Cre8tiverse Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;