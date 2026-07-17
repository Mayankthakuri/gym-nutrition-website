import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    name: 'BIoton Soy Protein Isolate',
    flavor: 'Rich Chocolate',
    weight: '1 Kg',
    price: '1,499',
    oldPrice: '1,999',
    discount: '25%',
    image: '/images/soy-protein.svg',
    bg: 'from-amber-50 to-amber-100/50',
    rating: 4.5,
    reviews: 128,
    badge: 'Plant-Based',
  },
  {
    name: 'BIoton Performance Whey',
    flavor: 'Rich Chocolate',
    weight: '4.54 Kg (10 LBS)',
    price: '3,999',
    oldPrice: '5,499',
    discount: '27%',
    image: '/images/performance-whey.svg',
    bg: 'from-red-50 to-red-100/50',
    rating: 4.7,
    reviews: 256,
    badge: 'Best Seller',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-2">Our Products</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Best Sellers
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Clean and pure supplements trusted by athletes and fitness enthusiasts across India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Image */}
              <div className={`relative bg-gradient-to-br ${product.bg} p-8 flex items-center justify-center min-h-[300px]`}>
                <span className="absolute top-4 left-4 bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
                <span className="absolute top-4 right-4 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  {product.discount} OFF
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-48 h-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      className={j < Math.floor(product.rating) ? 'text-brand-yellow fill-brand-yellow' : 'text-gray-300'}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-1">{product.flavor} | {product.weight}</p>

                <div className="flex items-center gap-3 mt-4 mb-4">
                  <span className="text-2xl font-extrabold text-gray-900">Rs. {product.price}</span>
                  <span className="text-sm text-gray-400 line-through">Rs. {product.oldPrice}</span>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-brand-black text-white py-3.5 rounded-full text-sm font-semibold hover:bg-brand-orange transition-all">
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
