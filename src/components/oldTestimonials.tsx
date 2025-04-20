import Image, { StaticImageData } from "next/image"

export default function TestimonialsComponent(){
    return (
        <section className="max-w-6xl mx-auto p-2 flex flex-col gap-[5em] mt-[5em] ">
                <h1 className="text-3xl md:text-5xl  text-pink text-center font-medium">Hear From Students Who Trust us, Tarfs </h1>
            <div className="flex flex-col md:flex-row items-center  md:justify-between gap-5 w-full">
                <ImageCard 
                src='/s1.jpg'
                />
                <ImageCard 
                src='/s2.JPG' 
                />
                <ImageCard 
                src='/s3.jpg' 
                />
            </div>
        </section>
    )
}



function ImageCard({src}:{src:string | StaticImageData}){
    return (
        <Image 
        src={src} 
        alt="tarfs"  
        width={316}
        height={568}
        className="rounded-[20px] w-[316px] h-[568px] object-cover"
        />
    )
}