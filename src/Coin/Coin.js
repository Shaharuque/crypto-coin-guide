import React from 'react';

const Coin = (props) => {
    const{id, symbol, image}=props.coin
    return (
        <div className='flex items-center  shadow-lg p-4 rounded'>
            <div>
                <img className='h-12 w-12 mr-4' src={image} alt="" />
            </div>
            <div>
            <p className='font-sans capitalize text-gray-600'>{id}</p>
            <p className='font-sans text-sm text-gray-400'>{symbol}</p>
            </div>
        </div>
    );
};

export default Coin;