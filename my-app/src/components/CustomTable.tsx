import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { useRouter } from 'next/navigation'

type Props={
    Items:any[],
    handleDragFunction?: any,

}

const CustomTable = ({Items, handleDragFunction}:Props) => {
    const router=useRouter();

  return (
             <Table className=''>
                  <TableCaption>Coin Market Data</TableCaption>
                  <TableHeader>
                     <TableRow >
                      <TableHead>Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Market Cap</TableHead>
                      <TableHead>24h Change</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Items.map((coin:any) => (

                        <TableRow key={coin?.id} 
                        id={coin?.id}
                         handleOnDrag={handleDragFunction}  
                        >
                        <TableCell className='cursor-pointer' >

                          <div className='cursor-pointer flex w-fullh-full'
                           onClick={()=>router.push('/coin/2')}
                          >
                          <img src={coin?.image} alt={coin?.name}  onClick={()=>{router.push('/coin/2'); console.log("check")}}  className="w-6 h-6 mr-2 inline cursor-pointer" />
                              {coin?.name}
                          </div>
        
                        </TableCell>

                       

                        <TableCell
                         >
                          ${coin?.current_price.toLocaleString()}</TableCell>
                        <TableCell
                        >
                          ${coin?.market_cap.toLocaleString()}
                          </TableCell>
                        <TableCell
                          className={coin?.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}
                        >
                          {Math.floor(coin?.price_change_percentage_24h*100)/100}%
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
              </Table>
  )
}

export default CustomTable
