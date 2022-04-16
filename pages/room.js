import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BigRoom from '../components/room/BigRoom';

const Room = () => {
    return (
        <>

            <Header />
            <div className='mx-12'>
                <BigRoom />
            </div>
            <Footer/>
        </>
    );
};

export default Room;

// hello bd 