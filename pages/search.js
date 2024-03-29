import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import SideMap from "../components/SideMap";
const Search = ({ searchResult }) => {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query
    const formattedStartDate = format(new Date(startDate), "dd MM yyyy");
    const formattedEndDate = format(new Date(endDate), "dd MM yyyy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
            <main className="flex">
                <section className='flex-grow pt-14 px-6    '>
                    <p className='text-sm'>300+ Stays {range} for {noOfGuests} Number of Guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>

                    </div>
                    {
                        searchResult.length ? (
                            searchResult.map((result, index) => (
                                <InfoCard key={index} data={result} />
                            ))
                        ) : null
                    }
                </section>
                <section className='hidden lg:inline-flex md:max-width[400px]'>
                    <SideMap/>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Search;

export async function getServerSideProps() {
    const searchResult = await fetch('https://jsonkeeper.com/b/5NPS').then(res => res.json());

    return {
        props: {
            searchResult
        }
    }
}