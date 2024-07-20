"use client"
import React, { useEffect } from 'react'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'
import { useState } from 'react'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { Search, Sidebar } from 'lucide-react'
import WatchList from '@/components/WatchList'
import { Input } from '@/components/ui/input'
import { CoinContext } from '@/context/coinContext'
import Navbar from '@/components/global/Navbar'
import { BackgroundBeams } from '@/components/BackgroundBeams'
import CommonHeader from '@/components/global/CommonHeader'
import { DndContext } from '@dnd-kit/core';
import PaginationSection from '@/components/global/PaginationSection'
import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import CustomTable from '@/components/CustomTable'

const Home = () => {
  //@ts-ignore
  const { Coin, watchList, setWatchList, RecentlyViewed } = useContext(CoinContext);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [displayCoin, setDisplayCoin] = useState<any[]>([])
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const [currentItems, setCurrentItems] = useState<any[]>([]);

  useEffect(() => {
    setDisplayCoin(Coin)
  }, [Coin])

  useEffect(() => {
    console.log("watchList", watchList)
  }, [watchList])

  useEffect(() => {
    if (Array.isArray(displayCoin)) {
      const arr: any[] = displayCoin.slice(firstItemIndex, lastItemIndex)
      setCurrentItems(arr)
    } else {
      console.error("displayCoin is not an array:", displayCoin);
    }
  }, [displayCoin, currentPage, itemsPerPage])

  function handleOnDrag(e: React.DragEvent, watchListType: string) {
    console.log("handleOnDrag", watchListType)
    e.dataTransfer.setData("watchList", watchListType)
  }

  return (
    <div>
      <CommonHeader
        displayCoin={displayCoin}
        setDisplayCoin={setDisplayCoin}
      />
      <section className='h-full min-h-[100vh] gap-20 pt-40 ps-10  w-full  !overflow-visible relative flex  items-center  px-20 '>
        <div className='w-[67vw] flex max-h-[78vh] min-h-[78vh] mb-[300px] zoom-[80%]  gap-10 flex-col z-[222] justify-evenlyx'>
          <h1 className='text-3xl'>Today's Cryptocurrency Prices</h1>
          <CustomTable
            Items={currentItems}
            handleDragFunction={handleOnDrag}
          />
          <PaginationSection
            totalPosts={displayCoin.length}
            postsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <WatchList />
      </section>

      <BackgroundBeams />
    </div>
  )
}

export default Home