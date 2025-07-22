import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const FloatingChatPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Auto-dismiss after 10 seconds, but pause if hovered
    let dismissTimer: NodeJS.Timeout;

    const startDismissTimer = () => {
      dismissTimer = setTimeout(() => {
        setIsVisible(false);
      }, 10000);
    };

    const clearDismissTimer = () => {
      if (dismissTimer) {
        clearTimeout(dismissTimer);
      }
    };

    if (!isHovered) {
      startDismissTimer();
    } else {
      clearDismissTimer();
    }

    return () => clearDismissTimer();
  }, [isVisible, isHovered]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed bottom-32 right-20 md:bottom-36 md:right-24 z-40 max-w-xs"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Callout Bubble */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 w-8 h-8 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-md"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              <X size={16} />
            </button>

            {/* Message Content */}
            <div className="text-center">
              <p className="text-gray-800 font-medium text-sm leading-relaxed">
                💬 Got a project in mind? Let's talk!
              </p>
            </div>

            {/* Pointer Arrow pointing to WhatsApp icon */}
            <div className="absolute bottom-0 right-4 transform translate-y-full">
              <div className="w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-white drop-shadow-sm"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingChatPopup;