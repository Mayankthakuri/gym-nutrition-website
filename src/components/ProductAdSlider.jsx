import { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Flame, 
  CheckCircle2, 
  ArrowRight, 
  Plus, 
  Star
} from 'lucide-react';

const slides = [
  {
    id: 1,
    name: 'BIoton 100% Whey Protein',
    subtitle: 'Premium Gold Quality Standard',
    flavor: 'Rich Chocolate | Gold Quality',
    weight: '4.54 Kg (10 LBS)',
    price: '3,499',
    oldPrice: '4,999',
    discount: '30% OFF',
    rating: 4.8,
    reviews: 342,
    image: '/images/whey-protein-gold.png',
    bgGradient: 'from-slate-950 via-slate-900 to-indigo-950',
    accentColor: 'text-yellow-400',
    borderColor: 'border-yellow-500/30',
    tagColor: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
    btnColor: 'bg-yellow-500 hover:bg-yellow-600 text-black',
    features: ['25g pure whey protein', '5.5g vital BCAAs', 'Zero added sugar'],
    hotspots: [
      {
        x: '35%',
        y: '35%',
        title: 'Cold-Filtered Isolate',
        desc: 'Cross-flow microfiltered to preserve bio-active fractions while removing excess fat and lactose.'
      },
      {
        x: '65%',
        y: '50%',
        title: '5.5g BCAAs',
        desc: 'Loaded with Leucine, Isoleucine, and Valine in the optimal 2:1:1 ratio for explosive recovery.'
      },
      {
        x: '48%',
        y: '75%',
        title: 'Fast Digesting',
        desc: 'Rapid absorption technology speeds up nutrient delivery to starved muscles post-workout.'
      }
    ]
  },
  {
    id: 2,
    name: 'BIoton Soy Protein Isolate',
    subtitle: '100% Clean Plant Muscle Fuel',
    flavor: 'Rich Chocolate',
    weight: '1 Kg',
    rating: 4.5,
    reviews: 128,
    image: '/images/soy-protein-isolate.png',
    bgGradient: 'from-slate-950 via-neutral-900 to-emerald-950',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    tagColor: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    btnColor: 'bg-emerald-500 hover:bg-emerald-600 text-black',
    features: ['100% Non-GMO soy', '27g protein per scoop', 'Lactose & gluten free'],
    hotspots: [
      {
        x: '30%',
        y: '45%',
        title: 'Premium Plant Protein',
        desc: 'Complete protein profile providing all 9 essential amino acids for optimal protein synthesis.'
      },
      {
        x: '68%',
        y: '60%',
        title: 'DigeZyme® Infused',
        desc: 'Fortified with multi-enzyme complex for complete, bloat-free digestion and absorption.'
      }
    ]
  },
  {
    id: 3,
    name: 'BIoton Performance Whey',
    subtitle: 'Ignite Your Ultimate Performance',
    flavor: 'Rich Chocolate',
    weight: '4.54 Kg (10 LBS)',
    rating: 4.7,
    reviews: 256,
    image: '/images/performance-whey.png',
    bgGradient: 'from-slate-950 via-stone-900 to-rose-950',
    accentColor: 'text-rose-400',
    borderColor: 'border-rose-500/30',
    tagColor: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
    btnColor: 'bg-rose-500 hover:bg-rose-600 text-white',
    features: ['High-absorption concentrate', 'Creamy cocoa flavor', 'Optimal muscle volumizer'],
    hotspots: [
      {
        x: '40%',
        y: '40%',
        title: 'Performance Blend',
        desc: 'Synergistic matrix of Whey Isolate and Concentrate for sustained amino acid release.'
      },
      {
        x: '62%',
        y: '70%',
        title: 'Superior Mixability',
        desc: 'Instantized powder that dissolves smoothly in milk or water without any clumps.'
      }
    ]
  },
  {
    id: 4,
    name: 'BIoton Whey Protein — Nutrition Profile',
    subtitle: 'Lab-Tested & Certified Pure',
    flavor: 'Rich Chocolate | Gold Quality',
    weight: '4.54 Kg (10 LBS)',
    rating: 4.9,
    reviews: 412,
    image: '/images/whey-protein-gold-back.png',
    bgGradient: 'from-slate-950 via-amber-950 to-slate-950',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    tagColor: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    btnColor: 'bg-amber-500 hover:bg-amber-600 text-black',
    features: ['Full amino acid profile disclosed', 'DigeZyme® enzyme complex', 'Zero banned substances'],
    hotspots: [
      {
        x: '30%',
        y: '45%',
        title: 'Nutrition Facts',
        desc: '24g protein, 130 calories per serving with complete macro breakdown for precise tracking.'
      },
      {
        x: '70%',
        y: '45%',
        title: 'Amino Acid Profile',
        desc: 'Full transparency — every essential, conditionally essential, and non-essential amino acid listed.'
      }
    ]
  }
];

