import React from 'react';

const data = [
    {
        small: '/assets/shadow.png',
        large: '/assets/shadowlarge.png',
        name: 'Shadow Warrior 3',
        genre: 'Action, FPS, Adventure, Shooter',
        price: '$119.00',
    },
    {
        small: '/assets/surfing.png',
        large: '/assets/surfinglarge.png',
        name: 'Barton Lynch Pro Surfing 2022',
        genre: 'Sport, Action, Simulation, Physics',
        price: '$65.00',
    },
    {
        small: '/assets/fighters.png',
        large: '/assets/fighterslarge.png',
        name: 'THE KING OF FIGHTERS XV',
        genre: 'Action, 2D Fighter, PvP, Fighting',
        price: '$59.99',
    },
    {
        small: '/assets/ring.png',
        large: '/assets/ringlarge.png',
        name: 'ELDEN RING',
        genre: 'Souls-like, Relaxing, Dark Fantasy, RPG',
        price: '$59.99',
    },
    {
        small: '/assets/ghostwire.png',
        large: '/assets/ghostwirelarge.png',
        name: 'Ghostwire: Tokyo',
        genre: 'Singleplayer, Supernatural, First-Person, Action Adventure',
        price: '$59.99',
    },
];

const TrendingPosts = () => {
    return (
        <div>
            {data.map(({small, large, name, genre, price}) => (
                <div key={name} className='mb-[1.5rem]'>
                    <div className='bg-[#17202D] rounded-[18px] md:flex md:justify-between'>
                        <div className='md:w-[50%] '>
                            <img
                                src={small}
                                className='w-[100%] h-[260px] rounded-[18px] md:hidden'
                                alt=''
                            />
                            <img
                                src={large}
                                className='h-[100%] w-[100%] rounded-[18px] hidden md:block'
                                alt=''
                            />
                        </div>
                        <div className='mt-[.5rem] p-[.6rem] md:w-[50%] md:p-[2.7rem] pb-[1rem]'>
                            <p className='font-semibold text-[28px] text-white '>
                                {name}
                            </p>
                            <p className='text-[20px] text-white opacity-[0.5]'>
                                {genre}
                            </p>
                            <img
                                className='mt-[.5rem]'
                                src='/assets/rectanglelong.png'
                                alt=''
                            />
                            <div className='flex justify-between items-center mt-[.5rem]'>
                                <img src='/assets/window.png' alt='' />
                                <p className='font-bold text-[40px] text-white '>
                                    {price}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrendingPosts;
