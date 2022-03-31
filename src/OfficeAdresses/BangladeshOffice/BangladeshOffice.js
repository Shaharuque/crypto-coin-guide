import React from 'react';

const BangladeshOffice = () => {
    return (
        <div className='grid md:grid-cols-2 container mx-auto mt-6 p-6'>
            <div className='text-teal-500 font-sans flex flex-col justify-center'>
                <h1>Street: 117/6 Dhanmondi</h1>
                <p>City: Dhaka</p>
                <p>Post-office: 1209</p>
                <p>Phone: 01875462222</p>
                <p>Email: crypto-currency@gmail.bd.com</p>
            </div>
            <div className='flex mt-4 justify-center md:justify-end '>
            <img className='w-2/4 rounded-lg' src="https://i.pinimg.com/originals/a5/d1/c3/a5d1c3937bedf5eaa798753548a53302.png" alt="" />
            </div>
        </div>
    );
};

export default BangladeshOffice;