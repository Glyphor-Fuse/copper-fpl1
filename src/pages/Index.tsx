import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { MenuSection } from '../components/MenuSection';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

export default function Index() {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <Navbar />
      <Hero />
      
      {/* The Roast Section - Asymmetric Layout */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-square bg-zinc-200 rounded-sm overflow-hidden"
              >
                <img 
                  src="https://images.pexels.com/photos/15548856/pexels-photo-15548856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Roasting Process" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Floating detail card */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute -bottom-12 -right-12 w-64 p-6 bg-zinc-900 text-zinc-50 shadow-2xl hidden md:block"
              >
                <span className="block text-4xl font-bold mb-1">204°C</span>
                <span className="text-xs text-zinc-400 font-mono uppercase">Target Drop Temp</span>
              </motion.div>
            </div>
            
            <div className="md:pl-12">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 block">The Roast</span>
              <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight leading-none mb-8">
                SOURCED WITH<br />INTENTION.
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                We travel to the source. From the highlands of Ethiopia to the volcanic soil of Guatemala, we build direct relationships with farmers who share our obsession with quality. Small batch roasting in San Francisco ensures every bean tells its story.
              </p>
              <a href="/sourcing" className="inline-flex items-center text-zinc-900 font-medium border-b border-zinc-900 pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-colors">
                Read our sourcing philosophy
              </a>
            </div>
          </div>
        </div>
      </section>

      <MenuSection />

      {/* Vibe Check - Large Imagery */}
      <section className="py-24">
        <div className="w-full overflow-hidden">
          <div className="flex gap-4 min-w-full overflow-x-auto pb-8 px-6 no-scrollbar">
            {[
              { id: 1, description: "Minimalist coffee shop interior with natural lighting" },
              { id: 2, description: "Barista crafting a specialty espresso drink" },
              { id: 3, description: "Artisan coffee beans in a ceramic bowl" },
              { id: 4, description: "Cozy seating area with industrial design elements" }
            ].map((item) => (
              <div key={item.id} className="min-w-[300px] md:min-w-[400px] aspect-[3/4] bg-zinc-100 rounded-sm overflow-hidden relative group">
                <img 
                  src="https://images.pexels.com/photos/33964550/pexels-photo-33964550.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section - Brutalist Grid */}
      <section className="py-32 bg-zinc-900 text-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-zinc-800">
            {/* Map Placeholder */}
            <div className="aspect-square md:aspect-auto bg-zinc-800 relative overflow-hidden group">
               <img 
                src="https://images.pexels.com/photos/10784419/pexels-photo-10784419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                alt="Map of San Francisco Hayes Valley location"
               />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <MapPin className="text-zinc-900 w-6 h-6" />
                 </div>
               </div>
            </div>

            {/* Info */}
            <div className="p-12 md:p-24 flex flex-col justify-center border-l border-zinc-800">
              <h2 className="text-4xl font-bold tracking-tight mb-12">Visit Us</h2>
              
              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-3 text-zinc-400 mb-4">
                    <MapPin className="w-5 h-5" />
                    <span className="font-mono text-sm uppercase tracking-wide">Hayes Valley</span>
                  </div>
                  <p className="text-2xl font-light">
                    432 Octavia St,<br />
                    San Francisco, CA 94102
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 text-zinc-400 mb-4">
                    <Clock className="w-5 h-5" />
                    <span className="font-mono text-sm uppercase tracking-wide">Hours</span>
                  </div>
                  <ul className="space-y-2 text-xl font-light">
                    <li className="flex justify-between w-full max-w-xs">
                      <span>Mon - Fri</span>
                      <span>7am — 6pm</span>
                    </li>
                    <li className="flex justify-between w-full max-w-xs text-zinc-400">
                      <span>Sat - Sun</span>
                      <span>8am — 7pm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}