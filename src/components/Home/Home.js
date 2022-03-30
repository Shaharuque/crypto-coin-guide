import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[80vh]'>
            <h1 className='font-mono  md:text-4xl'>Getting started with CRYPTO COINS <span className='text-5xl'>☕</span></h1>
            <Link className='mt-10 font-sans font-bold text-white hover:text-black bg-teal-600 rounded p-3' to='/coins'>Explore coins</Link>
        </div>
    );
};

export default Home;