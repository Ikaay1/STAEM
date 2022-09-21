import React from 'react';
import TrendingPosts from './TrendingPosts';

const Trending = () => {
    return (
        <div>
            <div className='flex items-center'>
                <img
                    src='/assets/rectangle.png'
                    className='h-[8px] mr-[.5rem]'
                    alt=''
                />
                <p className='font-bold text-[19.5px] md:text-[30px] text-[#FFFFFF]'>
                    News and Trending
                </p>
                <img
                    src='/assets/rectanglelong.png'
                    className='ml-[.5rem]'
                    alt=''
                />
            </div>
            <div className='mt-[1.1rem] px-[1rem] md:px-[2rem] md:flex justify-between'>
                <input
                    type='text'
                    placeholder='Search'
                    className='pl-[.8rem] w-[100%] md:w-[273px] py-[.45rem] bg-[#1A3A53] text-[#214B6B] rounded-[30px] '
                />
                <div className='flex items-center mt-[.7rem] md:mt-[0rem]'>
                    <p className='mr-[.7rem] text-[16px] font-semibold text-white '>
                        Sort by:
                    </p>
                    <div className='bg-[#1A3A53] rounded-[30px] px-[1rem] h-[38px] w-[235px] md:h-[40px] md:w-[263px] flex justify-between items-center'>
                        <p className='text-[16px] font-semibold text-white '>
                            Price
                        </p>
                        <img src='/assets/dropdown.png' alt='' />
                    </div>
                </div>
            </div>
            <div className='mt-[1.6rem] px-[1rem] md:px-[2rem]'>
                <TrendingPosts />
            </div>
        </div>
    );
};

export default Trending;
