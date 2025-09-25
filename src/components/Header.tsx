import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { items } = useCart();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/services', label: 'Services' },
    { path: '/shop', label: 'Boutique ESHA' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      {/* Top container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo modernisé */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-[#0A3764] to-blue-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
              <span className="text-white font-extrabold text-lg tracking-wider">AL</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-[#0A3764] font-bold text-xl group-hover:text-blue-600 transition-colors">
                Akpedjè Esther
              </span>
              <span className="text-blue-500 font-bold text-xl group-hover:text-[#0A3764] transition-colors">
                {' '}LOKO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-semibold transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-[#0A3764]'
                    : 'text-gray-600 hover:text-[#0A3764]'
                }`}
              >
                {item.label}
                {/* Hover underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0A3764] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Panier */}
            <Link
              to="/shop"
              className="relative p-2 text-gray-600 hover:text-[#0A3764] transition-colors"
            >
              <ShoppingCart size={22} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* CTA */}
            <a
              href="tel:+2290162994910"
              className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-[#0A3764] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone size={18} />
              <span>Réservez maintenant</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#0A3764]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

    

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#0A3764] bg-gray-100'
                    : 'text-gray-600 hover:text-[#0A3764]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-3">
              <a
                href="tel:+2290162994910"
                className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-[#0A3764] text-white font-semibold px-4 py-2 rounded-lg w-full flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Phone size={18} />
                <span>Réservez maintenant</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
