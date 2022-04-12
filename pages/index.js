import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import styles from '../styles/Home.module.css'

export default function Home({ exploreData }) {
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
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://raw.githubusercontent.com/Antardas/airbnb-clone/main/public/data/cardData.json').then(res => res.json());
const cardsData = await fetch('https://raw.githubusercontent.com/Ant')
  return {
    props: {
      exploreData
    }
  }
}