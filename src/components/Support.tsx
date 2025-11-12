import React from 'react';
import { Wallet, Heart } from 'lucide-react';

const Support = () => {
  return (
    <section id="support" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Support Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your contributions help us provide vital support services to individuals worldwide. Every donation makes a difference in someone's journey toward self-acceptance and authentic expression.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Make a Difference</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Your support enables us to continue providing essential services including counseling, support groups, educational resources, and crisis intervention to those who need it most.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Heart className="h-6 w-6 text-pink-500 mr-3" />
                    <span className="text-gray-700">Fund counseling sessions for individuals in need</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-6 w-6 text-pink-500 mr-3" />
                    <span className="text-gray-700">Support community outreach programs</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-6 w-6 text-pink-500 mr-3" />
                    <span className="text-gray-700">Expand our global support network</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-6 w-6 text-pink-500 mr-3" />
                    <span className="text-gray-700">Develop new educational resources</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Secure Crypto Donations</h4>
                  <p className="text-gray-600 text-sm">
                    We accept multiple payment methods including cryptocurrency for secure, transparent, and global accessibility. Your contributions are processed safely and efficiently.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-8 text-white">
                  <Wallet className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-6">Make a Donation</h4>
                  
                  <div className="bg-white rounded-xl p-4 mb-6">
                    <iframe 
                      src="https://nowpayments.io/embeds/donation-widget?api_key=8c8048e4-194d-4b27-a9c1-8280c13c9ae8" 
                      width="346" 
                      height="623" 
                      frameBorder="0" 
                      scrolling="no" 
                      style={{overflow: 'hidden', maxWidth: '100%'}}
                      title="Donation Widget"
                    >
                      Can't load widget
                    </iframe>
                  </div>
                  
                  <p className="text-purple-100 text-sm mb-4">
                    Choose your preferred payment method to make a secure donation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thank you for supporting our mission to create a more inclusive and understanding world. Your generosity helps us provide hope, support, and community to those who need it most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;