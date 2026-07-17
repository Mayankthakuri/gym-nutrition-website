import { Check } from 'lucide-react';

export default function About() {
  const highlights = [
    'Science-based, evidence-driven nutrition counseling',
    'Customized diet plans for gym-goers and athletes',
    'Weight loss, muscle gain, and body recomposition support',
    'Diet management for diabetes, thyroid, PCOD, and more',
    'Premium supplements: Clean & Pure GYM ID Whey Protein',
    'Flexible online and in-person consultation options',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            About GYM ID Nutrition
          </h2>
          <p className="text-lg text-brand-yellow-dark font-medium mb-6">
            GYM ID ન્યૂટ્રીશન વિશે
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              At GYM ID Nutrition, we believe that every individual is unique and
              deserves a nutrition plan tailored to their specific goals and
              lifestyle. Our approach combines the latest in nutritional science
              with practical, real-world guidance that fits into your daily
              routine.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you are a dedicated gym-goer looking to optimize your
              performance, someone on a weight loss journey, or managing a
              lifestyle condition like diabetes, thyroid, or PCOD — we design
              plans that are sustainable, enjoyable, and effective. We also
              develop our own line of premium supplements, including the GYM ID
              Gold Series 100% Whey Protein.
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
              Conveniently located in Navrangpura, Ahmedabad.
            </p>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-orange/5 rounded-3xl p-8 lg:p-12 border border-brand-yellow/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="text-3xl font-bold text-brand-orange mb-1">500+</div>
                  <div className="text-sm text-gray-500">Clients Served</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="text-3xl font-bold text-brand-yellow-dark mb-1">100%</div>
                  <div className="text-sm text-gray-500">Customized Plans</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="text-3xl font-bold text-brand-orange mb-1">24/7</div>
                  <div className="text-sm text-gray-500">Online Support</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="text-3xl font-bold text-brand-yellow-dark mb-1">5+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
