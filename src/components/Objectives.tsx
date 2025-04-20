"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Heart, ShieldCheck, Users } from 'lucide-react';

const Objectives: React.FC = () => {
  const objectives = [
    {
      icon: <BookOpen className="w-10 h-10 text-tarf-pink" />,
      title: "Education & Awareness",
      description: "Provide comprehensive menstrual health education to reduce stigma and increase knowledge.",
    },
    {
      icon: <Heart className="w-10 h-10 text-tarf-pink" />,
      title: "Menstrual Hygiene Resources",
      description: "Distribute reusable sanitary products and hygiene kits to girls from underprivileged backgrounds.",
    },
    {
      icon: <Users className="w-10 h-10 text-tarf-pink" />,
      title: "Community Engagement",
      description: "Create safe spaces for girls to discuss challenges and support each other.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-tarf-pink" />,
      title: "Leadership Development",
      description: "Nurture confidence and leadership skills through workshops and mentorship programs.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-tarf-pink" />,
      title: "Spiritual Growth",
      description: "Foster spiritual values that guide personal development and positive decision-making.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="objectives" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
            Our <span className="text-tarf-pink">Objectives</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We`&apos;`re committed to creating lasting impact through these key focus areas,
            addressing both practical needs and holistic development.
          </p>
          <div className="h-1 w-20 bg-tarf-pink mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition duration-300"
            >
              <div className="bg-tarf-pink-lightest rounded-full p-4 inline-block mb-4">
                {objective.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
                {objective.title}
              </h3>
              <p className="text-gray-600">
                {objective.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Objectives;