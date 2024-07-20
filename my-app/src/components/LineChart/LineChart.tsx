import Chart from 'react-google-charts'

import React, { useEffect, useState } from 'react'

console.log("api", process.env.API_KEY);
//@ts-ignore
const LineChart = ({historicalData}) => {
    console.log("api", process.env.API_KEY);
    const [data,setData]=useState([["Date", "Prices"]]);

    useEffect(()=>{

        let dataCopy=[["Date","Prices"]]

        if(historicalData.prices){
            //@ts-ignore
            historicalData.prices.map((item)=>{
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
            }) // only month and date

            setData(dataCopy)
        }



    },[historicalData])
   
  return (
    <Chart 
      chartType='LineChart'
      data={data}
      height="100%"
      legendToggle
    />
  )
}

export default LineChart
