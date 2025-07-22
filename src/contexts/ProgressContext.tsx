import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProgressContextType {
  completedLessons: string[];
  markLessonComplete: (lessonId: string) => void;
  markLessonIncomplete: (lessonId: string) => void;
  getProgressPercentage: () => number;
  isLessonCompleted: (lessonId: string) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  // Total number of lessons in the course: 16 lessons (no project submission counted)
  // Intro + A1-A12 (13 lessons) + B1-B2 (2 lessons) + C1-C2 (2 lessons) = 16 total
  const totalLessons = 16;

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('course-progress');
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setCompletedLessons(parsed);
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('course-progress', JSON.stringify(completedLessons));
  }, [completedLessons]);

  const markLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => {
      if (!prev.includes(lessonId)) {
        return [...prev, lessonId];
      }
      return prev;
    });
  };

  const markLessonIncomplete = (lessonId: string) => {
    setCompletedLessons(prev => prev.filter(id => id !== lessonId));
  };

  const getProgressPercentage = () => {
    return Math.round((completedLessons.length / totalLessons) * 100);
  };

  const isLessonCompleted = (lessonId: string) => {
    return completedLessons.includes(lessonId);
  };

  return (
    <ProgressContext.Provider value={{
      completedLessons,
      markLessonComplete,
      markLessonIncomplete,
      getProgressPercentage,
      isLessonCompleted
    }}>
      {children}
    </ProgressContext.Provider>
  );
};