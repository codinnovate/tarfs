"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The menstrual hygiene workshops changed my life. I no longer feel ashamed during my period, and the reusable pads have saved me so much money.",
      name: "Sophia J.",
      role: "Program Beneficiary, 16",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      quote: "Before joining TARFs Foundation's programs, I used to miss school during my period. Now I have the products and confidence to attend every day.",
      name: "Michelle K.",
      role: "Student, 15",
      image: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      quote: "The mentorship program paired me with an amazing role model who has helped me plan for my future and believe in myself.",
      name: "Sarah T.",
      role: "Mentorship Participant, 17",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: number | null = null;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, testimonials.length]);

  const nextSlide = () => {
    setAutoplay(false);
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setAutoplay(false);
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <section className="py-20 bg-tarf-pink-lightest">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
            <span className="text-tarf-pink">Testimonials</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the girls whose lives have been impacted by our programs and support.
          </p>
          <div className="h-1 w-20 bg-tarf-pink mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
            >
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Image 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-tarf-pink-lighter"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-tarf-pink rounded-full p-2">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg md:text-xl mb-6 italic">
              `&quot;`,{testimonials[current].quote}`&quot;`,
              </p>
              <h4 className="font-display font-bold text-gray-900 text-lg">
                {testimonials[current].name}
              </h4>
              <p className="text-tarf-pink text-sm">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 md:-translate-x-10 
            bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5 text-tarf-pink" />
          </button>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 md:translate-x-10 
            bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5 text-tarf-pink" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(index);
                }}
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

export default Testimonials;