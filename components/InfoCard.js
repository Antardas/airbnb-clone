import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from '@heroicons/react/solid'
import Image from "next/image";
import { useRouter } from "next/router";

const InfoCard = ({ data: { img, location, title, description, star, price, total } }) => {
   const router = useRouter();
    return (
        <div className='flex py-7 px-2 border-b hover:opacity-80 hover:shadow-lg first:border-t transition duration-200 ease-out' >
            {/* Left Side - Image */}
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 '>
                <Image src={img} alt='description image' className='rounded-2xl' layout="fill" objectFit='cover' />
            </div>

            {/* Right - Content */}

            <div className='flex flex-col flex-grow pl-5' >
                <div
                onClick={() => router.push('/room')}
                className='flex justify-between cursor-pointer'  >
                    <p>{location}</p>
                    <HeartIcon className='h-7 cursor-pointer' />
                </div>
                <h4 className='text-x cursor-pointer' onClick={() => router.push('/room')}>{title}</h4>
                <div className='border-b w-10 pt-2' > </div>
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
                <div className='flex justify-between items-end pt-5'>
                    <p className='flex  items-center' >
                        <StarIcon className='h-5 text-red-400' />
                        {star}
                    </p>
                    <div>
                        <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
                        <p className='text-right font-extralight' >{total}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InfoCard;