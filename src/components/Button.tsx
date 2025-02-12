export default function Button ({title}:{title:string}){
    return (
        <button className="bg-pink font-semibold rounded-2xl ease-in-out duration-300 hover:bg-black text-white p-3 w-[10em] transition-all ">
            {title}
        </button>
    )
}