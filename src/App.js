import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Trending from './components/Trending';

function App() {
    return (
        <>
            <div className='mt-[1.5rem] px-[1rem] md:px-[2rem]'>
                <Navbar />
            </div>
            <div className='mt-[2.3rem] md:mt-[1.8rem] px-[1rem] md:px-[2rem]'>
                <Hero />
            </div>
            <div className='mt-[2.3rem]'>
                <Trending />
            </div>
        </>
    );
}

export default App;
