'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, CreditCard, Building2 } from 'lucide-react';

const Donate: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
              Make a <span className="text-tarf-pink">Difference</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your donation helps us provide menstrual products, education, and support to girls in need.
            </p>
            <div className="h-1 w-20 bg-tarf-pink mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <CreditCard className="w-8 h-8 text-tarf-pink mr-3" />
                <h2 className="text-2xl font-display font-bold">Online Payment</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Make a secure online donation through our payment partner.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-tarf-pink text-white font-bold py-4 px-8 rounded-xl shadow-md 
                hover:bg-tarf-pink-dark transition duration-300 flex items-center justify-center"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <Building2 className="w-8 h-8 text-tarf-pink mr-3" />
                <h2 className="text-2xl font-display font-bold">Bank Transfer</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">Bank Name:</p>
                  <p className="text-gray-600">Providus Bank</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Account Name:</p>
                  <p className="text-gray-600">
                    TIN.ADEYAN.FAD.REB Foundation 
                    </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Account Number:</p>
                  <p className="text-gray-600">1307249941</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-tarf-pink-lightest rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-4 text-center">
              Your Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <p className="text-4xl font-bold text-tarf-pink mb-2">₦2,000</p>
                <p className="text-gray-600">Provides menstrual supplies for one girl for a month</p>
              </div>
              <div className="p-4">
                <p className="text-4xl font-bold text-tarf-pink mb-2">₦10,000</p>
                <p className="text-gray-600">Sponsors a girl&apos;s hygiene education workshop</p>
              </div>
              <div className="p-4">
                <p className="text-4xl font-bold text-tarf-pink mb-2">₦50,000</p>
                <p className="text-gray-600">Supports our monthly outreach program</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;