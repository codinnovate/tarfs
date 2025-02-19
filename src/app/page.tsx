import GirlsFirst from "@/components/GirlsFirst";
import Hero from "@/components/Hero";
import TestimonialsComponent from "@/components/Testimonials";

export default function Home(){
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <GirlsFirst />
      <TestimonialsComponent />


    </main>
  )
}