import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[80vh]'>
            <div className='md:flex items-center justify-center'>
                <h1 className='font-mono text-sm md:text-4xl'>Getting started with CRYPTO COINS</h1>
                <span className='text-5xl flex justify-center'>☕</span>
            </div>
            <Link className='mt-10 font-sans font-bold text-white hover:text-black bg-teal-600 rounded p-3' to='/coins'>Explore coins</Link>
        </div>
    );
};

export default Home;