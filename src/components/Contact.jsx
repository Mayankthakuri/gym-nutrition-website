import { useState } from 'react';
import { Phone, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-brand-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-2">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Book Your Consultation</h2>
          <p className="text-white/50 max-w-xl mx-auto">Interested in BIoton supplements or need a personalized nutrition plan? Call us or send a message.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-lg font-bold mb-5">Ready to Start?</h3>
            <a href="tel:09558732687" className="flex items-center justify-center gap-3 w-full bg-brand-orange text-white py-4 rounded-full text-base font-bold hover:bg-brand-orange-dark transition-all shadow-lg mb-6">
              <Phone size={20} />Call Now - 095587 32687
            </a>
            <div className="space-y-2.5 text-sm text-white/50">
              <p>- Free initial phone consultation</p>
              <p>- BIoton Soy Protein &amp; Performance Whey available</p>
              <p>- Customized diet plans for all fitness goals</p>
              <p>- Follow-ups to track your progress</p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-lg font-bold mb-5">Send a Message</h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={44} className="text-brand-yellow mb-4" />
                <p className="text-lg font-semibold mb-1">Message Sent!</p>
                <p className="text-white/50 text-sm">We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><label className="block text-xs font-medium text-white/60 mb-1.5">Your Name</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition" placeholder="Enter your name" /></div>
                <div><label className="block text-xs font-medium text-white/60 mb-1.5">Phone Number</label><input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition" placeholder="Enter your phone number" /></div>
                <div><label className="block text-xs font-medium text-white/60 mb-1.5">Message</label><textarea rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition resize-none" placeholder="Tell us about your goals" /></div>
                <button type="submit" className="flex items-center justify-center gap-2 w-full bg-brand-orange text-white py-3.5 rounded-full text-sm font-semibold hover:bg-brand-orange-dark transition-all"><Send size={14} />Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
