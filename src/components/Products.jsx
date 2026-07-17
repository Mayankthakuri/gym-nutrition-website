import { Shield, FlaskConical, Award, Droplets } from 'lucide-react';

const features = [
  {
    icon: FlaskConical,
    title: '24g Protein',
    description: 'High-quality whey protein per serving for maximum muscle synthesis.',
  },
  {
    icon: Shield,
    title: '5.4g BCAAs',
    description: 'Naturally occurring Branched-Chain Amino Acids for faster recovery.',
  },
  {
    icon: Award,
    title: '4g Glutamine',
    description: 'Supports immune function and gut health during intense training.',
  },
  {
    icon: Droplets,
    title: '0g Sugar',
    description: 'No added sugars — clean fuel without the crash.',
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
            GYM ID Gold Series
          </h2>
          <p className="text-lg text-brand-yellow-dark font-medium mb-6">
            100% વ્હે પ્રોટીન
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-orange/20 rounded-3xl blur-3xl scale-90" />
              <div className="relative bg-gradient-to-br from-brand-yellow/10 to-brand-orange/10 rounded-3xl p-8 border border-white/10">
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-brand-yellow/20 to-brand-orange/20 rounded-3xl flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <div className="text-6xl font-black text-brand-orange mb-2">GYM ID</div>
                      <div className="text-brand-yellow font-bold tracking-widest">GOLD SERIES</div>
                      <div className="text-white/60 text-sm mt-2">100% WHEY PROTEIN</div>
                      <div className="text-white/40 text-xs mt-1">NET WT. 2 KG</div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      No Preservatives
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      No Additives
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Premium Whey Protein for Serious Athletes
            </h3>
            <p className="text-white/60 leading-relaxed mb-8">
              GYM ID Gold Series 100% Whey Protein is formulated with the purest
              ingredients to fuel your workouts and accelerate recovery. With
              zero sugar, no preservatives, and no artificial flavours, it's clean
              nutrition you can trust.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-brand-orange/50 transition-colors"
                  >
                    <Icon size={20} className="text-brand-yellow mb-2" />
                    <div className="font-semibold text-sm mb-1">{feature.title}</div>
                    <div className="text-xs text-white/50">{feature.description}</div>
                  </div>
                );
              })}
            </div>

            {/* Specs */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="font-semibold mb-3 text-brand-yellow">Product Highlights</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                  Premium Grade & Quality Assured
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                  Sugar Free, Yeast Free, Gluten Free
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                  Mixes easily with water, milk, or juice
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                  Ideal for post-workout recovery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
