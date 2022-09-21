import React from 'react';

const data = [
    {key: 1, src: '/assets/circle.png'},
    {key: 2, src: '/assets/circleoutline.png'},
    {key: 3, src: '/assets/circleoutline.png'},
    {key: 4, src: '/assets/circleoutline.png'},
    {key: 5, src: '/assets/circleoutline.png'},
    {key: 6, src: '/assets/circleoutline.png'},
];

const Hero = () => {
    return (
        <div className='relative'>
            <img
                className='w-[100%] h-[260px] md:hidden'
                src='/assets/eldenring.png'
                alt=''
            />
            <img
                src='/assets/eldenringlarge.png'
                className='hidden md:block mx-[auto]'
                alt=''
            />
            <div className='flex justify-center items-center absolute bottom-[14%] md:bottom-[10%] left-[50%] translate-x-[-50%]'>
                {data.map(({key, src}) => (
                    <div key={key}>
                        <img src={src} alt='' className='mr-[.9rem]' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
