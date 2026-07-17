import { Check } from 'lucide-react';

export default function About() {
  const highlights = [
    'Premium quality supplements — no preservatives, no additives',
    'Rich Chocolate flavour for great taste without sugar',
    'Soy Protein Isolate for plant-based nutrition',
    'Performance Whey for serious athletes',
    'Science-based, evidence-driven product formulations',
    'Trusted by fitness enthusiasts across Ahmedabad',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            About BIoton
          </h2>
          <p className="text-lg text-brand-yellow-dark font-medium mb-6">
            BIoton વિશે
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              BIoton is your trusted brand for clean and pure supplements.
              We believe that what you put into your body matters — that's why
              every product is formulated with the highest quality ingredients,
              free from preservatives, artificial flavours, and unnecessary additives.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From our Rich Chocolate Soy Protein Isolate for plant-based
              nutrition to our Performance Whey for serious athletes, BIoton
              delivers premium supplements that fuel your fitness goals. Whether
              you're looking to lose weight, build muscle, or simply live
              healthier — we've got the right product for you.
            </p>

            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 bg-brand-yellow/20 text-brand-orange rounded-full flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-gray-400 italic">
              Distributed from Navrangpura, Ahmedabad, Gujarat.
            </p>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-orange/5 rounded-3xl p-8 lg:p-12 border border-brand-yellow/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="text-3xl font-bold text-brand-orange mb-1">100%</div>
                  <div className="text-sm text-gray-500">Pure Ingredients</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="text-3xl font-bold text-brand-yellow-dark mb-1">0g</div>
                  <div className="text-sm text-gray-500">Added Sugar</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="text-3xl font-bold text-brand-orange mb-1">2</div>
                  <div className="text-sm text-gray-500">Product Lines</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="text-3xl font-bold text-brand-yellow-dark mb-1">5+</div>
                  <div className="text-sm text-gray-500">Years Trusted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