export default function ProductAdSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hoveredHotspot, setHoveredHotspot] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 34, seconds: 12 });
  
  const progressIntervalRef = useRef(null);
  const AUTOPLAY_TIME = 6000; // 6 seconds per slide

  // Time-left countdown logic
  useEffect(() => {
    let totalSeconds = 5 * 60 * 60 + 15 * 60 + 30; // 5h 15m 30s
    
    const cd = setInterval(() => {
      if (totalSeconds <= 0) {
        totalSeconds = 5 * 60 * 60; // reset to 5h
      } else {
        totalSeconds--;
      }
      
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(cd);
  }, []);

  // Autoplay progression bar logic
  useEffect(() => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    if (isPlaying && !isTransitioning) {
      const step = 100; // ms
      const increment = (step / AUTOPLAY_TIME) * 100;
      
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + increment;
        });
      }, step);
    }

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, current, isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setProgress(0);
    setHoveredHotspot(null);
    setCurrent((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setProgress(0);
    setHoveredHotspot(null);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setProgress(0);
    setHoveredHotspot(null);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const currentSlide = slides[current];

  return (
    <section 
      className="relative overflow-hidden py-16 lg:py-24 transition-all duration-700 bg-slate-950 font-sans"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Gradient Blends */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlide.bgGradient} opacity-90 transition-all duration-700`} />
      
      {/* Dynamic Animated Particles / Radial Light */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-sky-900/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-900/10 rounded-full blur-[130px] animate-pulse duration-5000" />
      
      {/* Visual Timer Progress Bar at top */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-800 z-30">
        <div 
          className="h-full bg-brand-blue transition-all duration-100 ease-linear"
          style={{ width: `${isPlaying ? progress : 0}%` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Ribbon / Campaign Title */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-slate-800 pb-6 mb-12 gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-xs uppercase font-semibold text-slate-400 tracking-widest">Limited Campaign Offer</span>
          </div>
          
          {/* Countdown Clock */}
          <div className="flex items-center gap-3 bg-slate-905/80 border border-slate-800 rounded-full py-1.5 px-4 backdrop-blur-sm">
            <Clock className="w-4 h-4 text-brand-blue" />
            <span className="text-xs text-slate-400 font-medium">Deals expire in:</span>
            <div className="flex items-center gap-1 text-sm font-mono font-bold text-white">
              <span className="bg-slate-800 px-1.5 py-0.5 rounded text-brand-blue">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-slate-500">:</span>
              <span className="bg-slate-800 px-1.5 py-0.5 rounded text-brand-blue">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-slate-500">:</span>
              <span className="bg-slate-800 px-1.5 py-0.5 rounded text-brand-blue">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* Slide Grid Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[500px]">
          
          {/* Left Column - Copy & Offers */}
          <div className="lg:col-span-6 flex flex-col justify-center text-white order-2 lg:order-1">
            
            {/* Animated Badge */}
            <div className={`inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 transition-all duration-500 ${
              isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
            } ${currentSlide.tagColor}`}>
              <Sparkles className="w-3.5 h-3.5" />
              {currentSlide.discount} Active
            </div>

            {/* Title & Subtitle */}
            <div className="mb-6">
              <h3 className={`text-sm sm:text-base font-medium tracking-wider uppercase mb-2 transition-all duration-500 delay-75 ${
                isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
              } ${currentSlide.accentColor}`}>
                {currentSlide.subtitle}
              </h3>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight transition-all duration-500 delay-150 ${
                isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
              }`}>
                {currentSlide.name}
              </h2>
              <div className="w-16 h-1 bg-brand-blue mt-4 rounded-full transition-all duration-500 delay-200" />
            </div>

            {/* Description */}
            <p className={`text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light transition-all duration-500 delay-200 ${
              isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              {currentSlide.description}
            </p>

            {/* Stars & Mini Specs */}
            <div className={`flex flex-wrap items-center gap-6 mb-8 transition-all duration-500 delay-250 ${
              isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              <div className="flex items-center gap-1 bg-slate-900/50 py-1.5 px-3 rounded-lg border border-slate-800">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star 
                      key={j} 
                      size={14} 
                      className={j < Math.floor(currentSlide.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-650'} 
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-semibold ml-1">({currentSlide.reviews} reviews)</span>
              </div>

              <div className="text-xs text-slate-400 font-medium">
                {currentSlide.flavor} | <span className="text-white font-bold">{currentSlide.weight}</span>
              </div>
            </div>

            {/* Core Features bullets */}
            <ul className={`space-y-2.5 mb-8 transition-all duration-500 delay-300 ${
              isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              {currentSlide.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className={`w-4 h-4 ${currentSlide.accentColor}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Pricing and Action */}
            <div className={`flex flex-wrap items-center gap-6 transition-all duration-500 delay-350 ${
              isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              <div>
                <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-0.5">Special Promo Price</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">₹{currentSlide.price}</span>
                  <span className="text-sm text-slate-500 line-through">₹{currentSlide.oldPrice}</span>
                </div>
              </div>

              <button className={`flex items-center gap-2 font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-305 hover:scale-[1.03] text-sm uppercase tracking-wider ${currentSlide.btnColor}`}>
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column - Product Image & Hotspots */}
          <div className="lg:col-span-6 flex justify-center items-center relative order-1 lg:order-2 h-[400px] lg:h-[500px]">
            {/* Background Halo */}
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center opacity-40 shadow-inner" />
            <div className={`absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] bg-slate-900/60 rounded-full border ${currentSlide.borderColor} animate-pulse`} />
            
            {/* Product Image Frame */}
            <div className={`relative z-20 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] transition-all duration-700 ease-out ${
              isTransitioning ? 'scale-90 opacity-0 rotate-3' : 'scale-100 opacity-100 rotate-0'
            }`}>
              <img 
                src={currentSlide.image} 
                alt={currentSlide.name} 
                className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
              />

              {/* Hotspot Dots */}
              {!isTransitioning && currentSlide.hotspots.map((hotspot, hIdx) => {
                const isActive = hoveredHotspot === hIdx;
                return (
                  <div 
                    key={hIdx}
                    className="absolute"
                    style={{ left: hotspot.x, top: hotspot.y }}
                  >
                    {/* Hotspot Pulse Trigger Button */}
                    <button
                      className="relative flex items-center justify-center w-6 h-6 rounded-full bg-brand-blue border border-white text-white shadow-lg cursor-pointer focus:outline-none transition-transform hover:scale-125 z-30 animate-bounce"
                      style={{ animationDuration: '2.5s' }}
                      onMouseEnter={() => setHoveredHotspot(hIdx)}
                      onMouseLeave={() => setHoveredHotspot(null)}
                      onClick={() => setHoveredHotspot(hoveredHotspot === hIdx ? null : hIdx)}
                      aria-label="View specifications"
                    >
                      <Plus className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'rotate-45' : 'rotate-0'}`} />
                      <span className="absolute inset-0 rounded-full bg-brand-blue/60 animate-ping -z-10" />
                    </button>

                    {/* Hotspot Detail Card (Glassmorphism Modal-like tooltip) */}
                    <div className={`absolute left-8 top-1/2 -translate-y-1/2 w-[220px] sm:w-[260px] bg-slate-950/95 border border-slate-800 text-white rounded-xl p-4 shadow-2xl backdrop-blur-md z-45 transition-all duration-300 ${
                      isActive 
                        ? 'opacity-100 scale-100 translate-x-0 visible' 
                        : 'opacity-0 scale-95 -translate-x-2 invisible pointer-events-none'
                    }`}>
                      <h4 className="text-xs uppercase tracking-wider font-extrabold text-brand-blue mb-1 flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
                        {hotspot.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-normal font-light">
                        {hotspot.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Carousel Footer Navigation */}
        <div className="flex justify-between items-center mt-12 border-t border-slate-900 pt-8 gap-4">
          
          {/* Navigation Slide Select Dots */}
          <div className="flex gap-2">
            {slides.map((_, sIdx) => (
              <button
                key={sIdx}
                onClick={() => goToSlide(sIdx)}
                className={`h-2.5 rounded-full transition-all duration-350 cursor-pointer ${
                  sIdx === current 
                    ? `w-8 ${currentSlide.accentColor.replace('text-', 'bg-')}` 
                    : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                }`}
                aria-label={`Go to slide ${sIdx + 1}`}
              />
            ))}
          </div>

          {/* Left/Right Controls buttons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="flex items-center justify-center w-11 h-11 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-900 text-slate-400 hover:text-white transition-all disabled:opacity-50 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="flex items-center justify-center w-11 h-11 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-900 text-slate-400 hover:text-white transition-all disabled:opacity-50 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
