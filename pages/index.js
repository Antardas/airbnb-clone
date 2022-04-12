import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import styles from '../styles/Home.module.css'

export default function Home({ exploreData, cardsData }) {
  console.log(exploreData)
  return (
    <div>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* Pull Some Data From a server - API Endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              exploreData.length ? exploreData.map((data) => (
                <SmallCard key={data.location} img={data.img} distance={data.distance} location={data.location} />
              )) : null
            }
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-5 overflow-scroll scrollbar-hide p-3 ml-3">
            {
              cardsData.length ? cardsData.map(card => (
                <MediumCard img={card.img} title={card.title} key={card.img} />
              )) : null
            }
          </div>
        </section>

        <div>
          <LargeCard
           title="The Greatest Outdoors"
           img='https://links.papareact.com/4cj'
           description="Wishlist curated by Airbnb."
           buttonText='Get Inspired'
           />

        </div>
      </main>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://raw.githubusercontent.com/Antardas/airbnb-clone/main/public/data/cardData.json').then(res => res.json());
  const cardsData = await fetch('https://raw.githubusercontent.com/Antardas/airbnb-clone/main/public/data/cardsData.json').then(res => res.json());
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}