
'use server'


 export const fetchCoinData =async (Coinid:string) => {
  

    let ans;
   

    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': `${process.env.API_KEY}` }
    };

   await fetch(`https://api.coingecko.com/api/v3/coins/${Coinid}`, options)
      .then(response => response.json())
      .then(response => ans=response)
      .catch(err => console.error(err));

    return ans;
  };

  export const fetchHistoricalData = async (Coinid:string) => {
     console.log("inside",process.env.API_KEY )
    let ans;
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key':`${process.env.API_KEY}` }
    };

    await fetch(`https://api.coingecko.com/api/v3/coins/${Coinid}/market_chart?vs_currency=usd&days=10`, options)
      .then(response => response.json())
      .then(response => ans=response)
      .catch(err => console.error(err));

    return ans;
  };