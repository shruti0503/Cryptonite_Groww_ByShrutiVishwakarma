
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { CoinContext } from "@/context/coinContext";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { ModeToggle } from "./DarkMode";
type Props={

}

const Navbar=(props:Props)=>{

    const router=useRouter();
    const pathname=usePathname();
    //@ts-ignore
  
    return (
        <header 
        className="fixed z-[100000] right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg 
        flex items-center border-b-[1px] justify-between">
            <aside className="flex flex-items-center gap-[-2px]">
                <p className="text-3xl font-bold text-white cursor-pointer" onClick={()=>router.push("/")}>Cryptonite</p>

            </aside>

            <nav className="absolute text-white left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">

               
                    <ul className="flex items-center gap-4 list-none">
                        <li><Link href="#">Integrations</Link></li>
                        <li><Link href="#">Pricing</Link></li>
                        <li><Link href="#">Resources</Link></li>
                        <li><Link href="#">Tax Professionals</Link></li>
                        <li><Link href="#">Documentation</Link></li>
                        <li><Link href="#">Enterprise</Link></li>
                    </ul> 


               
            </nav>

            <aside className="flex items-center gap-4">

                <ModeToggle />
   

            </aside>

        </header>
    )
}
export default Navbar