import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const multimediaImages = [
    // UI/UX section
    {
      src: 'https://i.imgur.com/zHujiY7.jpeg',
      category: 'UI/UX Design'
    },
    {
      src: 'https://i.imgur.com/NDnDVKi.jpeg',
      category: 'UI/UX Design'
    },
    // Flier section
    {
      src: 'https://i.imgur.com/YJmLLLS.jpeg',
      category: 'Flier Design'
    },
    {
      src: 'https://i.imgur.com/fiJGHFN.jpeg',
      category: 'Flier Design'
    },
    // Floor Plan section
    {
      src: 'https://i.imgur.com/JjHyODi.jpeg',
      category: 'Floor Plan'
    },
    {
      src: 'https://i.imgur.com/fRC5gWf.jpg',
      category: 'Floor Plan'
    },
    // Page Design section
    {
      src: 'https://i.imgur.com/sgz0VtM.jpeg',
      category: 'Page Design'
    },
    {
      src: 'https://i.imgur.com/YMbXwDu.jpeg',
      category: 'Page Design'
    }
  ];

  const multimediaVideos = [
    { id: 'c-bJjYeTZo8', title: 'Multimedia Project 1' },
    { id: 'cKY6RJtAlqo', title: 'Multimedia Project 2' },
    { id: 'DV20YWYSP7c', title: 'Multimedia Project 3' },
    { id: 'O6_RaKyjxIg', title: 'Multimedia Project 4' },
  ];

  const edtechVideos = [
    { id: '9EnGrJhNl2Y', title: 'EdTech Project 1' },
    { id: 'rUndTvq04mg', title: 'EdTech Project 2' },
  ];

  return (
    <div>
      {/* Multimedia Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
            Multimedia Portfolio
          </h2>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {multimediaImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={image.src}
                  alt={`${image.category} ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Video Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {multimediaVideos.map((video, index) => (
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
                <div className="p-4">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-accent"
                  >
                    <span className="mr-2">{video.title}</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.a
              href="https://www.behance.net/samuel-aku"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
        </div>
      </section>

      {/* EdTech Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
            EdTech Portfolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                <div className="p-4">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-accent"
                  >
                    <span className="mr-2">{video.title}</span>
                    <ExternalLink size={16} />
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
              className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
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