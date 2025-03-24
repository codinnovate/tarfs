import Button from "./Button"

export default function Footer(){
    return (
        <footer className="rounded-t-[1em] bg-white text-black  p-2 md:p-10">
            <section className="max-w-6xl pt-10 mx-auto flex flex-col md:grid grid-cols-3 justify-between gap-5">
              <ul className="flex flex-col gap-3">
                <h1 className="font-semibold text-base">Donate</h1>
                <TypoGraph
                 text='Volunteer'
                />
                <TypoGraph
                 text='Send packages'
                />
                <TypoGraph
                 
                 text='Help a School'
                />
              </ul>
              <ul className="flex flex-col gap-3">
              <h1 className="font-semibold text-base">Foundation</h1>
              <TypoGraph
                 text='+32461438932'
                />
                <TypoGraph
                 
                 text='About us'
                />
                <TypoGraph
                 
                 text='Join us'
                />
              </ul>
               <ul className="gap-5 flex flex-col">
                 <Button
                 title='Donate' 
                 />
               </ul>
            </section>
            <p className="text-center mt-5">
            Tarfs Foundation &copy; 2022 - 2024
            </p>
        </footer>
    )
}


function TypoGraph({text}:{text:string}){
    return (
            <p>{text}</p>
    )
}