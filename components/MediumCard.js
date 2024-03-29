import Image from "next/image";


export default function MediumCard({img, title,}) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-72 w-72">
            <Image src={img} className="rounded-xl" layout="fill" alt="placeImage"/>
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}
