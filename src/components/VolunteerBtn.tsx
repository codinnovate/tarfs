import { volunteer } from "@/assets";
import Image from "next/image";

export default function VolunteerBtn(){
    return (
        <button className="flex gap-2 rounded-2xl items-center">
            <Image 
            src={volunteer} 
            alt="Volunteer" 
            width={32}
            className="object-contain"
            />
            <div className="flex flex-col items-start">
                <span className="text-pink-700 text-sm playwrite  font-medium">Join Us Now</span>
                <span className="text-black">Become a Volunteer</span>
            </div>

            
        </button>
    )
}