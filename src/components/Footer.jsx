import { Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.svg" alt="BIoton" className="h-8 w-8" />
              <span className="text-lg font-extrabold text-white">BIOTON</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 font-sans font-light">
              Premium supplements formulated with the purest ingredients. Clean &amp; Pure nutrition for every fitness goal.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={16} className="text-brand-blue flex-shrink-0" />
              Navrangpura, Ahmedabad
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Products</h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Soy Protein Isolate</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">100% Whey Protein</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Performance Whey</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">All Products</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a href="tel:09558732687" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Phone size={16} className="text-brand-blue flex-shrink-0" />
                  095587 32687
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-brand-blue flex-shrink-0" />
                info@bioton.in
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="text-brand-blue flex-shrink-0 mt-0.5" />
                Anison Complex, Navrangpura, Ahmedabad, Gujarat 380009
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">&copy; 2026 BIoton. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span>Clean &amp; Pure Supplements</span>
            <span>|</span>
            <span>Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
