import React from 'react';
import { StarIcon, UserIcon } from '@heroicons/react/solid'
import Header from '../Header';
import Image from 'next/image';
import ImageArea from './ImageArea';
import RoomInfo from './RoomInfo';
import TipCalculator from './TipCalculator';
const BigRoom = () => {

    return (
        <div className='py-4'>
            <h3 className='text-2xl'>Treehouse De Valentine</h3>
            <p className='flex text-gray-700 mt-4'>
                <span className='flex mr-3'><StarIcon className='h-5 text-red-400' /> 4.93</span>
                <span className='flex mr-3'> <UserIcon className='h-5 text-red-400' /> Superhost</span>
                <span><u>Balamban, Central Visayas, Philippines</u></span>
            </p>
            <div className=' mt-6'>
                <ImageArea />
            </div>
            {/* Description Section */}
            <div className='mt-6 flex gap-x-6'>
                <RoomInfo />
                <TipCalculator />
            </div>
        </div>
    );
};

export default BigRoom;

// https://a0.muscache.com/im/pictures/ef9cd0cb-aac1-41d1-b46f-9184a610f92e.jpg?im_w=720