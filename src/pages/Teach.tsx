import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  DollarSign, 
  Globe, 
  CheckCircle, 
  Upload, 
  Play, 
  Award,
  Palette,
  Monitor,
  Video,
  Zap,
  Box,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  X,
  User,
  Mail,
  FileText,
  Briefcase
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Teach = () => {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    expertise: '',
    bio: '',
    courseIdea: '',
    portfolio: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Application submitted! We\'ll get back to you within 48 hours.');
      setIsSubmitting(false);
      setShowModal(false);
      setFormData({
        fullName: '',
        email: '',
        expertise: '',
        bio: '',
        courseIdea: '',
        portfolio: ''
      });
    }, 2000);
  };

  const benefits = [
    {
      icon: Award,
      title: 'Build Your Brand',
      description: 'Share your passion, establish authority, and gain recognition in the creative community.'
    },
    {
      icon: DollarSign,
      title: 'Earn While You Teach',
      description: 'Monetize your knowledge with flexible pricing options and performance bonuses.'
    },
    {
      icon: Globe,
      title: 'Inspire Creatives Worldwide',
      description: 'Reach a global audience hungry for digital and design skills.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Sign Up & Verify',
      description: 'Complete your instructor application and get verified by our team.'
    },
    {
      number: '02',
      title: 'Upload Course Outline',
      description: 'Submit your course outline and sample content for review.'
    },
    {
      number: '03',
      title: 'Get Approved',
      description: 'Our team reviews your application and provides feedback.'
    },
    {
      number: '04',
      title: 'Publish & Earn',
      description: 'Start recording, publish your course, and earn from enrollments.'
    }
  ];

  const expertiseAreas = [
    { icon: Palette, title: 'Graphic Designers', description: 'Logo design, branding, print media' },
    { icon: Monitor, title: 'UI/UX Designers', description: 'User interface, user experience, prototyping' },
    { icon: Video, title: 'Video Editors', description: 'Motion graphics, color grading, storytelling' },
    { icon: Zap, title: 'Animators', description: '2D/3D animation, character design, VFX' },
    { icon: Box, title: '3D Modellers', description: 'Architectural visualization, product modeling' },
    { icon: TrendingUp, title: 'Digital Marketers', description: 'Social media, SEO, content strategy' }
  ];

  const faqs = [
    {
      question: 'Do I need to be a certified teacher?',
      answer: 'No formal teaching certification is required. We value industry experience and the ability to share knowledge effectively.'
    },
    {
      question: 'How do I earn on the platform?',
      answer: 'You earn a percentage of course sales, with bonuses for high-performing courses and student engagement.'
    },
    {
      question: 'What support is available?',
      answer: 'We provide technical support, marketing assistance, and educational resources to help you succeed.'
    },
    {
      question: 'Can I teach more than one course?',
      answer: 'Absolutely! We encourage instructors to create multiple courses in their areas of expertise.'
    },
    {
      question: 'How long does the approval process take?',
      answer: 'Our review process typically takes 3-5 business days. We\'ll provide feedback and next steps via email.'
    },
    {
      question: 'What equipment do I need?',
      answer: 'Basic recording equipment is sufficient. We provide guidelines and recommendations for creating quality content.'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section - Blue with main content */}
      <section className="relative py-20 md:py-32 bg-primary text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Join a Movement of Creative Mentors.
                <br />
                <span className="text-accent">Inspire, Impact, Earn.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
                Join the Cre8tiverse Faculty — share your skills, earn income, and shape the next generation of multimedia creators.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - White with blue border */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border-4 border-primary rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                "Teaching on Cre8tiverse has allowed me to reach thousands of students worldwide while building my personal brand."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-6">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-primary">Oluwatobiloba Okunogbe</p>
                  <p className="text-accent text-lg font-medium">Web Design Instructor</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Teach Section - Light Gray */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Teach on Cre8tiverse?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community of passionate educators and unlock new opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - White */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to start your teaching journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 transform -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Teach Section - Light Gray */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Who Can Teach?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We welcome experts from all creative and technical backgrounds
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - White */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about teaching on Cre8tiverse
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-primary">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Matching courses page style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div 
              className="relative bg-primary p-6 md:p-12 rounded-2xl md:rounded-3xl text-white text-center overflow-hidden"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/90"></div>
              
              <div className="relative">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                  Ready to Share Your Skills?
                </h3>
                <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of instructors who are already making an impact and earning income through teaching.
                </p>
                <motion.button
                  onClick={() => setShowModal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Apply Here
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructor Sign-Up Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary">Become an Instructor</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Expertise *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <select
                      name="expertise"
                      value={formData.expertise}
                      onChange={handleInputChange}
                      required
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select your expertise</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="video-editing">Video Editing</option>
                      <option value="animation">Animation</option>
                      <option value="3d-modeling">3D Modeling</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="web-design">Web Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brief Bio *
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your background and experience..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Idea/Title *
                  </label>
                  <input
                    type="text"
                    name="courseIdea"
                    value={formData.courseIdea}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="What would you like to teach?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio/CV Link
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="https://your-portfolio.com"
                  />
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Teach;