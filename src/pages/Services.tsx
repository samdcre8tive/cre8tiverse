import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const multimediaServices = [
    {
      title: '3D Modeling and Architectural Designs',
      description: 'Expert services including animation, rendering, and digital sculpting.',
      image: 'https://i.imgur.com/fRePzel.jpeg'
    },
    {
      title: 'Video Editing and Motion Graphics',
      description: 'Seamless editing, colour correction, sound design, and dynamic animations.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Graphics Design',
      description: 'Branding, logo design, marketing materials, and digital illustrations.',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Product Design (UI/UX Design)',
      description: 'User research, wireframing, prototyping, and interface design.',
      image: 'https://i.imgur.com/dgbss77.png'
    },
    {
      title: 'Web Design',
      description: 'Custom themes, responsive layouts, e-commerce solutions, and content management.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Digital Marketing',
      description: 'Content strategy, SEO, paid ads, social media marketing, and analytics.',
      image: 'https://i.imgur.com/HXnU3W7.jpeg'
    }
  ];

  const edtechServices = [
    {
      title: 'Digital Learning Tools',
      description: 'Interactive learning materials and digital resources.',
    },
    {
      title: 'Customized E-learning Platforms',
      description: 'Tailored online learning environments.',
    },
    {
      title: 'Content Development',
      description: 'Educational content creation and curation.',
    },
    {
      title: 'Virtual Classrooms',
      description: 'Real-time online learning environments.',
    },
    {
      title: 'Online Workshops and Webinars',
      description: 'Interactive online training sessions.',
    },
    {
      title: 'Learning Management System',
      description: 'Comprehensive learning platform solutions.',
    }
  ];

  return (
    <div className="pt-16">
      {/* Multimedia Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
            Multimedia Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {multimediaServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: '#f8f9fa' }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary text-center mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EdTech Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
            Educational Technology (EdTech) Solutions
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                alt="EdTech Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {edtechServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: '#f8f9fa' }}
                className="bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;