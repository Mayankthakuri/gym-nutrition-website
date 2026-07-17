import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    name: 'BIoton Soy Protein Isolate',
    flavor: 'Rich Chocolate',
    weight: '1 Kg',
    price: '1,499',
    oldPrice: '1,999',
    discount: '25%',
    image: '/images/soy-protein-isolate.jpg',
    rating: 4.5,
    reviews: 128,
    badge: 'Plant-Based',
  },
  {
    name: 'BIoton 100% Whey Protein',
    flavor: 'Rich Chocolate | Gold Quality',
    weight: '4.54 Kg (10 LBS)',
    price: '3,499',
    oldPrice: '4,999',
    discount: '30%',
    image: '/images/whey-protein-gold.jpg',
    rating: 4.8,
    reviews: 342,
    badge: 'Best Seller',
  },
  {
    name: 'BIoton Performance Whey',
    flavor: 'Rich Chocolate',
    weight: '4.54 Kg (10 LBS)',
    price: '3,999',
    oldPrice: '5,499',
    discount: '27%',
    image: '/images/performance-whey.jpg',
    rating: 4.7,
    reviews: 256,
    badge: 'Premium',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display text-gray-900 tracking-tight mb-3">
            Best Sellers
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-sans font-light">
            Clean and pure supplements trusted by athletes and fitness enthusiasts across India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <div key={i} className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-brand-blue text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                  {product.discount} OFF
                </span>
              </div>
              {product.badge && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-gray-100 text-gray-800 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                    {product.badge}
                  </span>
                </div>
              )}
              
              <div className="relative p-6 flex justify-center items-center bg-gray-50/50 group-hover:bg-gray-50 transition-colors h-[300px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className={j < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>

                <h3 className="text-lg font-display text-gray-900 mb-1 leading-snug">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{product.flavor} | {product.weight}</p>

                <div className="mt-auto">
                  <div className="flex items-end gap-2 mb-5">
                    <span className="text-2xl font-semibold text-gray-900">₹{product.price}</span>
                    <span className="text-sm text-gray-400 line-through mb-1">₹{product.oldPrice}</span>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white py-3.5 rounded font-semibold hover:bg-brand-blue-hover transition-all uppercase tracking-wide text-sm">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
