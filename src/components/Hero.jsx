import { ArrowRight, Truck, ShieldCheck, RotateCcw, Percent } from 'lucide-react';

const badges = [
  { icon: Truck, label: 'Free Delivery', sub: 'All India' },
  { icon: ShieldCheck, label: '100% Authentic', sub: 'Quality assured' },
  { icon: RotateCcw, label: 'Easy Returns', sub: '7-day policy' },
  { icon: Percent, label: 'Best Prices', sub: 'Guaranteed' },
];

export default function Hero() {
  return (
    <section id="home" className="relative bg-brand-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-gray-900 to-brand-dark" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-yellow/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[550px] lg:min-h-[650px] py-12">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              New Launches Available
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-6">
              Fuel Your Body
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-orange">
                With Pure Nutrition
              </span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-md mb-8 leading-relaxed">
              Premium supplements with zero compromise. No preservatives, no artificial flavours - just clean, pure ingredients to power your fitness journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#products" className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-orange-dark transition-all shadow-lg hover:shadow-xl hover:scale-105">
                Shop Now <ArrowRight size={16} />
              </a>
              <a href="#collections" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all">
                View Collections
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {badges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div key={i} className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2.5 border border-white/5">
                    <Icon size={16} className="text-brand-yellow flex-shrink-0" />
                    <div>
                      <div className="text-[11px] font-semibold text-white">{badge.label}</div>
                      <div className="text-[9px] text-gray-500">{badge.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center relative">
            <div className="absolute w-[400px] h-[400px] bg-brand-orange/20 rounded-full blur-[80px]" />
            <div className="relative flex gap-5 items-end">
              <div className="bg-gradient-to-br from-amber-900/60 to-amber-950/60 rounded-3xl p-5 border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-500">
                <img src="/images/soy-protein-isolate.png" alt="BIoton Soy Protein" className="w-44 h-44 object-contain drop-shadow-2xl" />
                <div className="mt-3 text-center">
                  <p className="text-brand-yellow text-[10px] font-semibold tracking-wider">SOY PROTEIN</p>
                  <p className="text-white/60 text-xs">Rich Chocolate | 1 Kg</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-900/60 to-yellow-950/60 rounded-3xl p-5 border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-500 translate-y-[-15px]">
                <img src="/images/whey-protein-gold.png" alt="BIoton Whey Protein" className="w-48 h-48 object-contain drop-shadow-2xl" />
                <div className="mt-3 text-center">
                  <p className="text-brand-yellow text-[10px] font-semibold tracking-wider">WHEY PROTEIN</p>
                  <p className="text-white/60 text-xs">Gold Quality | 4.54 Kg</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-900/60 to-red-950/60 rounded-3xl p-5 border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-500">
                <img src="/images/performance-whey.png" alt="BIoton Performance Whey" className="w-44 h-44 object-contain drop-shadow-2xl" />
                <div className="mt-3 text-center">
                  <p className="text-brand-yellow text-[10px] font-semibold tracking-wider">PERFORMANCE</p>
                  <p className="text-white/60 text-xs">Rich Chocolate | 4.54 Kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
