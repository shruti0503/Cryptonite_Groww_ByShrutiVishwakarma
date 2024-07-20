'use client'
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, Search } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { Input } from "../ui/input";
import { CoinContext } from "@/context/coinContext";
import { Button } from "../ui/button";
import { ModeToggle } from "./DarkMode";

type Props = {
    displayCoin: any[]
    setDisplayCoin: any
}

const CommonHeader = ({ displayCoin, setDisplayCoin }: Props) => {

    const router = useRouter();
    const pathname = usePathname();
    //@ts-ignore
    const { Coin, suggested, setSuggested } = useContext(CoinContext);
    const [showBox, setShowBox] = useState(false);
    const [input, setInput] = useState<string>('');

    const inputHandler = (e: any) => {
        setInput(e.target.value);
    }

    const searchHandler = async (event: any) => {
        event.preventDefault();
        if (Coin && Array.isArray(Coin)) {
            const coins = await Coin.filter((item: any) =>
                item.name.toLowerCase().includes(input.toLowerCase())
            );
            const searchItem = await Coin.find((item: any) => item.id == input.toLocaleLowerCase());
            if (searchItem != undefined) {
                console.log("searchItem", searchItem)
                router.push(`/coin/${searchItem.id}`)
            }
        }
    }

    useEffect(() => {
        setDisplayCoin(displayCoin);
    }, [displayCoin, setDisplayCoin]);

    return (
        <header 
        className="fixed z-[100000] right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100]
    flex items-center border-b-[1px] justify-between">
            <aside className="flex flex-items-center gap-[-2px]">
                <p className="text-3xl font-bold text-white cursor-pointer" onClick={() => router.push("/")}>Cryptonite</p>

            </aside>

            <nav className="absolute text-white left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">

                {
                    pathname == "/" ?
                        <ul className="flex items-center gap-4 list-none">
                            <li><Link href="#">Integrations</Link></li>
                            <li><Link href="#">Pricing</Link></li>
                            <li><Link href="#">Resources</Link></li>
                            <li><Link href="#">Tax Professionals</Link></li>
                            <li><Link href="#">Documentation</Link></li>
                            <li><Link href="#">Enterprise</Link></li>
                        </ul> :
                        <div className='flex mt-30 w-full'>
                            <span className="flex items-center w-full rounded-full bg-muted px-4">
                                <Search />
                                <Input
                                    onChange={inputHandler}
                                    required
                                    list="coinlist"
                                    value={input}
                                    placeholder="Quick Search"
                                    className="border-none bg-transparent focus:ring-transparent text-black outline-none"
                                />
                            </span>
                            <Button className="ms-3" onClick={searchHandler}>
                                Search
                            </Button>
                        </div>
                }

                <datalist id="coinlist">
                    {Coin && Array.isArray(Coin) && Coin.map((item: any, index: any) => (
                        <option key={index} value={item.name} />
                    ))}
                </datalist>
            </nav>

            <aside className="flex items-center gap-4">
                <Link
                    href="/home"
                    className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        {true ? 'Home' : 'Get Started'}
                    </span>
                </Link>

                <ModeToggle />

                <MenuIcon className="md:hidden" />

            </aside>

        </header>
    )
}
export default CommonHeader