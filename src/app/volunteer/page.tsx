'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Volunteer: React.FC = () => {
  const teams = [
    {
      name: "Education Team",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Conduct workshops and training sessions on menstrual hygiene."
    },
    {
      name: "Outreach Team",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Organize and participate in community outreach programs."
    },
    {
      name: "Administrative Team",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Support day-to-day operations and event planning."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
        <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="container mx-auto px-4 pt-10"
>
  <div className="bg-tarf-pink-lightest p-6 rounded-3xl shadow-xl">
    <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-tarf-pink mb-6">
      Meet the Heart of TARFs Foundation 💖
    </h2>
    <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
      At the core of everything we do is a team of passionate, driven individuals working together to empower young girls and communities.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {[
        "/team-1.jpg",
        "/team-2.jpg",
        "/team-3.jpg",
      ].map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
          className="overflow-hidden rounded-2xl shadow-lg"
        >
          <Image
            src={src}
            alt={`TARFs Team ${index + 1}`}
            className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
              Join Our <span className="text-tarf-pink">Team</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Make a difference in the lives of young girls by volunteering with TARFs Foundation.
            </p>
            <div className="h-1 w-20 bg-tarf-pink mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {teams.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={team.image}
                    alt={team.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-800 mb-2">
                    {team.name}
                  </h3>
                  <p className="text-gray-600">
                    {team.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-tarf-pink-lightest rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 mb-6 text-center">
              Volunteer Application
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tarf-pink"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tarf-pink"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Why do you want to volunteer with us?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tarf-pink"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Which team would you like to join?
                </label>
                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tarf-pink">
                  <option>Education Team</option>
                  <option>Outreach Team</option>
                  <option>Administrative Team</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-tarf-pink text-white font-bold py-3 px-8 rounded-xl shadow-md 
                hover:bg-tarf-pink-dark transition duration-300"
              >
                Submit Application
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;