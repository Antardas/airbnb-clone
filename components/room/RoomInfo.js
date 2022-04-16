import { CalendarIcon, ColorSwatchIcon, KeyIcon } from '@heroicons/react/outline';
import React from 'react';

const RoomInfo = () => {
    return (
        <div className='text-gray-800 w-8/12'>
            {/* Section - 1 */}
            <div>
                <h2 className='text-2xl'>Treehouse hosted by Mikheyla Fox</h2>
                <div className='text-lg text-gray-500 left-4 relative mt-3'>
                    <span>8 guests3 </span>
                    <span> bedrooms5 </span>
                    <span>beds2 baths</span>
                </div>
            </div>

            <div className='flex flex-col gap-2 py-6'>
                <div className='flex mt-4 items-center'>
                    <div>
                        <ColorSwatchIcon className='h-8' />
                    </div>
                    <div className='ml-3'>
                        <h4 className='text-xl font-bold'>Mikheyla Fox is a Superhost</h4>
                        <p className='text-gray-500'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                    </div>
                </div>

                <div className='flex mt-4 items-center'>
                    <div>
                        <KeyIcon className='h-8' />
                    </div>
                    <div className='ml-3'>
                        <h4 className='text-xl font-bold'>Great check-in experience</h4>
                        <p className='text-gray-500'>95% of recent guests gave the check-in process a 5-star rating.</p>
                    </div>
                </div>


                <div className='flex mt-4 items-center'>
                    <div>
                        <CalendarIcon className='h-8' />
                    </div>
                    <div className='ml-3'>
                        <h4 className='text-xl font-bold'>Free cancellation for 48 hours</h4>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RoomInfo;