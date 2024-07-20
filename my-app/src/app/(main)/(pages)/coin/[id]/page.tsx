'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import LineChart from '@/components/LineChart/LineChart'
import { fetchCoinData } from '@/app/api/coinData/route'
import { fetchHistoricalData } from '@/app/api/coinData/route'
import CommonHeader from '@/components/global/CommonHeader'
import { CoinContext } from '@/context/coinContext'
import { useContext } from 'react'
import Image from 'next/image'


import { Progress } from "@/components/ui/progress"
import { TracingBeam } from '@/components/ui/TracingBeam'
import { BackgroundBeams } from '@/components/BackgroundBeams'
import WatchList from '@/components/WatchList'
import Footer from '@/components/ui/Footer'

const Coin = () => {
  const pathname = usePathname();
  //@ts-ignore
  const {Coin,RecentlyViewed,setRecentlyViewed, watchList}=useContext(CoinContext);
  const [Coinid, setCoinId] = useState('');
  const [coinData, setCoinData] = useState(null);
  const [displayCoin, setDisplayCoin]=useState<any[]>([]);
  const [HistoricalChartData, setHistoricalChartData] = useState(null);

  useEffect(() => {
    if(pathname){
      const coinIdFromPath = pathname.split('/')[2];
      console.log("pathname", coinIdFromPath);
      setCoinId(coinIdFromPath);
    }
   
  }, [pathname]);

  useEffect(()=>{


    
    setDisplayCoin(Coin)

  },[])

  useEffect(()=>{

    //TODO
    console.log("coindata", coinData)
    if(coinData){
      //@ts-ignore
      console.log("copin", coinData["image"].small) 
    }
  },[coinData])


  const getData=async()=>{
    let ans= await fetchCoinData(Coinid);
    //@ts-ignore
      setCoinData(ans);
      let res= await  fetchHistoricalData(Coinid);
       //@ts-ignore
      setHistoricalChartData(res)

  }

  useEffect(() => {
    if (Coinid !== '') {
     
      getData();

      if(!RecentlyViewed.find((Coin:any)=>Coin==Coinid)){
        const newRecent= Coin.find((Coin:any)=>Coin.id==Coinid);
        const arr=[newRecent,...RecentlyViewed];
        setRecentlyViewed(arr)
        // console.log("RecentlyViewed",RecentlyViewed)
       
      }
    }
  }, [Coinid]);


  if (coinData && HistoricalChartData) {
    return (
      <div className='w-full h-[1500px]  flex '>
          <CommonHeader 
                displayCoin={displayCoin}
                setDisplayCoin={setDisplayCoin}    
            />
       
          <div className='individual-Coin content flex w-full h-full gap-5 min-h-[100vh]'>

            <div className='left'>

                  <div className='flex  gap-2'>
                        <h1 className='text-2xl font-bold'>
                          {Coinid.toLocaleUpperCase()}
                        </h1>
                      
                      <Image 
                        //@ts-ignore
                          src={coinData["image"].small}
                          alt="img"
                          width={30}
                          height={30}
                        />

                  </div>

                  <div>
                      <p className='text-sm text-gray-500 font-semibold'>Current Price</p>
                      {/* @ts-ignore */}
                      <p className='font-bold'>USD {coinData?.market_data.current_price["usd"].toLocaleString()}</p>
                  </div>

    
                <div className='w-[68vw] h-[68vh]'>
                  <LineChart historicalData={HistoricalChartData} />

                    {/* <PriceRange 

                    todayLow={coinData?.market_data.low_24h["usd"]}
                    todayHigh={coinData?.market_data.high_24h["usd"]}
                    current={coinData?.market_data.current_price["usd"]}

                    /> */}

                  
                  <div className='Performace flex flex-col gap-5 p-5'>
                    <h2 className='text-2xl font-bold'>Performance</h2>
                    <div className='flex gap-5'>

                      <div className="flex flex-col gap-1 ">
                        <p className='flex-nowrap flex' >Today's Low</p>
                        {/* @ts-ignore */}
                        <p className='text-sm text-red-600'>{coinData?.market_data.low_24h["usd"]}</p>

                      </div>

                      <Progress
                        value={
                          //@ts-ignore
                          ((coinData?.market_data.current_price["usd"]- coinData?.market_data.low_24h["usd"])/
                          //@ts-ignore
                          (coinData?.market_data.high_24h["usd"]- coinData?.market_data.low_24h["usd"]))*100

                        }
                        className="w-[60%]" 
                      />

                      <div className="flex flex-col gap-1 ">
                        <p>Today's High</p>
                      
                        <p className='text-sm text-green-600'>
                          {/* @ts-ignore */}
                        {coinData?.market_data.high_24h["usd"]}
                        </p>

                      </div>

                      </div>

                  </div>

                  <div className='coin-info mt-5 flex gap-5 flex-col w-[40vw]  p-5'>
                    <h2 className='text-2xl font-bold ' >Fundamentals</h2>
                    <ul className='flex w-full justify-between'>
                      <li className='text-l font-semibold '>Crypto Market Rank</li>
                      {/* @ts-ignore */}
                      <li>{coinData?.market_cap_rank}</li>
                    </ul>
                    <ul className='flex w-full justify-between'>
                      <li className='text-l font-semibold '>Market Cap</li>
                      {/* @ts-ignore */}
                      <li>USD {coinData?.market_data.market_cap["usd"].toLocaleString()}</li>
                    </ul>
                    <ul className='flex w-full justify-between'>
                      <li className='text-l font-semibold'>24 Hour high</li>
                      {/* @ts-ignore */}
                      <li>USD {coinData?.market_data.high_24h["usd"].toLocaleString()}</li>
                    </ul>
                    <ul className='flex w-full justify-between'>
                      <li className='text-l font-semibold'>24 Hour low</li>
                      {/* @ts-ignore */}
                      <li>USD {coinData?.market_data.low_24h["usd"].toLocaleString()}</li>
                    </ul>

                </div>


                </div>
              

            </div>

            <div className='right  right-0 left-0 z-[100]'>
              < WatchList />
            </div>
         </div>

       <BackgroundBeams />
      
      </div>   
    );
  } else {
    return (
      <div className='spinner'>
        <div className='spin'>
         
        </div>
      </div>
    );
  }
}

export default Coin;