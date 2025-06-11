import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const phoneNumber = "+34632800363";

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to listen, support, and help you on your journey. Reach out to us anytime - our team is ready to provide the compassionate care you deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Direct Support Line</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Call or WhatsApp</h4>
                    <a 
                      href={`tel:${phoneNumber}`}
                      className="text-purple-600 hover:text-purple-700 text-xl font-bold"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-pink-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Available</h4>
                    <p className="text-gray-600">24/7 Emergency Support</p>
                    <p className="text-gray-600">Regular Hours: 8 AM - 10 PM GMT</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-teal-100 rounded-full p-3 mr-4">
                    <MessageCircle className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Languages</h4>
                    <p className="text-gray-600">English Support Available</p>
                    <p className="text-gray-500 text-sm">Additional languages via translation services</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Crisis Support</h3>
              <p className="mb-6">
                If you're experiencing a crisis or emergency situation, please don't hesitate to contact us immediately. We have trained professionals available around the clock.
              </p>
              <a
                href={`tel:${phoneNumber}`}
                className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now for Emergency Support
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a topic</option>
                  <option value="support">Request Support</option>
                  <option value="counseling">Counseling Services</option>
                  <option value="group">Join Support Group</option>
                  <option value="resources">Educational Resources</option>
                  <option value="family">Family Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Share what's on your mind..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your privacy and confidentiality are our top priorities. All communications are handled with the utmost care and discretion by our trained professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;