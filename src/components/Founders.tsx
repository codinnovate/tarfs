'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const Founders: React.FC = () => {
  return (
    <section 
    id="founders" 
    className="mt-[150px] py-20 bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-tarf-pink-lightest opacity-50 -skew-x-12 transform origin-top-right" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
            Our <span className="text-tarf-pink">Story</span>
          </h2>
          <div className="h-1 w-20 bg-tarf-pink mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src='/tinu.jpg'
                width={1000}
                height={400}
                alt="TARFs Foundation Founder"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-tarf-pink rounded-full p-4">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-6">
            Tinuade Fadekemi Adeyanju
              <span className="block text-lg font-normal text-tarf-pink mt-2">
              Founder & Visionary
                            </span>
            </h3>

            <div className="space-y-4 text-gray-600">
              <p>
              Tinuade Adeyanju is a passionate lover of God, a humanitarian at heart, and an advocate for menstrual education and empowerment. She is the founder of the TARFS Foundation @tarfsfoundation , a non-profit organization focused on providing menstrual hygiene products to secondary school girls, ensuring their dignity and uninterrupted access to menstrual hygiene education. 
              </p>

              <p>
              Over the past three years, TARFS Foundation has impacted
over 2,500 girls across various states in Nigeria through its education and empowerment programs.
              </p>

              <p>


Tinuade holds a degree in Political Science and Education from Obafemi Awolowo University. She is also hosts a network of believers called  Beauty for Ashes, where she inspires and uplifts people by sharing the truth of God&apos;s word.
In addition to her humanitarian work and leadership skills,

{/* Tinuade is a skilled makeup artist at House of Tarf @houseoftarf , where she brings creativity and expertise to her craft, transforming faces and enhancing beauty Furthermore, she works as a social media manager, content creator, and virtual assistant.
Driven by her faith, compassion for others, and commitment to uplifting the lives of women and girls, Tinuade&apos;s life mission is to make a lasting difference through compassion, empowerment, and artistry. Her mantra is”if you can see it, you can have it”. */}
              </p>

              <div className="pt-6">
                <motion.a
                  href="/foundation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-tarf-pink text-white font-bold py-3 px-8 rounded-full shadow-md 
                  hover:bg-tarf-pink-dark transition duration-300"
                >
                  Read Full Story
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div>

      </div>
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-10 text-gray-800 my-4">
            Our <span className="text-tarf-pink">Achievements</span>
          </h2>
          <div className='max-w-3xl mx-auto flex justify-center '>
          <Image
           src='/tarfs.jpg'
           width={500}
           height={500}
           alt='tarfs made money'
           />
           </div>
        </motion.div>
    </section>
  );
};

export default Founders;