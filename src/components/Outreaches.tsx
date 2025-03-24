import Image from "next/image"

export default function OutReaches(){
    return (
        <div className="max-w-6xl mx-auto p-3 flex flex-col gap-5 ">
            <h2 className="text-2xl font-semibold">Discover Outreaches inspired by us to help girls </h2>
            {/* Outreach content goes here */}
            <div className="flex gap-5">
                <BigCard />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            </div>
        </div>
    )
}

function Card(){
    return (
        <div className="flex md:flex-col  gap-5 my-4 ">
            <Image
             src={'/outreach.jpg'} 
             width={100} 
             height={100} 
             className="object-cover hover:scale-95 transition-all duration-300 md:!h-[160px] w-[100px] md:w-full rounded-2xl"
             alt="Tarf's "
              />
              <div className="flex flex-col gap-3">
                    <h2 className="text-gray-500">1k donations</h2>
                    <h1 className="text-base font-semibold">Pad 300 Girls at Ogbomosho High School</h1>
                    <h2 className="font-semibold">65,000Naira Raised</h2>
              </div>
            {/* Card content goes here */}
            
        </div>
    )
}
function BigCard(){
    return (
        <div className="gap-5 my-4 hidden flex-col md:flex">
            <Image
             src={'/outreach.jpg'} 
             width={600} 
             height={70} 
             className="object-cover hover:scale-95 transition-all duration-300  rounded-2xl"
             alt="Tarf's "
              />
              <div className="flex flex-col gap-3">
                    <h2 className="text-gray-500">1k donations</h2>
                    <h1 className="text-base md:text-lg font-semibold">Pad 300 Girls at Ogbomosho High School</h1>
                    <h2 className="font-semibold text-gray-700">65,000# Raised</h2>
              </div>
            {/* Card content goes here */}
            
        </div>
    )
}