'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | string[];
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is menstrual hygiene?",
      answer: "Menstrual hygiene refers to the practice of maintaining cleanliness during menstruation, changing them regularly, and ensuring proper disposal to prevent infections and discomfort."
    },
    {
      question: "How often should I change my pad/tampon?",
      answer: "It's recommended to change a sanitary pad or tampon every 4 to 6 hours to prevent leaks, odors, and bacterial growth. If your flow is heavy, you may need to change it more often."
    },
    {
      question: "What are the best products to use during menstruation?",
      answer: [
        "The best product depends on individual needs and preferences. Common menstrual products include:",
        "• Sanitary pads: Ideal for those who want a simple option.",
        "• Tampons: Used internally and can be more discreet.",
        "• Menstrual cups: Eco-friendly, and hold more fluid than pads or tampons."
      ]
    },
    {
      question: "How can I manage period cramps?",
      answer: [
        "Period cramps can be managed in several ways:",
        "• Use a heating pad on your lower abdomen",
        "• Practice relaxation techniques like yoga or meditation",
        "• Stay hydrated and exercise regularly"
      ]
    },
    {
      question: "What are the risks of poor menstrual hygiene?",
      answer: [
        "Poor menstrual hygiene can lead to various health risks, including:",
        "• Urinary tract infections (UTIs)",
        "• Vaginal infections",
        "• Skin irritation or rashes"
      ]
    },
    {
      question: "How should I dispose of menstrual products?",
      answer: "Menstrual products like pads and tampons should be wrapped in toilet paper before being disposed of in a trash bin. Avoid flushing them down the toilet, as they can cause blockages in plumbing and contribute to environmental pollution."
    },
    {
      question: "How do I prevent bad odor during menstruation?",
      answer: [
        "To prevent odor, make sure to:",
        "• Change your pad or tampon regularly",
        "• Practice good hygiene by washing with mild, unscented soap and water",
        "• Wear breathable underwear to allow airflow"
      ]
    },
    {
      question: "Can I get a menstrual disorder after my period starts?",
      answer: "Yes, menstrual disorders like dysmenorrhea (painful periods), menorrhagia (heavy bleeding), or amenorrhea (missed periods) can occur at any time due to hormonal imbalances, stress, or underlying health conditions. It's important to consult a doctor if you notice irregularities."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-tarf-pink">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about menstrual hygiene and health.
          </p>
          <div className="h-1 w-20 bg-tarf-pink mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left bg-white px-6 py-4 rounded-lg shadow-md hover:shadow-lg 
                transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-tarf-pink"
              >
                <div className="flex justify-between items-center">
                  <h2 className=" text-gray-800">{faq.question}</h2>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-tarf-pink" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-tarf-pink" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-tarf-pink-lightest rounded-b-lg">
                      {Array.isArray(faq.answer) ? (
                        <div className="space-y-2">
                          {faq.answer.map((line, i) => (
                            <p key={i} className="text-gray-600">{line}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">{faq.answer}</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;