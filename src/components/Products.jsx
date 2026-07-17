import { Shield, FlaskConical, Award, Droplets, Leaf, Zap } from 'lucide-react';

const products = [
  {
    name: 'BIoton Soy Protein Isolate',
    subtitle: 'Rich Chocolate • 1 Kg',
    description:
      '100% Soy Protein Isolate — the perfect plant-based protein for those who prefer a vegetarian option. Rich in amino acids and easy to digest.',
    image: '/images/soy-protein.png',
    color: 'from-amber-900 to-amber-800',
    features: [
      { icon: Leaf, label: '100% Plant-Based' },
      { icon: Shield, label: 'Soy Protein Isolate' },
      { icon: Droplets, label: 'Rich Chocolate' },
      { icon: Award, label: 'Net Weight 1 Kg' },
    ],
    highlights: ['No Preservatives', 'Scratch Card Inside', 'Premium Grade'],
  },
  {
    name: 'BIoton Performance Whey',
    subtitle: 'Rich Chocolate • 10 LBS (4.54 Kg)',
    description:
      'High-performance whey protein designed for serious athletes. Packed with protein to fuel muscle recovery and growth after intense workouts.',
    image: '/images/performance-whey.png',
    color: 'from-red-900 to-red-800',
    features: [
      { icon: Zap, label: 'High Performance' },
      { icon: Shield, label: 'Whey Protein' },
      { icon: Droplets, label: 'Rich Chocolate' },
      { icon: Award, label: 'Net Weight 4.54 Kg' },
    ],
    highlights: ['No Preservatives', 'Scratch Card Inside', 'Quality Assured'],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-brand-black text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-yellow font-semibold text-sm tracking-widest uppercase mb-3">
            Clean & Pure Supplements
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Our Products
          </h2>
          <p className="text-lg text-brand-yellow-dark font-medium mb-6">
            અમારા ઉત્પાદનો
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto">
            Premium supplements formulated with the purest ingredients.
            No preservatives, no artificial flavours, no compromises.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl border border-white/10 overflow-hidden hover:border-brand-orange/30 transition-all duration-300"
            >
              {/* Product Image */}
              <div className={`bg-gradient-to-br ${product.color} p-8 flex items-center justify-center min-h-[320px]`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[280px] w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                <p className="text-brand-yellow text-sm font-medium mb-4">{product.subtitle}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{product.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.features.map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/5"
                      >
                        <Icon size={14} className="text-brand-yellow flex-shrink-0" />
                        <span className="text-xs text-white/70">{feature.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {product.highlights.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
