import React from 'react';
import { MessageCircle, Users, BookOpen, Phone, Heart, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Personal Counseling",
      description: "One-on-one sessions with trained counselors who understand your journey and provide personalized support.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Support Groups",
      description: "Connect with others who share similar experiences in a safe and welcoming group environment.",
      color: "pink"
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Access comprehensive guides, articles, and materials to help you navigate your path confidently.",
      color: "teal"
    },
    {
      icon: Phone,
      title: "24/7 Helpline",
      description: "Round-the-clock support for those moments when you need someone to talk to immediately.",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Family Support",
      description: "Guidance and resources for family members and friends to understand and support their loved ones.",
      color: "pink"
    },
    {
      icon: Shield,
      title: "Safe Spaces",
      description: "Physical and virtual environments where you can be yourself without fear of judgment or discrimination.",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white';
      case 'pink':
        return 'bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white';
      case 'teal':
        return 'bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white';
      default:
        return 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white';
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support services designed to meet you wherever you are in your journey, offering professional guidance and community connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(service.color)}`}>
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Access Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;