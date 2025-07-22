import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Trophy } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';

interface ProgressBarProps {
  className?: string;
  showDetails?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ className = '', showDetails = true }) => {
  const { getProgressPercentage, completedLessons } = useProgress();
  const percentage = getProgressPercentage();
  const totalLessons = 16; // 16 lessons total (no project submission counted)

  return (
    <div className={`bg-white rounded-xl shadow-lg p-4 md:p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-primary flex items-center">
          <Trophy className="w-5 h-5 mr-2 text-accent" />
          Course Progress
        </h3>
        <div className="flex items-center">
          <span className="text-2xl font-bold text-primary">{percentage}%</span>
          {percentage === 100 && (
            <CheckCircle className="w-6 h-6 text-green-500 ml-2" />
          )}
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="relative w-full bg-gray-200 rounded-full h-3 mb-4">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        {percentage > 0 && (
          <motion.div
            className="absolute top-0 right-0 h-full w-1 bg-white rounded-full shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ right: `${100 - percentage}%` }}
          />
        )}
      </div>
      
      {showDetails && (
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{completedLessons.length} of {totalLessons} lessons completed</span>
          {percentage === 100 ? (
            <span className="text-green-600 font-semibold">🎉 Course Complete!</span>
          ) : (
            <span>{totalLessons - completedLessons.length} lessons remaining</span>
          )}
        </div>
      )}
      
      {percentage === 100 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-center"
        >
          <p className="text-green-700 font-semibold">
            🏆 Congratulations! You've completed the entire course!
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ProgressBar;