import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-yellow/10 via-white to-brand-orange/5 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-yellow/20 text-brand-orange-dark px-4 py-2 rounded-full text-sm font-medium mb-8">
          <MapPin size={14} />
          Navrangpura, Ahmedabad
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
          Personalized Nutrition
          <br />
          <span className="text-brand-orange">for Your Fitness Goals</span>
        </h1>

        {/* Gujarati Subtitle */}
        <p className="text-lg sm:text-xl text-brand-yellow-dark font-medium mb-6">
          તમારા ફિટનેસ લક્ષ્યો માટે વ્યક્તિગત પોષણ
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Customized diet plans designed for gym-goers, athletes, and anyone
          seeking a healthier lifestyle. Whether you want to lose weight, build
          muscle, or manage a health condition — we create plans that work for
          <em> you</em>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-brand-orange-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Consultation
            <ArrowRight size={18} />
          </a>
          <a
            href="https://www.google.com/maps/search/Anison+2HQ7+5FW+Swastik+Society+Cross+Rd+Swastik+Society+Navrangpura+Ahmedabad+Gujarat+380009"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full text-base font-semibold border border-gray-200 hover:border-brand-yellow hover:text-brand-orange transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <MapPin size={18} />
            Get Directions
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-yellow rounded-full" />
            Science-Based Plans
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-orange rounded-full" />
            Expert Nutritionist
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-yellow rounded-full" />
            Online & In-Person
          </div>
        </div>
      </div>
    </section>
  );
}
