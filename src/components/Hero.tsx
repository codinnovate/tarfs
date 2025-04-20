"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-tarf-pink-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1607748851687-ba9a10438621?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Diverse teenage girls learning together"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tarf-pink-dark to-tarf-pink opacity-60"></div>
        <div className="absolute inset-0 bg-diagonal-pattern mix-blend-soft-light"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Empowering Teenage Girls Through Hygiene, Hope & Faith
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Supporting vulnerable girls with menstrual hygiene education, 
            resources, and spiritual guidance to build confidence and create futures.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-tarf-pink-dark font-bold py-3 px-8 rounded-full text-lg shadow-lg 
            hover:shadow-xl transition duration-300 inline-block"
          >
            Join the Movement
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative wave shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#FFFFFF" 
            fillOpacity="1" 
            d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,90.7C672,107,768,117,864,106.7C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;