import React, { useEffect, useState } from 'react';
import Coin from '../../Coin/Coin';

const Coins = () => {
    const [coins,setCoins]=useState([])

    //data fetch
    useEffect(()=>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res=>res.json())
        .then(data=>setCoins(data))
    },[])
    return (
        <div className='grid md:grid-cols-4 gap-4  my-4 p-4'>
            {
              coins.map(coin=><Coin key={coin.id} coin={coin}></Coin>)  
            }
        </div>
    );
};

export default Coins;