'use client';
import {motion} from 'framer-motion';
import Image from "next/image";

export default function Hero(){
    return (
        <section
        className="flex flex-col md:flex-row h-screen w-full max-w-6xl p-2 mx-auto items-center">
        <div className="flex flex-col md:w-[50%] gap-7">
            <motion.h2
             animate={{
                y:0,
             }}
             whileInView={{
                y:20,
             }}
             transition={{
                duration:0.5
             }}
             className="playwrite text-pink">Empowering Girls, Breaking Barriers</motion.h2>
            <motion.h1
            whileInView={{
                x:0
             }}
             animate={{
                x:50
             }}
             transition={{
                duration:0.7
             }}
            className="font-semibold text-5xl">Ending <span className="text-wine">Period Poverty </span>
                <br/> Enabling <span className="text-pink">Period Dignity</span>
            </motion.h1>
            <motion.p 
            whileInView={{
                y:0
             }}
             animate={{
                y:50
             }}
             transition={{
                duration:0.7
             }}
            className="text-gray-500 font-medium ">We provide menstrual products and education to ensure every girl can live with confidence and dignity.
            </motion.p>
        </div>
        <motion.div
        whileInView={{
            y:0, x:0
         }}
         animate={{
            y:-50, x:-40
         }}
         transition={{
            duration:2
         }}
         className="md:w-[50%]">
            <Image 
            src='/1.png' 
            width={500}
            height={500}
            alt='Tarfs FOundsation' 
            className="object-cover w-full h-full" 
            loading="lazy"
             />
        
        </motion.div>

        </section>
    )
}