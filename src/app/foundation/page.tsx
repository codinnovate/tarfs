"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import book1 from "@/assets/book1.jpg";

export default function FoundationPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-tarf-pink-lightest">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-display font-bold text-gray-900 text-center"
          >
            Delivering Dignity
          </motion.h1>
          <p className="mt-3 text-center text-gray-700 max-w-2xl mx-auto">
            Empowering girls with menstrual health education, resources, and compassion.
          </p>
        </div>
      </section>

      {/* Two-column layout: left = founder card, right = about/vision/impact text */}
      <section className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Founder card with image and basic details */}
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b bg-tarf-pink text-white text-sm font-medium">Founder’s Story</div>
              <div className="p-6 space-y-4">
                <div className="rounded-lg overflow-hidden shadow aspect-[3/4] bg-gray-100">
                  <Image
                    src="/tinu.jpg"
                    alt="TARFS Foundation Founder — Tinuade Adeyanju"
                    width={800}
                    height={1066}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-gray-900">Tinuade Fadekemi Adeyanju</h3>
                  <p className="text-tarf-pink mt-1">Founder & Visionary</p>
                  <p className="mt-2 text-sm text-gray-600">@tarfsfoundation</p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/donate"
                    className="inline-block bg-tarf-pink hover:bg-tarf-pink-dark text-white px-5 py-2 rounded-full font-medium shadow-md"
                  >
                    Support Our Work
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Consolidated text sections — About, Vision & Impact */}
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b bg-tarf-pink-light text-gray-900 text-sm font-medium">About, Vision & Impact</div>
              <div className="p-6 space-y-6 text-gray-700">
                <div>
                  <h4 className="font-display font-bold text-lg text-gray-900">About the Founder</h4>
                  <div className="mt-2 space-y-4">
                    <p>
                      Tinuade Adeyanju is a humanitarian and advocate for menstrual education and
                      empowerment. She founded the TARFS Foundation to provide menstrual hygiene
                      products to secondary school girls and ensure uninterrupted access to
                      menstrual health education.
                    </p>
                    <p>
                      Driven by faith and compassion, Tinuade’s mission is to uplift girls and
                      women through knowledge, care, and community.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-gray-900">Vision & Impact</h4>
                  <div className="mt-2 space-y-4">
                    <p>
                      We deliver education, reusable products, and mentorship that help girls stay in
                      school, reduce period poverty, and embrace their dignity.
                    </p>
                    <p>
                      TARFS has impacted over 2,500 girls across states in Nigeria through
                      outreach and empowerment programs, building confidence and dignity.
                    </p>
                    <p>
                      Our outreach partners and volunteers make programs possible across communities.
                      Join us to expand this work and reach more girls.
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden mt-4">
                    <Image
                      src={book1}
                      alt="Book by Tinuade Adeyanju"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-gray-900">Books</h4>
                  <p className="mt-2 text-gray-700">
                    Tinuade has authored inspirational books centered on faith, dignity, and empowerment.
                    Explore her titles and educational materials.
                  </p>
                  <div className="mt-3">
                    <Link href="/books" className="inline-block px-4 py-2 rounded-full bg-tarf-pink text-white hover:bg-tarf-pink-dark shadow">
                      View Books
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}