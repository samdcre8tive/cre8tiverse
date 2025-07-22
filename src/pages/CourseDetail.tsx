import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Clock, 
  Users, 
  Award, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle,
  Star,
  BookOpen,
  Target,
  Palette,
  Zap,
  User,
  Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';

const CourseDetail = () => {
  const navigate = useNavigate();
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handle sticky CTA bar
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowStickyBar(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courseModules = [
    {
      id: 'intro',
      title: 'Course Introduction',
      duration: '3 min 50 sec',
      lessons: 1,
      description: 'Get a complete overview of what the course covers — from Illustrator essentials to creative practicals and bonus tips.',
      topics: ['Course Overview', 'Section 1: Illustrator Essentials Overview', 'Bonus Tips for Getting Started', 'Section 2: Creative Practical in Adobe Illustrator']
    },
    {
      id: 'section-a',
      title: 'Section A: Illustrator Essentials',
      duration: '1h 49min',
      lessons: 12,
      description: 'Master fundamental Adobe Illustrator tools, interface, and essential techniques for professional vector design.',
      topics: [
        'What is Adobe Illustrator? Vector vs Raster Graphics',
        'Artboards vs Canvas, Interface Overview & Essential Tools',
        'Working with Text, Colour, Strokes & Gradients',
        'Drawing Shapes & Using Pathfinder Tools',
        'Mastering Layers & Grouping',
        'Grouping & Alignment Techniques',
        'Creating Character Puppet with Basic Shapes',
        'Saving Files & Export Formats',
        'Templates & Keyboard Shortcuts',
        'Free Resources & Assets for Design',
        'Design Inspiration & Portfolio Building',
        'Clipping Masks: Illustrator vs Photoshop'
      ]
    },
    {
      id: 'section-b',
      title: 'Section B: Creative Practical Projects',
      duration: '1h 1min',
      lessons: 2,
      description: 'Apply your skills to real-world projects including professional logo design and 3D packaging.',
      topics: [
        'Wordmark Logo Design - Onie 2 Digital Cartoon Style',
        '3D Bottle Design with Map Art & Label Packaging'
      ]
    },
    {
      id: 'section-c',
      title: 'Section C: Advanced Design Projects',
      duration: '52 min',
      lessons: 2,
      description: 'Create professional flyers and marketing materials using advanced design principles and techniques.',
      topics: [
        'Flyer Design Part 1: Design Principles & Foundation',
        'Flyer Design Part 2: Advanced Techniques & Final Touches'
      ]
    }
  ];

  const courseFeatures = [
    { icon: Clock, text: '4h 36m of Content', subtext: '16 comprehensive video lessons' },
    { icon: Users, text: '500+ Students', subtext: 'Join our learning community' },
    { icon: Award, text: 'Certificate of Completion', subtext: 'Showcase your achievement' },
    { icon: Download, text: 'Downloadable Resources', subtext: 'Practice files and templates' }
  ];

  const learningOutcomes = [
    'Master the Adobe Illustrator interface and essential tools',
    'Create professional logos and brand identity designs',
    'Develop advanced vector illustration techniques',
    'Apply typography principles for stunning text designs',
    'Build a portfolio of real-world design projects',
    'Understand color theory and advanced coloring techniques',
    'Use Pathfinder tools for complex shape operations',
    'Create 3D packaging designs with Map Art',
    'Design professional flyers with proper hierarchy',
    'Export files in appropriate formats for web and print'
  ];

  const targetAudience = [
    {
      icon: Target,
      title: 'Complete Beginners',
      description: 'No prior experience needed - start from the basics'
    },
    {
      icon: Palette,
      title: 'Aspiring Designers',
      description: 'Build foundational skills for a design career'
    },
    {
      icon: Zap,
      title: 'Freelancers',
      description: 'Add vector design skills to your service offerings'
    },
    {
      icon: Globe,
      title: 'Brand Designers',
      description: 'Enhance your logo and branding capabilities'
    }
  ];

  const faqs = [
    {
      question: 'Can I follow along without prior experience?',
      answer: 'Absolutely! This course is designed for complete beginners. We start with the basics and gradually build up to advanced techniques.'
    },
    {
      question: 'Will I get a certificate?',
      answer: 'Yes, you\'ll receive a certificate of completion that you can add to your portfolio and LinkedIn profile.'
    },
    {
      question: 'Do I need to own Adobe Illustrator?',
      answer: 'Yes, you\'ll need access to Adobe Illustrator. Adobe offers a free trial, and we\'ll show you how to get started.'
    },
    {
      question: 'How long do I have access to the course?',
      answer: 'You have lifetime access to all course materials, including any future updates and additional content.'
    },
    {
      question: 'Are practice files included?',
      answer: 'Yes! We provide all the practice files, templates, and resources you need to follow along with every lesson.'
    }
  ];

  const handleStartCourse = () => {
    navigate('/course/adobe-illustrator-expert/intro');
  };

  const toggleModule = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero-section" className="relative py-12 md:py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                  🎨 Design Course
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Become an Adobe Illustrator Expert
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                  Master Vector Design, Branding, and Creative Illustration with Cre8tiverse
                </p>
              </div>

              {/* Course Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <feature.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                    <div className="text-sm font-medium">{feature.text}</div>
                    <div className="text-xs opacity-75">{feature.subtext}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={handleStartCourse}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center"
              >
                <Play className="w-6 h-6 mr-3" />
                Start Course
              </motion.button>
            </motion.div>

            {/* Right Content - Course Preview Video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="aspect-video bg-black rounded-lg mb-4 overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/BOD8cLbWhR4"
                    title="Adobe Illustrator Course Preview"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Course Preview</h3>
                <p className="text-white/80 mb-4">Get a sneak peek of what you'll learn in this comprehensive course</p>
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>4h 36m of content • 16 lessons</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Progress Bar Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgressBar />
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What You'll Learn
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                This comprehensive course takes you from complete beginner to advanced Adobe Illustrator user. 
                Master the tools and techniques used by professional designers worldwide through 16 detailed lessons.
              </p>
              
              <div className="space-y-4">
                {learningOutcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Course Highlights</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Interface Mastery</h4>
                    <p className="text-gray-600 text-sm">Complete workspace and tool understanding</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Typography Excellence</h4>
                    <p className="text-gray-600 text-sm">Professional text design and effects</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Logo Design</h4>
                    <p className="text-gray-600 text-sm">Create professional brand identities</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Real Projects</h4>
                    <p className="text-gray-600 text-sm">Hands-on portfolio-worthy work</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Vector Art</h4>
                    <p className="text-gray-600 text-sm">Advanced illustration techniques</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructor Bio Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Your Instructor
            </h2>
            <p className="text-xl text-gray-600">
              Learn from an industry expert with years of design experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img 
                  src="https://i.imgur.com/1UHbIBn.jpeg" 
                  alt="Samuel Aku"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">Samuel Aku</h3>
                <p className="text-accent font-semibold text-lg mb-4">Multimedia Educator & Creative Specialist at Cre8tiverse</p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Samuel is a passionate multimedia educator and creative specialist with over 8 years of experience in graphic design, 
                  branding, and digital illustration. As a key instructor at Cre8tiverse, he has helped thousands of students master 
                  Adobe Creative Suite and develop their creative careers. His expertise spans from logo design and brand identity 
                  to complex vector illustrations and digital art.
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>2000+ Students Taught</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 mr-2" />
                    <span>4.9/5 Average Rating</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="w-4 h-4 mr-2" />
                    <span>8+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Preview Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Course Curriculum
            </h2>
            <p className="text-xl text-gray-600">
              4 comprehensive sections • 16 lessons • 4h 36m total duration
            </p>
          </motion.div>

          <div className="space-y-4">
            {courseModules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center flex-1">
                    <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-1">{module.title}</h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="mr-4">{module.duration}</span>
                        <BookOpen className="w-4 h-4 mr-1" />
                        <span>{module.lessons} lesson{module.lessons !== 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>
                  {expandedModule === module.id ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedModule === module.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 bg-gray-50">
                        <p className="text-gray-700 mb-4">{module.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {module.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-accent mr-2" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Downloadable Resources
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get access to all the practice files, templates, and resources you need
            </p>
            
            <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
              <Download className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Complete Resource Package</h3>
              <p className="mb-6 opacity-90">
                Download all practice files, project templates, and bonus resources to follow along with every lesson
              </p>
              <motion.a
                href="https://tinyurl.com/ai-files-cre8"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                Download Resources
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Who This Course Is For
            </h2>
            <p className="text-xl text-gray-600">
              Perfect for anyone looking to master vector design and illustration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <audience.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{audience.title}</h3>
                <p className="text-gray-600">{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about the course
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Become an Adobe Illustrator Expert?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who have transformed their design skills with this comprehensive 16-lesson course
            </p>
            <motion.button
              onClick={handleStartCourse}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-accent/90 text-white px-12 py-4 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center mx-auto"
            >
              <Play className="w-6 h-6 mr-3" />
              Start Course Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div>
                <h3 className="font-bold text-primary">Become an Adobe Illustrator Expert</h3>
                <p className="text-sm text-gray-600">16 lessons • 4h 36m • Master vector design</p>
              </div>
              <motion.button
                onClick={handleStartCourse}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-bold flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Course
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CourseDetail;