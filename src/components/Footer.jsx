import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.svg" alt="BIoton Logo" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold text-white">BIoton</h3>
                <p className="text-xs text-gray-500">Clean & Pure Supplements</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Premium supplements formulated with the purest ingredients.
              From Soy Protein Isolate to Performance Whey — BIoton delivers
              clean nutrition for every fitness goal.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-brand-yellow transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-yellow transition-colors">About</a></li>
              <li><a href="#products" className="hover:text-brand-yellow transition-colors">Products</a></li>
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Services</a></li>
              <li><a href="#location" className="hover:text-brand-yellow transition-colors">Location</a></li>
              <li><a href="#contact" className="hover:text-brand-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-brand-orange" />
                <span>Navrangpura, Ahmedabad, Gujarat 380009</span>
              </li>
              <li>
                <a
                  href="tel:09558732687"
                  className="flex items-center gap-2 hover:text-brand-yellow transition-colors"
                >
                  <Phone size={16} className="flex-shrink-0 text-brand-orange" />
                  095587 32687
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; 2026 BIoton. All rights reserved.</p>
          <p className="text-gray-600">
            Clean & Pure Supplements for a Healthier You.
          </p>
        </div>
      </div>
    </footer>
  );
}
