import Image from "next/image"

export default function TestimonialsComponent(){
    return (
        <section>
            <div>
                <h1>Hear what's Our Students has to Say </h1>
            </div>
            <div>
                <ImageCard 
                src="https://example.com/image1.jpg" 
                alt="Student 1" />


                
                <ImageCard 
                src="https://example.com/image6.jpg" 
                alt="Student 6" />
                <ImageCard 
                src="https://example.com/image7.jpg" 
                alt="Student 7" />
                <ImageCard 
                src="https://example.com/image8.jpg" 
                alt="Student 8" />
            </div>
        </section>
    )
}



function ImageCard(){
    return (
        <Image src={src} alt=""  className=""/>
    )
}