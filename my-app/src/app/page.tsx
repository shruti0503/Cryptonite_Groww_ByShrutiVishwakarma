'use client'
import Image from "next/image";
import Navbar from "@/components/global/Navbar";
import { ContainerScroll } from "@/components/ContainerScroll";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import { InfiniteMovingCards } from "@/components/InfiniteMovingCards";
import { Reviews } from "@/constants/constants";
import Footer from "@/components/ui/Footer";
import { useRouter } from "next/navigation";
import { About } from "@/constants/constants";

export default function Main() {
  const router = useRouter();
  return (
    <main className="flex flex-col">
      <Navbar />
      <section
        className="h-screen w-full bg-neutral-950 rounded-md overflow-visible relative flex flex-col items-center antialiased"
      >
        {/* <div className="max-w-4xl mx-auto p-4 relative z-10 flex flex-center justify-center flex-col"></div> */}
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center justify-center flex-col">
                <Button
                  size="lg"
                  className="p-8 mb-8 md:mb-0 text-2xl text-white w-full 
                  sm:w-fit border-t-2 rounded-full border-[#4D4D4D]
                   bg-[#1F1F1F] hover:bg-white group transition-all 
                   flex items-center justify-center gap-4 hover:shadow-xl
                    hover:shadow-neutral-500 duration-500"
                >
                  <span
                  onClick={()=>router.push('/home')}
                   className="bg-clip-text  bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r  hover:text-black group-hover:text-black-500 group-hover:from-black group-hover:to-black text-white">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent  bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                   Track with Cryptonite
                </h1>
            </div>
            }
          />
        </div>
      </section>

      <section className="h-screen w-full  rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute flex flex-col inset-0 h-full w-full items-center bg-black  px-5 py-24 ">
          <h1 className="text-white text-3xl font-bold">Trusted by over 2 million Users</h1>
        <InfiniteMovingCards
          className="md:mt-[2rem] mt-[-100px] justify-center  w-full flex"
          items={Reviews}
          direction="right"
          speed="slow"
        />
         <h1 className="text-white text-3xl font-bold">UseAge</h1>
        <InfiniteMovingCards
          className="md:mt-[2rem] mt-[-100px] justify-center  w-full flex"
          items={About}
          direction="right"
          speed="slow"
        />
        </div>
        

      </section>

      <section className="h-screen w-full bg-neutral-950   rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">
          <Footer />
        </div>
      </section>

     


     
    </main>
  );
}