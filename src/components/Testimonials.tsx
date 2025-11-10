"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import Link from 'next/link';

const ContentFeed: React.FC = () => {
  const tiktoks = [
    {
      url:"https://www.tiktok.com/@tarfsfoundation/video/7544412136290667794",
      id: '7544412136290667794',
      author: '@tarfsfoundation',
    },
    {
      url: 'https://www.tiktok.com/@tarfsfoundation/video/7544653754189024520',
      id: '7544653754189024520',
      author: '@tarfsfoundation',
    },
    {
      url: 'https://www.tiktok.com/@tarfsfoundation/video/7567731200102534420',
      id: '7567731200102534420',
      author: '@tarfsfoundation',
    },
  ];

  return (
    <section className="py-20">
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-3">
            <span className="text-tarf-pink">Our Content</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch recent videos and highlights from our programs and outreach.
          </p>
          <div className="h-1 w-20 bg-tarf-pink mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiktoks.map((t) => (
            <div key={t.id} className="p-3">
              <blockquote
                className="tiktok-embed"
                cite={t.url}
                data-video-id={t.id}
                style={{ maxWidth: 605, minWidth: 325 }}
              >
                <section>
                  <Link href={`https://www.tiktok.com/${t.author.substring(1)}`} target="_blank" className="text-sm text-gray-600 hover:underline">
                    {t.author}
                  </Link>
                </section>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="https://www.tiktok.com/@tarfsfoundation"
            target="_blank"
            className="inline-block bg-tarf-pink text-white px-5 py-2 rounded-md font-medium hover:brightness-95"
          >
            See more on TikTok
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentFeed;