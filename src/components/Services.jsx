import {
  Dumbbell,
  TrendingDown,
  TrendingUp,
  Heart,
  Stethoscope,
  Video,
} from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Gym & Sports Nutrition',
    description:
      'Performance-focused supplement stacks and diet plans for athletes and fitness enthusiasts to fuel workouts and accelerate recovery.',
  },
  {
    icon: TrendingDown,
    title: 'Weight Loss Programs',
    description:
      'Sustainable, calorie-controlled meal plans paired with the right supplements designed for healthy and lasting weight management.',
  },
  {
    icon: TrendingUp,
    title: 'Muscle Gain & Bodybuilding',
    description:
      'High-protein nutrition strategies with BIoton Performance Whey to support muscle hypertrophy, strength, and body recomposition.',
  },
  {
    icon: Heart,
    title: 'General Health & Wellness',
    description:
      'Balanced nutrition plans and plant-based protein options like BIoton Soy Protein Isolate for everyday wellness.',
  },
  {
    icon: Stethoscope,
    title: 'Lifestyle Conditions',
    description:
      'Specialized dietary management for diabetes, thyroid, PCOD, cholesterol, and other lifestyle conditions.',
  },
  {
    icon: Video,
    title: 'Online & Offline Consultations',
    description:
      'Flexible consultation modes — visit us in Navrangpura or connect from anywhere via video call.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            Our Services
          </h2>
          <p className="text-lg text-brand-yellow-dark font-medium mb-6">
            અમારી સેવાઓ
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Comprehensive nutrition services paired with BIoton premium
            supplements — tailored to your unique fitness goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-brand-yellow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-brand-yellow/10 group-hover:bg-brand-orange rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon
                    size={24}
                    className="text-brand-orange group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
