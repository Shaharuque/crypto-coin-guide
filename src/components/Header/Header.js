import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLinkGeneration/CustomLink';

const Header = () => {
    return (
        <nav className='flex justify-center items-center md:justify-between p-3 bg-sky-900 text-white sticky top-0'>
            <div className='hidden md:block'> {/*logo will be hidden in small screen and will be shown in md screen */}
                <Link className='flex items-center' to='/'>
                    <img className="w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1285561982091956224/CaVwpaVc_400x400.jpg" alt="" />
                    <p className='ml-3 font-sans font-bold text-xl text-teal-400 hover:text-white'>CRYPTO-CAFE</p>
                </Link>
            </div>
            <div className='flex justify-between'>
                <CustomLink className='mr-3 font-bold font-sans' to='/'>Home</CustomLink>
                <CustomLink className='mr-3 font-bold font-sans' to='/coins'>Coins</CustomLink>
                <CustomLink className='mr-3 font-bold font-sans' to='/contact'>Contact Us</CustomLink>
                <CustomLink className='mr-3 font-bold font-sans' to='/about'>About</CustomLink>
            </div>
        </nav>
    );
};

export default Header;