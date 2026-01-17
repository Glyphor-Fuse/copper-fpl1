import { motion } from 'framer-motion';

const products = [
  {
    name: "Ethiopian Yirgacheffe",
    price: "$24.00",
    desc: "Floral, Bergamot, Lemon",
    image: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/5926957/pexels-photo-5926957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Overhead shot of coffee beans packed in brown paper bags, showcasing rich texture and freshness."
    width="2048"
    height="2048"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/coffee-beans-in-brown-box-5926957/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Fatih Arslan on Pexels
    </a>
  </div>
</div>"
  },
  {
    name: "Oat Flat White",
    price: "$5.50",
    desc: "Velvety microfoam, double shot",
    image: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/544113/pexels-photo-544113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Top view of a beautifully crafted latte with intricate art in a ceramic cup on a neutral background."
    width="2976"
    height="2976"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/coffee-cup-with-latte-art-froth-on-white-surface-544113/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Tirachard Kumtanom on Pexels
    </a>
  </div>
</div>"
  },
  {
    name: "Cold Brew Reserve",
    price: "$6.00",
    desc: "Steeped 24h, chocolate notes",
    image: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/28944483/pexels-photo-28944483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Chilled cold brew coffee in a plastic cup with a straw, perfect for a hot summer day."
    width="5740"
    height="5740"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/refreshing-cold-brew-coffee-on-ice-28944483/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Kunal Lakhotia on Pexels
    </a>
  </div>
</div>"
  }
];

export const MenuSection = () => {
  return (
    <section className="py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-200 pb-8">
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Selection</span>
            <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight mt-2">
              WEEKLY<br />HIGHLIGHTS
            </h2>
          </div>
          <button className="hidden md:block text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium">
            View Full Menu
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-zinc-100 mb-6 relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium text-zinc-900 tracking-tight">{item.name}</h3>
                  <p className="text-zinc-500 text-sm mt-1">{item.desc}</p>
                </div>
                <span className="text-zinc-900 font-mono text-sm">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};