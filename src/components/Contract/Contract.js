import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contract = () => {
    return (
        <div>
            <h1 className='text-5xl text-gray-700 text-center mt-12'>Contact Us</h1>
            <p className='text-3xl text-gray-600 text-center mt-4'>Office Adresses: </p>
            <div className='flex justify-center mt-6'>
            
                <Link className=' text-gray-600 hover:text-white mr-4 bg-teal-500 p-4 rounded-lg' to='/contact/bangladesh_adress'>Bangladesh Office</Link>

                <Link className='text-gray-600 hover:text-white bg-teal-500 p-4 rounded-lg' to='/contact/us_adress'>United State Office</Link>

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Contract;