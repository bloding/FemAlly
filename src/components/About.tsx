import React from 'react';
import { Globe, Heart, Users, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About FemAlly</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FemAlly is a pioneering global platform dedicated to supporting individuals who embrace feminine expression and gentle behaviors, regardless of their assigned gender at birth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6">
              We believe that everyone deserves to express their authentic self in a supportive and understanding environment. FemAlly provides comprehensive support services, resources, and community connections for individuals exploring or living with feminine identity expressions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our platform offers personalized guidance, peer support networks, and professional counseling services to help individuals navigate their journey with confidence and dignity.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                <Heart className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-purple-700 font-medium">Compassionate Support</span>
              </div>
              <div className="flex items-center bg-pink-50 px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-pink-600 mr-2" />
                <span className="text-pink-700 font-medium">Safe Environment</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-purple-600 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">One-on-one counseling and support sessions</span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-600 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Peer support groups and community connections</span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-600 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Educational resources and guidance materials</span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-600 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Family and friend support services</span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-600 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Crisis intervention and emergency support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;