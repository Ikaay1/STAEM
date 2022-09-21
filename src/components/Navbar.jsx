import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <p className='font-bold text-[40px] text-white '>STAEM</p>
            <div className='bg-[#214B6B] rounded-[30px] w-[153px] h-[40px] flex justify-center items-center cursor-pointer'>
                <img className='mr-[.35rem]' src='/assets/install.png' alt='' />
                <p className='font-bold text-[16px] text-white'>install</p>
            </div>
        </div>
    );
};

export default Navbar;
