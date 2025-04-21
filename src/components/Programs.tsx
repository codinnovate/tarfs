"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Menstrual Hygiene Workshops",
      description: "Educational workshops conducted in schools and community centers, focusing on proper menstrual hygiene practices, reproductive health, and dispelling myths.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Sanitary Pad Distribution",
      description: "Regular distribution of  sanitary products to girls from low-income families, ensuring they don't miss school due to their periods.",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Mentorship Program",
      description: "Connecting girls with successful female mentors who guide them on personal development, career options, and life skills.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Spiritual Retreats",
      description: "Faith-based retreats providing spiritual guidance, community building, and personal reflection opportunities in a supportive environment.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === programs.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? programs.length - 1 : current - 1);
  };

  return (
    <section id="programs" className="py-20 bg-dot-pattern bg-tarf-pink-lightest relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
            Our <span className="text-tarf-pink">Programs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            TARFs Foundation offers various programs designed to address the practical, 
            emotional, and spiritual needs of teenage girls.
          </p>
          <div className="h-1 w-20 bg-tarf-pink mx-auto mt-4"></div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="rounded-xl overflow-hidden shadow-xl h-64 md:h-96">
                <Image 
                  src={programs[current].image} 
                  alt={programs[current].title}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-display font-bold text-tarf-pink mb-4">
                  {programs[current].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {programs[current].description}
                </p>
                <button className="mt-6 bg-tarf-pink text-white font-bold py-2 px-6 rounded-full 
                  hover:bg-tarf-pink-dark transition duration-300 flex items-center">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full
            shadow-md hover:bg-white transition -ml-5 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6 text-tarf-pink" />
          </button>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full
            shadow-md hover:bg-white transition -mr-5 z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6 text-tarf-pink" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? 'bg-tarf-pink' : 'bg-tarf-pink-lighter'
                } transition-colors duration-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;