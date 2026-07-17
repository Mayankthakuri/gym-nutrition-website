import { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingCart, Search, User, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Shop', href: '#products' },
  { label: 'Track Order', href: '#' },
  { label: 'Authenticity', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Contact', href: '#' },
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
    <>
      {/* Top Bar */}
      <div className="bg-brand-blue text-white text-center py-2 text-xs tracking-wide">
        <p>Free Delivery on Orders Above ₹999 | Use Code <span className="font-bold text-white">NAKPRO10</span> for 10% Off</p>
      </div>

      {/* Main Nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <img src="/logo.svg" alt="BIoton" className="h-8 w-8 lg:h-10 lg:w-10" />
              <span className="text-xl lg:text-2xl font-extrabold text-brand-black tracking-tight">
                BIOTON
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors relative group font-display uppercase tracking-wide"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex p-2 text-gray-600 hover:text-brand-blue transition-colors">
                <Search size={22} />
              </button>
              <button className="hidden sm:flex p-2 text-gray-600 hover:text-brand-blue transition-colors">
                <User size={22} />
              </button>
              <button className="p-2 text-gray-600 hover:text-brand-blue transition-colors relative">
                <ShoppingCart size={22} />
                <span className="absolute top-0 right-0 w-4 h-4 bg-brand-blue text-white text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:text-brand-blue transition-colors text-sm font-display uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
