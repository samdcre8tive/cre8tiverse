import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.link/bhsgxt"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-[#25D366] hover:bg-accent text-white p-3 rounded-full shadow-lg transition-all duration-300">
        <Icon icon="logos:whatsapp" className="w-7 h-7" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;