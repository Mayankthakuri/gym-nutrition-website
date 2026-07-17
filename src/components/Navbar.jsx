import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src="/logo.svg" alt="BIoton Logo" className="h-10 w-10 lg:h-12 lg:w-12" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg lg:text-xl font-bold text-brand-orange tracking-tight">
                BIoton
              </span>
              <span className="text-[10px] lg:text-xs text-gray-500 -mt-0.5">
                Clean & Pure Supplements
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-orange rounded-lg hover:bg-brand-yellow/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:09558732687"
              className="inline-flex items-center gap-2 bg-brand-orange text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-orange-dark transition-all shadow-md hover:shadow-lg"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-4 py-3 text-gray-600 font-medium rounded-lg hover:bg-brand-yellow/10 hover:text-brand-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:09558732687"
            className="flex items-center justify-center gap-2 mt-3 bg-brand-orange text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-brand-orange-dark transition-all"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
