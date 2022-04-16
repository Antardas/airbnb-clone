import Image from 'next/image';
import React from 'react';

const ImageArea = () => {
    return (
        <div className='flex flex-1 divide-x'>
            {/* Left */}

            <div className='relative h-24 w-40 md:h-[416px] md:w-[600px] flex-shrink-0 mr-6 hover:scale-95 transition ease-out transform duration-200' >
                <Image src={'https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=960'} layout='fill' className='rounded-2xl' objectFit='cover' alt='room-image' />
            </div>

            {/* Right */}
            <div className='grid grid-cols-2 gap-2'>

                <div className='relative h-24 w-40 md:h-[200px] md:w-[300px] flex-shrink-0 hover:scale-95 transition ease-out transform duration-200'>
                    <Image src={'https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=960'} layout="fill" objectFit='cover' className='rounded-lg' alt='room image' />
                </div>

                <div className='relative h-24 w-40 md:h-[200px] md:w-[300px] flex-shrink-0 hover:scale-95 transition ease-out transform duration-200'>
                    <Image src={'https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=960'} layout="fill" objectFit='cover' className='rounded-lg' alt='room image' />
                </div>
                
                <div className='relative h-24 w-40 md:h-[200px] md:w-[300px] flex-shrink-0 hover:scale-95 transition ease-out transform duration-200'>
                    <Image src={'https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=960'} layout="fill" objectFit='cover' className='rounded-lg' alt='room image' />
                </div>
                
                <div className='relative h-24 w-40 md:h-[200px] md:w-[300px] flex-shrink-0 hover:scale-95 transition ease-out transform duration-200'>
                    <Image src={'https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=960'} layout="fill" objectFit='cover' className='rounded-lg' alt='room image' />
                </div>
                
      
            </div>
        </div>
    );
};

export default ImageArea;