import React from 'react';
import { QrCode, Wallet, Heart } from 'lucide-react';

const Support = () => {
  const walletAddress = "0x62468C025d2738eDB2662B9994F52Af0Afa17c9d";
  
  // Generate QR code URL using QR Server API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${walletAddress}`;

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
                    We accept cryptocurrency donations for secure, transparent, and global accessibility. Your contributions are processed safely and efficiently.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-8 text-white">
                  <Wallet className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-6">Crypto Donation</h4>
                  
                  <div className="bg-white rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-center mb-4">
                      <QrCode className="h-6 w-6 text-purple-600 mr-2" />
                      <span className="text-purple-600 font-semibold">Scan to Donate</span>
                    </div>
                    <img 
                      src={qrCodeUrl} 
                      alt="Wallet QR Code" 
                      className="mx-auto rounded-lg shadow-md"
                    />
                  </div>
                  
                  <p className="text-purple-100 text-sm mb-4">
                    Scan the QR code above with your crypto wallet to make a secure donation
                  </p>
                  
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-white/90 text-xs">
                      Wallet Address Available via QR Code
                    </p>
                  </div>
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