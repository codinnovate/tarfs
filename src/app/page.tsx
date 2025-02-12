import GirlsFirst from "@/components/GirlsFirst";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home(){
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <GirlsFirst />


    </main>
  )
}