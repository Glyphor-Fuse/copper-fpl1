import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end pb-12 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://images.pexels.com/photos/11069882/pexels-photo-11069882.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
          alt="Barista pouring coffee" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-transparent opacity-90" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block text-xs font-mono tracking-widest uppercase text-zinc-500 mb-4">
                Est. 2024 — San Francisco
              </span>
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-zinc-900 mb-8">
                MODERN<br />
                RITUALS.
              </h1>
            </motion.div>
          </div>

          <div className="md:col-span-4 flex flex-col items-start justify-end gap-6 md:pb-4">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg text-zinc-600 leading-relaxed max-w-sm"
            >
              We believe coffee is more than caffeine. It's a moment of clarity in a chaotic world. Sourced ethically, roasted meticulously.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 pl-6 pr-4 py-4 bg-zinc-900 text-zinc-50 rounded-full transition-all hover:shadow-2xl hover:shadow-zinc-900/20"
            >
              <span className="font-medium tracking-wide">Start Order</span>
              <div className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-full group-hover:bg-zinc-700 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};