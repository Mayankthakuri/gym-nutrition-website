import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: 'Soy Protein',
    description: 'Plant-based isolate for vegetarians',
    image: '/images/soy-protein-isolate.png',
    bg: 'from-amber-900 to-amber-950',
    link: '#products',
    tag: 'Veg',
  },
  {
    title: 'Whey Protein',
    description: 'Gold quality with digestive enzymes',
    image: '/images/whey-protein-gold.png',
    bg: 'from-yellow-900 to-yellow-950',
    link: '#products',
    tag: 'Best Seller',
  },
  {
    title: 'Performance Whey',
    description: 'Premium whey for serious athletes',
    image: '/images/performance-whey.png',
    bg: 'from-red-900 to-red-950',
    link: '#products',
    tag: 'Premium',
  },
];

export default function Collections() {
  return (
    <section id="collections" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-2">Browse</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Shop by Category</h2>
          </div>
          <a href="#products" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-brand-orange hover:text-brand-orange-dark transition-colors">
            View All <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col, i) => (
            <a key={i} href={col.link} className={`group relative bg-gradient-to-br ${col.bg} rounded-2xl overflow-hidden aspect-[4/5] flex flex-col justify-end p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <span className="absolute top-4 left-4 bg-brand-yellow text-brand-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{col.tag}</span>
              <img src={col.image} alt={col.title} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
              <div className="relative z-10">
                <h3 className="text-white text-xl font-bold mb-1">{col.title}</h3>
                <p className="text-white/60 text-sm">{col.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
