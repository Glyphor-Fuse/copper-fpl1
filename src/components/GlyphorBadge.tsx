import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const GlyphorBadge = () => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('glyphor-badge-hidden');
    }
    return false;
  });

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('glyphor-badge-hidden', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50 flex items-center gap-2 pl-3 pr-1 py-1.5 bg-zinc-900 rounded-full shadow-lg border border-zinc-800"
        >
          <span className="text-xs font-medium text-zinc-400 flex items-center gap-1.5">
            Made with 
            <img 
              src="/glyphor-logo-white.png" 
              alt="Glyphor" 
              className="h-3.5 w-auto opacity-90" 
            />
            Fuse
          </span>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-zinc-800 rounded-full transition-colors text-zinc-500 hover:text-zinc-300"
          >
            <X size={12} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};