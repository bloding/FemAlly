import React from 'react';
import { Heart, Globe, Shield, Users, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                FemAlly
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering individuals worldwide through compassionate support, understanding, and community connection.
            </p>
            <div className="flex space-x-4">
              <div className="bg-purple-600 p-2 rounded-full">
                <Heart className="h-5 w-5" />
              </div>
              <div className="bg-pink-600 p-2 rounded-full">
                <Users className="h-5 w-5" />
              </div>
              <div className="bg-teal-600 p-2 rounded-full">
                <Shield className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Personal Counseling</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Support Groups</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Educational Resources</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">24/7 Helpline</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Family Support</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Safe Spaces</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#global" className="hover:text-purple-400 transition-colors">Global Presence</a></li>
              <li><a href="#support" className="hover:text-purple-400 transition-colors">Support Us</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Help Now</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-400 mr-3" />
                <div>
                  <p className="font-medium">Direct Support</p>
                  <a href="tel:+212606253403" className="text-purple-400 hover:text-purple-300">
                    +212606253403
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-purple-400 mr-3" />
                <div>
                  <p className="font-medium">Global Reach</p>
                  <p className="text-sm">45+ Countries Served</p>
                </div>
              </div>
              
              <div className="bg-purple-900/50 rounded-lg p-4">
                <p className="text-sm font-medium text-purple-300 mb-1">Crisis Support Available</p>
                <p className="text-xs text-gray-400">24/7 Emergency Assistance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FemAlly. All rights reserved. Created with compassion for a more inclusive world.
            </p>
            <div className="flex items-center mt-4 md:mt-0 space-x-4">
              <span className="text-gray-400 text-sm">Secure & Confidential</span>
              <Shield className="h-4 w-4 text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
