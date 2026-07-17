import { Check, Award, Leaf, FlaskConical, Shield } from 'lucide-react';

const features = [
  { icon: Leaf, title: '100% Pure', desc: 'No preservatives or additives' },
  { icon: FlaskConical, title: 'Lab Tested', desc: 'Third-party quality verified' },
  { icon: Shield, title: 'GMP Certified', desc: 'Highest manufacturing standards' },
  { icon: Award, title: 'Trusted Brand', desc: '50,000+ happy customers' },
];

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-2">About BIoton</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              Clean Nutrition for<br /><span className="text-brand-orange">Serious Athletes</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              BIoton was founded with a simple mission: deliver premium quality supplements without the junk. Every product is formulated with the purest ingredients, rigorously tested, and designed to help you reach your fitness goals.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              From our Rich Chocolate Soy Protein Isolate for plant-based nutrition to our Performance Whey for serious athletes, we ensure every scoop delivers exactly what your body needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 bg-brand-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-brand-orange" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{f.title}</div>
                      <div className="text-xs text-gray-500">{f.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-brand-black to-gray-900 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center"><div className="text-4xl font-extrabold text-brand-yellow mb-1">50K+</div><div className="text-sm text-gray-400">Happy Customers</div></div>
                <div className="text-center"><div className="text-4xl font-extrabold text-brand-orange mb-1">100%</div><div className="text-sm text-gray-400">Pure Ingredients</div></div>
                <div className="text-center"><div className="text-4xl font-extrabold text-brand-yellow mb-1">0g</div><div className="text-sm text-gray-400">Added Sugar</div></div>
                <div className="text-center"><div className="text-4xl font-extrabold text-brand-orange mb-1">4.7</div><div className="text-sm text-gray-400">Average Rating</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
