import Image from 'next/image';

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative cursor-pointer">
      <div className="relative h-96 min-w-[280px]">
        <Image
          src={img}
          alt="banner"
          objectFit="cover"
          layout="fill"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-8 sm:left-12">
        <h3 className="text-xl sm:text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
