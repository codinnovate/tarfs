"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, HandHelping, Handshake } from 'lucide-react';

const GetInvolved: React.FC = () => {
  const options = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Donate",
      description: "Your financial support helps us provide sanitary products, educational materials, and run our empowerment programs.",
      buttonText: "Make a Donation",
      backgroundColor: "bg-gradient-to-br from-tarf-pink to-tarf-pink-dark",
    },
    {
      icon: <HandHelping className="w-8 h-8" />,
      title: "Volunteer",
      description: "Share your time and skills to help with workshops, events, and administrative tasks.",
      buttonText: "Join as Volunteer",
      backgroundColor: "bg-gradient-to-br from-purple-500 to-violet-600",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Partner With Us",
      description: "Organizations and businesses can collaborate with us on projects and sponsorships.",
      buttonText: "Become a Partner",
      backgroundColor: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="get-involved" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
            Get <span className="text-tarf-pink">Involved</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our mission to empower teenage girls. There are multiple ways you can
            contribute and make a meaningful difference.
          </p>
          <div className="h-1 w-20 bg-tarf-pink mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {options.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`${option.backgroundColor} rounded-2xl shadow-xl overflow-hidden text-white`}
            >
              <div className="p-8">
                <div className="bg-white/20 rounded-full p-4 inline-flex mb-6">
                  {option.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  {option.title}
                </h3>
                <p className="mb-6 text-white/90">
                  {option.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 font-bold py-2 px-6 rounded-full shadow-md 
                  hover:shadow-lg transition duration-300"
                >
                  {option.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;