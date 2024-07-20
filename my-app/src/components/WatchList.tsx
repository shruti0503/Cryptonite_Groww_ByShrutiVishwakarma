import React, { useEffect } from 'react'
import CustomTable from './CustomTable'
import { useContext } from 'react'
import { CoinContext } from '@/context/coinContext'
import { useState } from 'react'
import { usePathname } from 'next/navigation'


const WatchList = () => {
    const pathname=usePathname();
     //@ts-ignore
    const { watchList, RecentlyViewed,setWatchList ,Coin}=useContext(CoinContext);
    const [path, setpath] = useState('')
    
     
   

    function handleOnDrop(e:React.DragEvent){
        const recent= e.dataTransfer.getData("watchList") as string;
        console.log("recent", recent)
        if(!watchList.find((item:any)=>item.id==recent)){
          const newWatch= Coin.find((Coin:any)=>Coin.id==recent);
          setWatchList([newWatch,...watchList])
        }
       
      }

      useEffect(()=>{

        if(pathname){
            setpath(pathname)
            console.log("searchItemsearchItem", pathname)
        }

      },[pathname])

   

  function handleDragOver(e:React.DragEvent){
    e.preventDefault();
  }

  return (
    <div className={`sidebar z-[10] flex flex-col  left-0 gap-10 ${path.includes('/coin' )? 'mt-[0px]'  : 'mt-[-280px]'}`}>
         
    <div className='watchList p-4 overflow-scroll   border-s-orange-100 border-solid border-2 rounded-lg  h-[300px] w-[400px] ' onDrop={handleOnDrop} onDragOver={handleDragOver}>
      <div className='w-full flex justify-between'>
          <h1 className=''>Watch List</h1>

          <p className='text-sm text-slate-400'>(Drag from the list)</p>

      </div>
      
      <CustomTable 
       Items={watchList}
      
     /> 
    </div>

    <div className='RecentlyViewed p-4  border-s-orange-100 rounded-lg overflow-scroll   border-2  h-[300px] w-[400px] '>
        <h1 className=''>Recently Viewed</h1>
        <CustomTable 
          Items={RecentlyViewed}
        /> 
    </div>

  </div>
  )
}

export default WatchList
