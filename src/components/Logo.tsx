import { logo } from "@/assets";
import Image from "next/image";

export default function Logo(){
    return (
        <div className="flex  items-center">
            <Image 
            src={logo} 
            width={120}
            height={120}
            alt="tarfs foundation logo" 
            className="object-contain -ml-8 max-w-[120px] h-[120px]" 
            />
            <h1 className="text-pink text-xl font-bold -ml-5">Tarfs Foundation</h1>

        </div>
)}