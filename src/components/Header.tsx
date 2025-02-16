import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";
import { navItems } from "@/constants";

export default function Header(){
    return(
        <header className="p-2 h-[64px] flex">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                <Logo />

                <nav className="hidden md:flex">
                    <ul className="flex items-center gap-5">
                        {navItems.map((nav, i) => (
                            <li key={i}>
                                <Link
                                 href={nav.href} 
                                 className="capitalize font-medium transition-all  text-black hover:text-pink">
                                    <h1>
                                    {nav.title}
                                    </h1>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Button 
                title='Donate'
                />
            </div>

        </header>
    )
}