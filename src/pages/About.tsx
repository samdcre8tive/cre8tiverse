import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'We believe in the power of creativity to transform brands and educational experiences, connecting with audiences in meaningful ways.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with honesty and transparency in all our client and educational interactions.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of industry trends to provide cutting-edge multimedia and EdTech solutions.',
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: "Our client's success, both in business and education, is our top priority.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Mission & Vision Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To empower individuals with practical digital and creative skills, and help brands and organisations bring their visions to life through clear, compelling multimedia solutions.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To be a global leader in digital creativity and EdTech—nurturing talent for a dynamic digital world and enabling brands to achieve their goals through innovative multimedia solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <value.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;