import { motion } from 'framer-motion';
import { Menu, ShoppingBag } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-start pointer-events-none"
    >
      <div className="pointer-events-auto">
        <span className="block text-xl font-bold tracking-tighter leading-none text-zinc-900 mix-blend-difference">
          VESPER
          <br />
          COFFEE.
        </span>
      </div>

      <div className="flex gap-4 pointer-events-auto">
        <button className="hidden md:flex items-center justify-center px-6 py-2.5 bg-zinc-900/5 backdrop-blur-md border border-zinc-900/10 rounded-full text-sm font-medium hover:bg-zinc-900 hover:text-zinc-50 transition-all duration-300">
          Order Ahead
        </button>
        
        <button className="w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-md border border-zinc-200 rounded-full shadow-sm hover:scale-105 transition-transform">
          <ShoppingBag className="w-4 h-4 text-zinc-900" />
        </button>
        
        <button className="w-10 h-10 flex items-center justify-center bg-zinc-900 text-zinc-50 rounded-full hover:scale-105 transition-transform">
          <Menu className="w-4 h-4" />
        </button>
      </div>
    </motion.nav>
  );
};