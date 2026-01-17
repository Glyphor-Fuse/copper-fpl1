import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24 border-b border-zinc-800 pb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              STAY<br />CAFFEINATED.
            </h2>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-b border-zinc-700 py-2 w-64 text-zinc-300 focus:outline-none focus:border-zinc-50 transition-colors"
              />
              <button className="text-zinc-50 hover:text-zinc-300">
                <ArrowUpRight />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-zinc-50 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-zinc-50 transition-colors">Shop Coffee</a></li>
              <li><a href="#" className="hover:text-zinc-50 transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-zinc-50 transition-colors">Wholesale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">Social</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-zinc-50 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-zinc-50 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-zinc-50 transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end text-xs text-zinc-600 font-mono uppercase tracking-wide">
          <span>© 2024 Vesper Coffee Roasters</span>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};