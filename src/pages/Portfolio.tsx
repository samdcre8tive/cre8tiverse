import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('page-design');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const portfolioCategories = {
    'page-design': {
      title: 'Page Design',
      items: [
        {
          image: 'https://i.imgur.com/sgz0VtM.jpeg',
          title: 'Magazine Layout Design',
          description: 'Creative editorial layout with balanced typography and visual hierarchy for enhanced readability.',
          link: 'https://www.behance.net/samuel-aku'
        },
        {
          image: 'https://i.imgur.com/YMbXwDu.jpeg',
          title: 'Brochure Design',
          description: 'Professional brochure layout that effectively presents information with visual appeal.',
          link: 'https://www.behance.net/samuel-aku'
        }
      ]
    },
    'flier': {
      title: 'Flier Design',
      items: [
        {
          image: 'https://i.imgur.com/YJmLLLS.jpeg',
          title: 'Event Promotion Flier',
          description: 'Eye-catching promotional material designed to maximize event attendance and engagement.',
          link: 'https://www.behance.net/samuel-aku'
        },
        {
          image: 'https://i.imgur.com/fiJGHFN.jpeg',
          title: 'Business Marketing Flier',
          description: 'Professional marketing collateral that effectively communicates brand value and services.',
          link: 'https://www.behance.net/samuel-aku'
        }
      ]
    },
    'floor-plan': {
      title: 'Floor Plan',
      items: [
        {
          image: 'https://i.imgur.com/JjHyODi.jpeg',
          title: 'Residential Floor Plan',
          description: 'Detailed architectural layout optimizing space utilization and flow for modern living.',
          link: 'https://www.behance.net/samuel-aku'
        },
        {
          image: 'https://i.imgur.com/fRC5gWf.jpg',
          title: 'Commercial Space Design',
          description: 'Strategic commercial layout designed for efficiency and optimal customer experience.',
          link: 'https://www.behance.net/samuel-aku'
        }
      ]
    },
    'ui-ux': {
      title: 'UI/UX Design',
      items: [
        {
          image: 'https://i.imgur.com/zHujiY7.jpeg',
          title: 'Modern Dashboard Interface',
          description: 'Clean and intuitive dashboard design with focus on user experience and data visualization.',
          link: 'https://www.behance.net/samuel-aku'
        },
        {
          image: 'https://i.imgur.com/NDnDVKi.jpeg',
          title: 'Mobile App Design',
          description: 'Responsive mobile application interface with seamless navigation and modern aesthetics.',
          link: 'https://www.behance.net/samuel-aku'
        }
      ]
    },
    'motion-graphics': {
      title: 'Motion Graphics and Ads',
      items: [
        {
          video: { id: 'c-bJjYeTZo8', title: 'Marketing Video (Ad) for Zeemagee Farms' },
          title: 'Zeemagee Farms Marketing Campaign',
          description: 'Engaging promotional video showcasing agricultural excellence with dynamic motion graphics.',
          link: 'https://www.youtube.com/watch?v=c-bJjYeTZo8'
        },
        {
          video: { id: 'cKY6RJtAlqo', title: 'Marketing Video for Aptech' },
          title: 'Aptech Brand Promotion',
          description: 'Professional marketing video highlighting technology solutions with compelling visual storytelling.',
          link: 'https://www.youtube.com/watch?v=cKY6RJtAlqo'
        },
        {
          video: { id: 'DV20YWYSP7c', title: 'IT Sensitization Video' },
          title: 'IT Awareness Campaign',
          description: 'Educational video content designed to increase IT awareness with clear messaging and graphics.',
          link: 'https://www.youtube.com/watch?v=DV20YWYSP7c'
        },
        {
          video: { id: 'O6_RaKyjxIg', title: '6 Quotes by Albert Einstein' },
          title: 'Einstein Quotes Animation',
          description: 'Inspirational quote compilation with elegant typography and smooth motion graphics.',
          link: 'https://www.youtube.com/watch?v=O6_RaKyjxIg'
        }
      ]
    }
  };

  const tabs = [
    { id: 'page-design', label: 'Page Design' },
    { id: 'flier', label: 'Flier Design' },
    { id: 'floor-plan', label: 'Floor Plan' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'motion-graphics', label: 'Motion Graphics & Ads' }
  ];

  const edtechVideos = [
    { id: '9EnGrJhNl2Y', title: '3D Bottle Design in Adobe Illustrator' },
    { id: 'rUndTvq04mg', title: 'How to Make a Wordmark Logo in Adobe Illustrator' },
  ];

  // Motion Graphics carousel functions
  const motionGraphicsItems = portfolioCategories['motion-graphics'].items;
  const totalVideos = motionGraphicsItems.length;
  const videosPerPage = 2;
  const totalPages = Math.ceil(totalVideos / videosPerPage);

  const nextVideos = () => {
    setCurrentVideoIndex((prev) => 
      prev + videosPerPage >= totalVideos ? 0 : prev + videosPerPage
    );
  };

  const prevVideos = () => {
    setCurrentVideoIndex((prev) => 
      prev - videosPerPage < 0 ? Math.max(0, totalVideos - videosPerPage) : prev - videosPerPage
    );
  };

  const getCurrentVideos = () => {
    return motionGraphicsItems.slice(currentVideoIndex, currentVideoIndex + videosPerPage);
  };

  return (
    <div>
      {/* Multimedia Portfolio Section */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            Multimedia Portfolio
          </h2>

          {/* Tab Navigation - Mobile Optimized */}
          <div className="mb-8 md:mb-12">
            {/* Mobile: Dropdown Style */}
            <div className="md:hidden">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-primary font-medium focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                {tabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>
                    {tab.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop: Button Style */}
            <div className="hidden md:flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 text-sm lg:text-base ${
                    activeTab === tab.id
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8 text-center">
              {portfolioCategories[activeTab].title}
            </h3>

            {/* Motion Graphics Carousel */}
            {activeTab === 'motion-graphics' ? (
              <div className="relative">
                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mb-6">
                  <button
                    onClick={prevVideos}
                    disabled={currentVideoIndex === 0}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      currentVideoIndex === 0
                        ? 'bg-white/20 text-white/50 cursor-not-allowed'
                        : 'bg-white/30 hover:bg-white/50 text-white hover:text-primary'
                    }`}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <div className="text-white text-center">
                    <span className="text-sm opacity-80">
                      {Math.floor(currentVideoIndex / videosPerPage) + 1} of {totalPages}
                    </span>
                  </div>
                  
                  <button
                    onClick={nextVideos}
                    disabled={currentVideoIndex + videosPerPage >= totalVideos}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      currentVideoIndex + videosPerPage >= totalVideos
                        ? 'bg-white/20 text-white/50 cursor-not-allowed'
                        : 'bg-white/30 hover:bg-white/50 text-white hover:text-primary'
                    }`}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Video Grid */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentVideoIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8"
                  >
                    {getCurrentVideos().map((item, index) => (
                      <motion.div
                        key={currentVideoIndex + index}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                      >
                        <div className="relative aspect-video">
                          <iframe
                            src={`https://www.youtube.com/embed/${item.video.id}`}
                            title={item.video.title}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        
                        <div className="p-4 md:p-6">
                          <h4 className="text-lg md:text-xl font-semibold text-primary mb-2 md:mb-3">
                            {item.title}
                          </h4>
                          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideoIndex(index * videosPerPage)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        Math.floor(currentVideoIndex / videosPerPage) === index
                          ? 'bg-accent scale-125'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              /* Regular Grid for Other Categories */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                {portfolioCategories[activeTab].items.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="p-4 md:p-6">
                      <h4 className="text-lg md:text-xl font-semibold text-primary mb-2 md:mb-3">
                        {item.title}
                      </h4>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Overall Portfolio Link */}
          <div className="text-center mt-8 md:mt-12">
            <motion.a
              href="https://www.behance.net/samuel-aku"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
        </div>
      </section>

      {/* Separator Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-1 bg-gray-100 rounded-full"></div>
        </div>
      </section>

      {/* EdTech Portfolio Section */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8 md:mb-16">
            EdTech Portfolio
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
            {edtechVideos.map((video, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-3 md:p-4">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-accent text-sm md:text-base"
                  >
                    <span className="mr-2">{video.title}</span>
                    <ExternalLink size={14} className="md:w-4 md:h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="https://www.youtube.com/@cre8tiverse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;