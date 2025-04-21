'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Target, Users, Trophy } from 'lucide-react';

const Partner: React.FC = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-tarf-pink" />,
      title: "Impact",
      description: "Reach thousands of girls and make a lasting difference in their lives."
    },
    {
      icon: <Users className="w-8 h-8 text-tarf-pink" />,
      title: "Community",
      description: "Join a network of organizations committed to girl empowerment."
    },
    {
      icon: <Trophy className="w-8 h-8 text-tarf-pink" />,
      title: "Recognition",
      description: "Get featured in our communications and annual impact report."
    }
  ];

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
              Partner With <span className="text-tarf-pink">Us</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us in our mission to empower teenage girls through menstrual hygiene education and support.
            </p>
            <div className="h-1 w-20 bg-tarf-pink mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="bg-tarf-pink-lightest rounded-full p-4 inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-tarf-pink-lightest rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-6">
                Upcoming Outreach Programs
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-xl font-bold text-tarf-pink mb-2">
                    School Outreach Program
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Distribution of menstrual hygiene kits and educational workshops in 10 schools.
                  </p>
                  <div className="flex items-center text-gray-500">
                    <span className="mr-4">Target: 1000 girls</span>
                    <span>Budget: ₦500,000</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-xl font-bold text-tarf-pink mb-2">
                    Community Health Fair
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Large-scale community event focusing on menstrual health education and awareness.
                  </p>
                  <div className="flex items-center text-gray-500">
                    <span className="mr-4">Target: 500 families</span>
                    <span>Budget: ₦300,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-6 text-center">
                Partnership Inquiry
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tarf-pink"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tarf-pink"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tarf-pink"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tarf-pink"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    How would you like to partner with us?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tarf-pink"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-tarf-pink text-white font-bold py-3 px-8 rounded-xl shadow-md 
                  hover:bg-tarf-pink-dark transition duration-300 flex items-center justify-center"
                >
                  <Handshake className="w-5 h-5 mr-2" />
                  Submit Inquiry
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;