import { Dumbbell, TrendingDown, TrendingUp, Heart, Stethoscope, Video } from 'lucide-react';

const services = [
  { icon: Dumbbell, title: 'Gym & Sports Nutrition', description: 'Performance-focused supplement stacks and diet plans for athletes.' },
  { icon: TrendingDown, title: 'Weight Loss Programs', description: 'Sustainable, calorie-controlled meal plans for lasting weight management.' },
  { icon: TrendingUp, title: 'Muscle Gain & Bodybuilding', description: 'High-protein nutrition strategies with BIoton Performance Whey.' },
  { icon: Heart, title: 'General Health & Wellness', description: 'Balanced nutrition plans and plant-based protein options.' },
  { icon: Stethoscope, title: 'Lifestyle Conditions', description: 'Specialized dietary management for diabetes, thyroid, PCOD.' },
  { icon: Video, title: 'Online Consultations', description: 'Flexible consultation modes - visit us or connect via video call.' },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-2">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Our Services</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-brand-yellow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-brand-yellow/10 group-hover:bg-brand-orange rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon size={20} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
