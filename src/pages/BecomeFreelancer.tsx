import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  DollarSign, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  X, 
  User, 
  Mail, 
  Phone,
  Upload,
  Palette,
  Video,
  Edit,
  Mic,
  Share2,
  Monitor,
  GraduationCap,
  ArrowRight,
  Star,
  Play
} from 'lucide-react';
import toast from 'react-hot-toast';

const BecomeFreelancer = () => {
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
    skillArea: '',
    portfolioUrl: '',
    linkedinUrl: '',
    bio: '',
    remoteWork: false,
    communityEvents: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thanks for joining! Our team will review and connect with you shortly.');
      setIsSubmitting(false);
      setShowModal(false);
      setFormData({
        fullName: '',
        email: '',
        skillArea: '',
        portfolioUrl: '',
        linkedinUrl: '',
        bio: '',
        remoteWork: false,
        communityEvents: false
      });
    }, 2000);
  };

  const benefits = [
    {
      icon: Briefcase,
      title: 'Get Matched with Jobs',
      description: 'We bring the clients — you bring the skills.'
    },
    {
      icon: Users,
      title: 'Grow with a Creative Community',
      description: 'Access exclusive groups, events, and talent showcases.'
    },
    {
      icon: DollarSign,
      title: 'Earn on Your Own Terms',
      description: 'Choose what fits your schedule and skillset.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Apply & Submit Portfolio',
      description: 'Submit your application with your best work samples and professional background.'
    },
    {
      number: '02',
      title: 'Get Vetted & Added to Our Talent Pool',
      description: 'Our team reviews your profile and adds qualified freelancers to our network.'
    },
    {
      number: '03',
      title: 'Get Matched with Opportunities',
      description: 'We connect you with projects that match your skills and availability.'
    },
    {
      number: '04',
      title: 'Deliver, Get Paid, and Build Your Reputation',
      description: 'Complete projects successfully and build long-term client relationships.'
    }
  ];

  const skillAreas = [
    {
      icon: Palette,
      title: 'Motion Designers',
      description: 'Create dynamic animations and motion graphics'
    },
    {
      icon: Edit,
      title: 'Graphic Artists',
      description: 'Design visual content and brand materials'
    },
    {
      icon: Share2,
      title: 'Content Creators',
      description: 'Develop engaging content across platforms'
    },
    {
      icon: Video,
      title: 'Video Editors',
      description: 'Edit and produce professional video content'
    },
    {
      icon: Mic,
      title: 'Voice-over Artists',
      description: 'Provide professional voice narration services'
    },
    {
      icon: Share2,
      title: 'Social Media Designers',
      description: 'Create compelling social media visuals'
    },
    {
      icon: Monitor,
      title: 'Frontend Designers',
      description: 'Build beautiful and functional web interfaces'
    },
    {
      icon: GraduationCap,
      title: 'eLearning Designers',
      description: 'Design educational content and courses'
    }
  ];

  const faqs = [
    {
      question: 'How do I get selected for jobs?',
      answer: 'We match freelancers based on skills, experience, availability, and project requirements. Having a strong portfolio and positive client feedback increases your chances of being selected.'
    },
    {
      question: 'Is this full-time or part-time?',
      answer: 'Both! You can choose to work full-time or part-time based on your availability. Many of our freelancers work on projects alongside their regular jobs.'
    },
    {
      question: 'Can I set my own rates?',
      answer: 'Yes, you have full control over your pricing. We provide market rate guidelines to help you price competitively while ensuring fair compensation for your work.'
    },
    {
      question: 'Will I work directly with clients?',
      answer: 'You\'ll work closely with clients while having Cre8tiverse support for project management, communication, and any issues that may arise.'
    },
    {
      question: 'Do I have to pay to join?',
      answer: 'No, joining our freelancer network is completely free. We only succeed when you succeed, so there are no upfront fees or membership costs.'
    },
    {
      question: 'What support does Cre8tiverse offer freelancers?',
      answer: 'We provide project management tools, client communication support, dispute resolution, payment protection, and resources to help you grow your freelance business.'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Motion Designer',
      quote: 'Cre8tiverse connected me with amazing clients and helped me build a sustainable freelance career. The community support is incredible!',
      avatar: '👨‍💻'
    },
    {
      name: 'Sarah Martinez',
      role: 'Graphic Artist',
      quote: 'The quality of projects and clients through Cre8tiverse is outstanding. I\'ve been able to work on my dream projects while maintaining work-life balance.',
      avatar: '👩‍🎨'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Work on Creative Projects.
                <br />
                <span className="text-accent">Join Our Freelance Network.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
                Become part of the Cre8tiverse freelance community — get referred to real jobs, collaborate with peers, and build your portfolio.
              </p>

              {/* Tool Logos Strip */}
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <span className="text-sm font-medium">Trusted by freelancers using:</span>
                <div className="flex items-center gap-6 text-sm">
                  <span>Adobe Creative Suite</span>
                  <span>•</span>
                  <span>Figma</span>
                  <span>•</span>
                  <span>Sketch</span>
                  <span>•</span>
                  <span>Blender</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Freelance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Freelance with Cre8tiverse
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a platform designed to help creative professionals thrive
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to join our freelance network
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
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 transform -translate-x-1/2">
                    <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Who We're Looking For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We welcome talented professionals across creative disciplines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillAreas.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Spotlight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Community Spotlight
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Success stories from our freelance community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">{testimonial.name}</h4>
                    <p className="text-accent font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about freelancing with us
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
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
                      <div className="px-6 pb-6 text-gray-600 bg-gray-50">
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

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div 
              className="relative bg-primary p-6 md:p-12 rounded-2xl md:rounded-3xl text-white text-center overflow-hidden"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/90"></div>
              
              <div className="relative">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                  Start Freelancing with Us Today.
                </h3>
                <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Let your skills speak. Be seen. Be hired.
                </p>
                <motion.button
                  onClick={() => setShowModal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Apply Now to Join
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Freelancer Registration Modal */}
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
                <h3 className="text-2xl font-bold text-primary">Join Our Freelance Network</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
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
                    Email *
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
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Skill Area *
                  </label>
                  <select
                    name="skillArea"
                    value={formData.skillArea}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select your primary skill area</option>
                    <option value="motion-design">Motion Design</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="content-creation">Content Creation</option>
                    <option value="video-editing">Video Editing</option>
                    <option value="voice-over">Voice-over</option>
                    <option value="social-media-design">Social Media Design</option>
                    <option value="frontend-design">Frontend Design</option>
                    <option value="elearning-design">eLearning Design</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio/CV Upload *
                  </label>
                  <input
                    type="url"
                    name="portfolioUrl"
                    value={formData.portfolioUrl}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="https://your-portfolio.com or drive.google.com/your-cv"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn (optional)
                  </label>
                  <input
                    type="url"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Short Bio *
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your experience and what makes you unique..."
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remoteWork"
                      name="remoteWork"
                      checked={formData.remoteWork}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="remoteWork" className="ml-2 text-sm text-gray-700">
                      Available for remote work
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="communityEvents"
                      name="communityEvents"
                      checked={formData.communityEvents}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="communityEvents" className="ml-2 text-sm text-gray-700">
                      Interested in community events
                    </label>
                  </div>
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

export default BecomeFreelancer;