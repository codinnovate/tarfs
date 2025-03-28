import Events from "@/components/Events";
import GirlsFirst from "@/components/GirlsFirst";
import Hero from "@/components/Hero";
import OutReaches from "@/components/Outreaches";
import TestimonialsComponent from "@/components/Testimonials";

export default function Home(){
  return (
    <main className="flex flex-col gap-10 overflow-x-hidden">
      <Hero />
      
      <GirlsFirst />

      
      <TestimonialsComponent />
      <OutReaches />
      <Events />
      


    </main>
  )
}