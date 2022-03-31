import React, { useEffect, useState } from 'react';
import Coin from '../../Coin/Coin';
import Spinner from '../../Spinner/Spinner';

const Coins = () => {
    const [coins, setCoins] = useState([])
    const [dataLoading, setDataLoading] = useState(false)

    //data fetch
    useEffect(() => {
        setDataLoading(true)  //data fetch ar age dataLoading=true korey disi using setDataLoading()

        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => {
                setCoins(data)
                //data load hobar por shei data setCoins() ar help a coins ar moddhey set korbo and then dataLoading=false korey dibo using setDataLoading()
                setDataLoading(false)
            })
    }, [])
    return (
        <>
            {
                dataLoading ?
                    <Spinner></Spinner> 
                    :
                    <div className='py-8'>
                        <h1 className='text-center text-3xl font-serif font-bold text-gray-600'>Available Crypto Currencies</h1>
                        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 my-6 p-8'>
                            {
                                coins.map(coin => <Coin key={coin.id} coin={coin}></Coin>)
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default Coins;