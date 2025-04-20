"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Sun } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 bg-tarf-pink-lightest bg-diagonal-pattern relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
            About <span className="text-tarf-pink">TARFs</span> Foundation
          </h2>
          <div className="h-1 w-20 bg-tarf-pink mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-tarf-pink-lighter rounded-full p-4">
                <Heart className="w-10 h-10 text-tarf-pink" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-4 text-center">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To enhance the dignity, confidence, and overall wellbeing of teenage girls through 
              proper menstrual hygiene management education, empowerment initiatives, and spiritual 
              growth opportunities, enabling them to reach their full potential despite socioeconomic 
              challenges.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-tarf-pink-lighter rounded-full p-4">
                <Target className="w-10 h-10 text-tarf-pink" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-4 text-center">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A world where no girl misses school or opportunities due to menstruation, where they 
              are equipped with knowledge about their bodies, and where spiritual values guide them to 
              make positive life choices. We envision communities where period poverty is eliminated 
              and girls are empowered to become leaders.
            </p>
          </motion.div>

          {/* Values Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 md:col-span-2"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-tarf-pink-lighter rounded-full p-4">
                <Sun className="w-10 h-10 text-tarf-pink" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-4 text-center">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <h4 className="font-bold text-tarf-pink text-lg mb-2">Dignity</h4>
                <p className="text-gray-600">Respecting the inherent worth of every girl</p>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-tarf-pink text-lg mb-2">Empowerment</h4>
                <p className="text-gray-600">Building confidence and self-sufficiency</p>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-tarf-pink text-lg mb-2">Faith</h4>
                <p className="text-gray-600">Nurturing spiritual growth and hope</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;