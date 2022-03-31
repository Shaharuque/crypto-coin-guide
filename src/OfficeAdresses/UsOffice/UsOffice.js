import React from 'react';

const UsOffice = () => {
    return (
        <div className='grid md:grid-cols-2 container mx-auto mt-6 p-6'>
            <div className='text-teal-500 font-sans flex flex-col justify-center'>
                <h1>Street: 402/67 kingston village</h1>
                <p>City: Hollywood</p>
                <p>Post-office: #60011</p>
                <p>Phone: (234) 235-5678</p>
                <p>Email: crypto-currency@gmail.usa.com</p>
            </div>
            <div className='flex mt-4 justify-center md:justify-end '>
                <img className='w-2/4 rounded-lg' src="https://images.unsplash.com/photo-1628510118714-d2124aea4b8a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt="" />
            </div>
        </div>
    );
};

export default UsOffice;