import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    name: 'BIoton Soy Protein Isolate',
    flavor: 'Rich Chocolate',
    weight: '1 Kg',
    image: '/images/soy-protein-isolate.png',
    rating: 4.5,
    reviews: 128,
    badge: 'Plant-Based',
    bg: 'from-amber-900/10 via-amber-800/5 to-transparent',
  },
  {
    name: 'BIoton 100% Whey Protein',
    flavor: 'Rich Chocolate | Gold Quality',
    weight: '4.54 Kg (10 LBS)',
    image: '/images/whey-protein-gold.png',
    rating: 4.8,
    reviews: 342,
    badge: 'Best Seller',
    bg: 'from-yellow-900/10 via-yellow-800/5 to-transparent',
  },
  {
    name: 'BIoton Performance Whey',
    flavor: 'Rich Chocolate',
    weight: '4.54 Kg (10 LBS)',
    image: '/images/performance-whey.png',
    rating: 4.7,
    reviews: 256,
    badge: 'Premium',
    bg: 'from-red-900/10 via-red-800/5 to-transparent',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-2">Our Products</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">Best Sellers</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Clean and pure supplements trusted by athletes across India.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              <div className={`relative bg-gradient-to-b ${product.bg} flex items-center justify-center min-h-[340px] p-4 overflow-hidden`}>
                <span className="absolute top-4 left-4 z-10 bg-brand-orange text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg">{product.badge}</span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[260px] h-[260px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] group-hover:scale-110 group-hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-700 ease-out"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className={j < Math.floor(product.rating) ? 'text-brand-yellow fill-brand-yellow' : 'text-gray-300'} />
                  ))}
                  <span className="text-xs text-gray-400 ml-1">{product.rating} ({product.reviews})</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{product.flavor} | {product.weight}</p>
                <button className="w-full flex items-center justify-center gap-2 bg-brand-black text-white py-3.5 rounded-full text-sm font-semibold hover:bg-brand-orange transition-all duration-300 shadow-md hover:shadow-lg">
                  <ShoppingCart size={16} />Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
