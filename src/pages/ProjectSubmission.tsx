import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  CheckCircle, 
  X, 
  Award, 
  FileText, 
  Image, 
  ArrowLeft,
  Download,
  Info,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import Breadcrumb from '../components/Breadcrumb';

const ProjectSubmission = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const { isLessonCompleted, markLessonComplete, markLessonIncomplete } = useProgress();
  const isCompleted = isLessonCompleted('submit');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    course: 'Become an Adobe Illustrator Expert',
    description: ''
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Generate preview URLs for selected files
  useEffect(() => {
    if (!files) return;
    
    const urls: string[] = [];
    for (let i = 0; i < Math.min(files.length, 3); i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        urls.push(url);
      } else {
        // For non-image files, we'll just show a placeholder
        urls.push('');
      }
    }
    
    setPreviewUrls(urls);
    
    // Cleanup function to revoke object URLs
    return () => {
      urls.forEach(url => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [files]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Check if any file exceeds the size limit (50MB)
      const hasLargeFile = Array.from(e.target.files).some(file => file.size > 50 * 1024 * 1024);
      
      if (hasLargeFile) {
        alert('One or more files exceed the 50MB size limit. Please select smaller files.');
        e.target.value = '';
        return;
      }
      
      // Check if more than 3 files are selected
      if (e.target.files.length > 3) {
        alert('You can upload a maximum of 3 files. Please select fewer files.');
        e.target.value = '';
        return;
      }
      
      setFiles(e.target.files);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!files || files.length === 0) {
      alert('Please select at least one file to upload.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      // Mark project submission as complete
      markLessonComplete('submit');
    }, 2000);
  };

  const handleBackToCourse = () => {
    navigate('/course/adobe-illustrator-expert');
  };

  const breadcrumbItems = [
    { label: 'Courses', path: '/courses' },
    { label: 'Adobe Illustrator Expert', path: '/course/adobe-illustrator-expert' },
    { label: 'Submit Your Project' }
  ];

  const sampleProjects = [
    {
      title: 'Logo Design',
      image: 'https://i.imgur.com/YMbXwDu.jpeg',
      description: 'A wordmark logo design for a digital brand'
    },
    {
      title: '3D Bottle Packaging',
      image: 'https://i.imgur.com/sgz0VtM.jpeg',
      description: 'Product packaging with custom label design'
    },
    {
      title: 'Flyer Design',
      image: 'https://i.imgur.com/YJmLLLS.jpeg',
      description: 'Professional event flyer with brand elements'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Project Submitted Successfully!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for submitting your project! Our team will review it and provide feedback shortly.
            </p>
            <div className="space-y-4">
              <motion.button
                onClick={handleBackToCourse}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 mr-4"
              >
                Back to Course
              </motion.button>
              <motion.a
                href="https://wa.link/d6o4yj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Chat with us about your experience
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Left Column - Instructions */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Submit Your Adobe Illustrator Project
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Now it's your turn to shine! Upload the designs you created during this course — flyers, logos, 3D artwork, or any creative piece you're proud of. This is your practical proof of mastery.
                </p>
                
                <div className="bg-primary/5 rounded-lg p-4 mb-6 border-l-4 border-primary">
                  <h3 className="text-primary font-semibold mb-2 flex items-center">
                    <Info className="w-5 h-5 mr-2" />
                    Submission Guidelines
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Submit up to 3 files (max 50MB each)</li>
                    <li>Accepted formats: PNG, JPG, PDF, SVG, AI, PSD</li>
                    <li>Include a brief description of your project</li>
                    <li>Our team will review and provide feedback</li>
                  </ul>
                </div>
              </div>
              
              {/* Sample Projects */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">Sample Submissions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {sampleProjects.map((project, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                      <div className="h-32 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <h4 className="font-semibold text-primary text-sm">{project.title}</h4>
                        <p className="text-xs text-gray-600">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Submission Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold text-primary mb-6">
              Upload Your Project
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                  Course Taken
                </label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  value={formData.course}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              
              <div>
                <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Your Project *
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <div className="flex flex-col items-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="files"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/80"
                        >
                          <span>Upload files</span>
                          <input
                            id="files"
                            name="files"
                            type="file"
                            className="sr-only"
                            onChange={handleFileChange}
                            multiple
                            accept=".png,.jpg,.jpeg,.pdf,.svg,.ai,.psd"
                            required
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, PDF, SVG, AI, PSD up to 50MB (max 3 files)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* File Preview */}
              {previewUrls.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Selected Files:</p>
                  <div className="grid grid-cols-3 gap-3">
                    {Array.from(files || []).slice(0, 3).map((file, index) => (
                      <div key={index} className="relative border border-gray-200 rounded-lg overflow-hidden">
                        {file.type.startsWith('image/') && previewUrls[index] ? (
                          <div className="h-24 bg-gray-100">
                            <img
                              src={previewUrls[index]}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="h-24 bg-gray-100 flex items-center justify-center">
                            <FileText className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                        <div className="p-2 text-xs truncate">{file.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description / Notes (Optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your project, the techniques you used, and any challenges you faced..."
                />
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-yellow-700">
                  By submitting your project, you agree to allow Cre8tiverse to provide feedback and potentially showcase your work (with proper attribution) in our gallery.
                </p>
              </div>
              
              <div className="flex gap-4 pt-4">
                <motion.button
                  type="button"
                  onClick={handleBackToCourse}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 font-medium"
                >
                  Back to Course
                </motion.button>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !files}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Project'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSubmission;