import { ArrowRight, Truck, ShieldCheck, RotateCcw, Percent } from 'lucide-react';

const badges = [
  { icon: Truck, label: 'Free Delivery', sub: 'On Rs. 999+' },
  { icon: ShieldCheck, label: '100% Authentic', sub: 'Quality assured' },
  { icon: RotateCcw, label: 'Easy Returns', sub: '7-day policy' },
  { icon: Percent, label: 'Best Prices', sub: 'Guaranteed' },
];

export default function Hero() {
  return (
    <section id="home" className="relative bg-brand-gray overflow-hidden border-b border-gray-100">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[550px] lg:min-h-[650px] py-12">
          <div className="text-brand-black">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 rounded-full text-sm mb-6 border border-brand-blue/20">
              <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
              <span className="text-brand-blue font-semibold uppercase tracking-wide text-xs">New Launches Available</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-normal leading-[1.1] mb-6">
              Fuel Your Body
              <br />
              <span className="text-brand-blue font-semibold">
                With Pure Nutrition
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-md mb-8 leading-relaxed font-sans font-light">
              Premium supplements with zero compromise. No preservatives, no
              artificial flavours - just clean, pure ingredients to power your
              fitness journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#products" className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-blue-hover transition-all shadow-lg hover:shadow-xl hover:scale-105 uppercase tracking-wide">
                Shop Now
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {badges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div key={i} className="flex flex-col items-center justify-center gap-1 bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                    <Icon size={24} className="text-brand-blue mb-1" />
                    <div className="text-[11px] font-semibold text-brand-black text-center leading-tight uppercase tracking-wider">{badge.label}</div>
                    <div className="text-[9px] text-gray-500 text-center">{badge.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center relative">
            <div className="absolute w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[80px]" />
            <div className="relative flex justify-center items-center h-full">
              {/* Secondary images positioned behind and to the sides */}
              <div className="absolute z-10 left-[-80px] top-1/2 -translate-y-1/2 hover:scale-105 transition-transform duration-500 hover:z-30">
                <img src="/images/soy-protein-isolate.jpg" alt="BIoton Soy Protein" className="w-[280px] h-[280px] object-contain drop-shadow-xl opacity-90" />
              </div>
              <div className="absolute z-10 right-[-80px] top-1/2 -translate-y-1/2 hover:scale-105 transition-transform duration-500 hover:z-30">
                <img src="/images/performance-whey.jpg" alt="BIoton Performance Whey" className="w-[280px] h-[280px] object-contain drop-shadow-xl opacity-90" />
              </div>
              {/* Main big image overlapping */}
              <div className="relative z-20 hover:scale-105 transition-transform duration-500">
                <img src="/images/whey-protein-gold.jpg" alt="BIoton Whey Protein" className="w-[400px] h-[400px] object-contain drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
