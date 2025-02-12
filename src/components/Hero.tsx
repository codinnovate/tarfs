import Image from "next/image";
import Header from "./Header";

export default function Hero(){
    return (
        <section
        className="flex flex-col md:flex-row h-screen w-full max-w-6xl p-2 mx-auto items-center">
        <div className="flex flex-col md:w-[50%] gap-7">
            <h2 className="playwrite text-pink">Empowering Girls, Breaking Barriers</h2>
            <h1 className="font-semibold text-5xl">Ending <span className="text-wine">Period Poverty </span>
                <br/> Enabling <span className="text-pink">Period Dignity</span>
            </h1>
            <p className="text-gray-500 font-medium ">We provide menstrual products and education to ensure every girl can live with confidence and dignity."</p>
        </div>
        <div className="md:w-[50%]">
            <Image 
            src='/1.png' 
            width={500}
            height={500}
            alt='Tarfs FOundsation' 
            className="object-cover w-full h-full" 
            loading="lazy"
             />
        
        </div>

        </section>
    )
}