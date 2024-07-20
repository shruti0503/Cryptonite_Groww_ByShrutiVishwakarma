"use client";

import { createContext, useState, ReactNode, FC, useEffect } from "react";
import { fetchAllCoin } from "@/app/utils/coinData/UtilFunction";
interface CoinContextProps {
  coins: any[];
  setCoins: React.Dispatch<React.SetStateAction<any[]>>;
}

interface CoinContextProviderProps {
  children: ReactNode;
}

export const CoinContext = createContext<CoinContextProps | undefined>(undefined);

const CoinContextProvider: FC<CoinContextProviderProps> = ({ children }) => {
  const [Coin, setCoins] = useState<any[]>([]);
  const [RecentlyViewed, setRecentlyViewed]=useState<any []>([])
  const [watchList, setWatchList]=useState<any []>([])
  const [suggested, setSuggested]=useState<any []>([])

  const contextValue = {
    Coin,
    RecentlyViewed,
    setCoins,
    setRecentlyViewed,
    watchList,
    setWatchList,
    suggested,
    setSuggested

  };
  useEffect(()=>{

    console.log("RecentlyViewed",RecentlyViewed)

  },[RecentlyViewed])

  // const fetchAllCoin = () => {
  //   // console.log("api", process.env.API_KEY);
  //   let ans;

  //   const options = {
  //     method: 'GET',
  //     headers: { accept: 'application/json', 'x-cg-demo-api-key': `${process.env.API_KEY}` }
  //   };

  //   fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
  //     .then(response => response.json())
  //     .then(response => setCoins(response))
  //     .catch(err => console.error(err));
    
  //   return ans;

  // };

  const getCoins=async()=>{
     const res= await fetchAllCoin();
     console.log("pop", res)
     //@ts-ignore
     setCoins(res);
  }



 console.log("COin",Coin)
  useEffect(() => {
    getCoins();  

  }, [])

//   console.log("coins arw", Coin)

  return (
    //@ts-ignore
    <CoinContext.Provider value={contextValue}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;