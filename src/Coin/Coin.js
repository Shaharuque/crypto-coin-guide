import React from 'react';
import { Link } from 'react-router-dom';

const Coin = (props) => {
    const { id, symbol, image } = props.coin
    return (
        <Link to={`/coin-details/${id}`}>      {/*{'/coin-details/'+id} aitao use korey jeto */}
            <div className='flex items-center justify-between shadow-lg p-6 rounded-lg '>
                <div>
                    <img className='h-12 w-12 ' src={image} alt="" />
                </div>
                <div>
                    <p className='font-sans capitalize text-gray-600'>{id}</p>
                    <p className='font-sans text-sm text-gray-400'>{symbol}</p>
                </div>
            </div>
        </Link>
    );
};

export default Coin;