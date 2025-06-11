import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-purple-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              FemAlly
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
            <a href="#support" className="text-gray-700 hover:text-purple-600 transition-colors">Support</a>
            <a href="#global" className="text-gray-700 hover:text-purple-600 transition-colors">Global Reach</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-purple-100">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Services</a>
              <a href="#support" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Support</a>
              <a href="#global" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Global Reach</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;