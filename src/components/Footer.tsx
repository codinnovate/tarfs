import Button from "./Button"

export default function Footer(){
    return (
        <footer className="bg-black text-slate-400  p-2 md:p-10">
            <section className="max-w-6xl mx-auto flex flex-col md:grid grid-cols-3 justify-between gap-5">
              <ul>
                <h1>Reach Tarfs</h1>
                <TypoGraph
                 
                 text='+32461438932'
                />
                <TypoGraph
                 
                 text='help@tarf.org'
                />
                <TypoGraph
                 
                 text='36, Londoner avenue, olowo lajuogbon iju ishaga'
                />
              </ul>
              <ul>
                <h1>Reach Tarfs</h1>
                <TypoGraph
                 
                 text='+32461438932'
                />
                <TypoGraph
                 
                 text='help@tarf.org'
                />
                <TypoGraph
                 
                 text='36, Londoner avenue, olowo lajuogbon iju ishaga'
                />
              </ul>
               <ul>
                <h1>Support</h1>
                <p>wanna support us a tarf, be part of people will make things happens by helping the coming generation of female leaders</p>
                 <Button
                 title='Donate' 
                 />
               </ul>
            </section>
            <p className="text-center">
            tarfs foundation &copy; 2022 - 2024
            </p>
        </footer>
    )
}


function TypoGraph({icon, text}:{icon:React.ReactElement, text:string}){
    return (
        <div className="flex items-center gap-2">
            {icon}
            <p>{text}</p>
        </div>
    )
}