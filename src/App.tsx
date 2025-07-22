import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ProgressProvider } from './contexts/ProgressContext';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingChatPopup from './components/FloatingChatPopup';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import CourseIntro from './pages/CourseIntro';
import CourseLesson from './pages/CourseLesson';
import CourseLessonA2 from './pages/CourseLessonA2';
import CourseLessonA3 from './pages/CourseLessonA3';
import CourseLessonA4 from './pages/CourseLessonA4';
import CourseLessonA5 from './pages/CourseLessonA5';
import CourseLessonA6 from './pages/CourseLessonA6';
import CourseLessonA7 from './pages/CourseLessonA7';
import CourseLessonA8 from './pages/CourseLessonA8';
import CourseLessonA9 from './pages/CourseLessonA9';
import CourseLessonA10 from './pages/CourseLessonA10';
import CourseLessonA11 from './pages/CourseLessonA11';
import CourseLessonA12 from './pages/CourseLessonA12';
import CourseLessonB1 from './pages/CourseLessonB1';
import CourseLessonB2 from './pages/CourseLessonB2';
import CourseLessonC1 from './pages/CourseLessonC1';
import CourseLessonC2 from './pages/CourseLessonC2';
import ProjectSubmission from './pages/ProjectSubmission';
import Teach from './pages/Teach';
import BecomeFreelancer from './pages/BecomeFreelancer';
import StartRequest from './pages/StartRequest';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ProgressProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar activeSection={activeSection} />
          <Toaster position="top-center" />
          <Routes>
            <Route path="/" element={
              <main>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="services"><Services /></section>
                <section id="portfolio"><Portfolio /></section>
                <section id="contact"><Contact /></section>
              </main>
            } />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/adobe-illustrator-expert" element={<CourseDetail />} />
            <Route path="/course/adobe-illustrator-expert/intro" element={<CourseIntro />} />
            <Route path="/course/adobe-illustrator-expert/lesson/a1" element={<CourseLesson />} />
            <Route path="/course/adobe-illustrator-expert/lesson/a2" element={<CourseLessonA2 />} />
            <Route path="/course/adobe-illustrator-expert/lesson/a3" element={<CourseLessonA3 />} />
            <Route path="/course/adobe-illustrator-expert/lesson/a4" element={<CourseLessonA4 />} />
            <Route path="/course/adobe-illustrator-expert/lesson/a5" element={<CourseLessonA5 />} />
            <Route path="/course/adobe-illustrator-expert/lesson/a6" element={<CourseLessonA6 />} />
            <Route path="/course/adobe-illustrator-expert/lesson/a7" element={<CourseLessonA7 />} />
            <Route path="/course/adobe-illustrator-expert/lesson/a8" element={<CourseLessonA8 />} />
            <Route path="/course/adobe-illustrator-expert/lesson/a9" element={<CourseLessonA9 />} />
            <Route path="/course/adobe-illustrator-expert/lesson/a10" element={<CourseLessonA10 />} />
            <Route path="/course/adobe-illustrator-expert/lesson/a11" element={<CourseLessonA11 />} />
            <Route path="/course/adobe-illustrator-expert/lesson/a12" element={<CourseLessonA12 />} />
            <Route path="/course/adobe-illustrator-expert/lesson/b1" element={<CourseLessonB1 />} />
            <Route path="/course/adobe-illustrator-expert/lesson/b2" element={<CourseLessonB2 />} />
            <Route path="/course/adobe-illustrator-expert/lesson/c1" element={<CourseLessonC1 />} />
            <Route path="/course/adobe-illustrator-expert/lesson/c2" element={<CourseLessonC2 />} />
            <Route path="/course/adobe-illustrator-expert/submit-project" element={<ProjectSubmission />} />
            <Route path="/teach" element={<Teach />} />
            <Route path="/become-a-freelancer" element={<BecomeFreelancer />} />
            <Route path="/start-request" element={<StartRequest />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
          <WhatsAppButton />
          <FloatingChatPopup />
          <Footer />
        </div>
      </Router>
    </ProgressProvider>
  );
}

export default App;