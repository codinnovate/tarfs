
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Objectives from '@/components/Objectives';
import Programs from '@/components/Programs';
import GetInvolved from '@/components/GetInvolved';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import FAQ from "@/components/Faqs";


export default function Home(){
  return (
    <main className="flex flex-col gap-10 overflow-x-hidden">
      {/* <Hero />
      
      <GirlsFirst />

      
      <TestimonialsComponent />
      <OutReaches />
      <Events />
       */}
        <Hero />
        <About />
        <Objectives />
        <Programs />
        <GetInvolved />
        <FAQ />
        <Testimonials />
        <Contact />


    </main>
  )
}