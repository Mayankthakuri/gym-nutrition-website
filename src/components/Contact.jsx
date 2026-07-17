import { useState } from 'react';
import { Phone, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-brand-orange via-brand-orange-dark to-brand-yellow-dark text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Book Your Consultation
          </h2>
          <p className="text-lg text-white/80 font-medium mb-6">
            તમારી સલાહ બુક કરો
          </p>
          <div className="w-16 h-1 bg-white/40 mx-auto rounded-full mb-6" />
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
            Take the first step toward a healthier you. Call us or fill out the
            form below, and we'll get back to you with a personalized nutrition
            plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* CTA Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold mb-6">Ready to Start?</h3>
            <a
              href="tel:09558732687"
              className="flex items-center justify-center gap-3 w-full bg-white text-brand-orange py-4 rounded-full text-lg font-bold hover:bg-brand-yellow/10 transition-all shadow-lg hover:shadow-xl mb-6"
            >
              <Phone size={22} />
              Call Now — 095587 32687
            </a>
            <div className="space-y-3 text-sm text-white/70">
              <p>• Free initial phone consultation</p>
              <p>• Customized diet plans starting from first session</p>
              <p>• Premium GYM ID supplements available</p>
              <p>• Follow-ups to track your progress</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={48} className="text-brand-yellow mb-4" />
                <p className="text-lg font-semibold mb-2">Message Sent!</p>
                <p className="text-white/70 text-sm">
                  We'll get back to you shortly. Thank you!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition resize-none"
                    placeholder="Tell us about your goals (e.g., weight loss, muscle gain)"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-white text-brand-orange py-3.5 rounded-full font-semibold hover:bg-brand-yellow/10 transition-all shadow-md"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
