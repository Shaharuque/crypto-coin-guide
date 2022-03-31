import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {
    //const params=useParams()
    //console.log(params.coinId)
    const { coinId } = useParams()

    const [coinDetails, setCoinDetails] = useState({})
    const [dataLoading, setDataLoading] = useState(false)
    //data detch from api dynamaically using coinID
    useEffect(() => {
        setDataLoading(true)

        const url = `https://api.coingecko.com/api/v3/coins/${coinId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCoinDetails(data)
                setDataLoading(false)
            })
    }, [coinId])  //joto bar coinId change hobey totobar autometically useEffect() ta call hobey
    console.log(coinDetails)


    const navigate = useNavigate()
    //Back btn onClick event handler
    const backToCoinsPage = () => {
        navigate('/coins')
    }
    return (
        <>  {/*conditional rending hocchey jodi dataLoading=true hoy means data fetching korey set kora shes na hoy tahley UI tey spinner show hobey ar jodi data fetch korey set kora shes hoye jay tahley UI tey data show hobey */}
            {   
                dataLoading ?
                    <Spinner></Spinner>
                    :
                    <div>
                        <div className='grid md:grid-cols-2 gap-4 container mx-auto p-6 mt-12 max-w-7xl'>
                            {/*small screen a info details ar order-2 and img ar order-1 means small screen a image ta info details ar agey dekhabey */}
                            <div className='flex flex-col justify-center order-2 md:order-1'>
                                <div className='p-6 ml-4'>
                                    <p className='text-4xl font-serif'>General Information:</p>
                                    <div className='text-gray-700 '>
                                        <p>Coin Name: {coinDetails.name}</p>
                                        <p>Symbol: {coinDetails.symbol}</p>
                                        <p>Market Cap Rank: {coinDetails.market_cap_rank}</p>
                                        <p>
                                            Country Origin: {coinDetails.country_origin ? coinDetails.country_origin : 'Country origin not found'}
                                        </p>
                                        <p>Hashing_Algorithm: {coinDetails.hashing_algorithm ? coinDetails.hashing_algorithm : ' Algorithm not found'}</p>
                                        <p>Genesis_Date: {coinDetails.genesis_date ? coinDetails.genesis_date : 'No Data Available'}</p>
                                        <p>Alexa Rank: {coinDetails.public_interest_stats?.alexa_rank}</p>

                                    </div>
                                </div>
                                <div className='p-6 ml-4'>
                                    <p className='text-4xl font-serif'>Scores:</p>
                                    <div className='text-gray-700 '>
                                        <p>Coingecko Score: {coinDetails.coingecko_score}</p>
                                        <p>Community Score: {coinDetails.community_score}</p>
                                        <p>Developer Score: {coinDetails.developer_score}</p>
                                        <p>Liquidity Score: {coinDetails.liquidity_score}</p>
                                        <p>Public Interest Score: {coinDetails.public_interest_score}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center items-center order-1 md:order-2'>
                                {/*optional chaining must cuz data fetch hoa ashtey tym lagey so optional chaining na korley error asbey (object ar vitor object ar property access)*/}
                                <img src={coinDetails.image?.large} alt="" />
                            </div>

                        </div>

                        <div className='flex justify-center mt-6'>
                            <button onClick={backToCoinsPage} className='bg-teal-700 shadow-lg rounded px-4 hover:text-white'>
                                Back
                            </button>
                        </div>
                    </div>
            }
        </>
    );
};

export default CoinDetails;