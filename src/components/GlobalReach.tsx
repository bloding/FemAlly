import React from 'react';
import { MapPin, Globe, Users, Building } from 'lucide-react';

const GlobalReach = () => {
  const regions = [
    {
      name: "North America",
      countries: "United States, Canada, Mexico",
      centers: 25,
      color: "purple"
    },
    {
      name: "Europe",
      countries: "United Kingdom, Germany, France, Spain, Netherlands",
      centers: 32,
      color: "pink"
    },
    {
      name: "Asia Pacific",
      countries: "Australia, Japan, Singapore, South Korea, Thailand",
      centers: 18,
      color: "teal"
    },
    {
      name: "Latin America",
      countries: "Brazil, Argentina, Colombia, Chile, Peru",
      centers: 15,
      color: "purple"
    },
    {
      name: "Middle East & Africa",
      countries: "UAE, South Africa, Kenya, Morocco, Israel",
      centers: 12,
      color: "pink"
    },
    {
      name: "Online Global",
      countries: "Virtual support available worldwide",
      centers: 24,
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return 'from-purple-500 to-purple-600';
      case 'pink':
        return 'from-pink-500 to-pink-600';
      case 'teal':
        return 'from-teal-500 to-teal-600';
      default:
        return 'from-purple-500 to-purple-600';
    }
  };

  return (
    <section id="global" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Global Presence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FemAlly operates support centers across six continents, providing local expertise with global connectivity. No matter where you are, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-full p-6 w-24 h-24 mx-auto mb-4">
              <Globe className="h-12 w-12 text-purple-600 mx-auto" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">126+</h3>
            <p className="text-gray-600">Support Centers Worldwide</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-full p-6 w-24 h-24 mx-auto mb-4">
              <MapPin className="h-12 w-12 text-pink-600 mx-auto" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">45+</h3>
            <p className="text-gray-600">Countries Served</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-full p-6 w-24 h-24 mx-auto mb-4">
              <Users className="h-12 w-12 text-teal-600 mx-auto" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">50K+</h3>
            <p className="text-gray-600">Lives Supported</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getColorClasses(region.color)} flex items-center justify-center mb-4`}>
                <Building className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{region.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{region.countries}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">{region.centers}</span>
                <span className="text-sm text-gray-500">Support Centers</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mt-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Growing Every Day</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              We're continuously expanding our network to reach more communities worldwide. Our mission is to ensure that support is accessible to everyone, regardless of location or circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
              >
                Find Local Support
              </a>
              <a
                href="#contact"
                className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;