import Link from 'next/link'
import React from 'react'
import { FooterLinks } from '@/constants/constants'

const Footer = () => {
  return (
    <div className='flex  w-full gap-10 bg-black items-center justify-center'>
      <div className='text-white flex flex-col justify-start h-full'>
        <h1 className='text-5xl font-bold ms-8'>Tracking Made<span className='mt-4 text-gray-400 ms-4'>Easy </span>  </h1>

        <p className='text-justify p-10'>Connect your wallets and exchanges. Get your crypto and bitcoin taxes done in minutes.</p>

      </div>
      <div className='text-white flex flex-col'>
        <div className='flex  mt-30 px-10'>
        {
            FooterLinks.map((MainLink, index)=>(

                <div className='flex flex-col w-[300px]'>
                     <h3 className='text-2xl font-bold'>{MainLink.mainLinkHead}</h3>
                     {
                        MainLink.subLinks.map((link, index)=>(
                            <Link href="#" className='mt-10 flex flex-nowrap'>{link.text}</Link>
                        ))
                     }
                 </div>               
            ))
         }
        </div>
       

      </div>
      <div></div>
    </div>
  )
}

export default Footer
