import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, UserCircleIcon, MenuIcon, UsersIcon } from '@heroicons/react/solid'
import { useState, useContext } from 'react'
import { DateRangePicker, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRouter } from 'next/router';
import SmallMenu from './SmallMenu';
import { MenuContext } from '../pages/_app';

function Header({ placeholder }) {
  // Initialize all variables & State
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

//  Context-- Menu
const {showMenu, setShowMenu} = useContext(MenuContext);

  // Function Area *********


  // Set date range 
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  // Reset input Field State
  const resetInput = () => {
    setSearchInput('');

  }
  // navigate search Page
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    })
  }

  // Date Range Selection 
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-5'>

      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto" onClick={() => router.push('/')}>
        <Image src="/images/logo.png" alt="logo" layout='fill' objectFit='contain' objectPosition='left' />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 w-10" placeholder={placeholder || "Start Your search"} name="" id="" />
        <SearchIcon className='hidden lg:inline-flex  h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2' />
      </div>

      {/* Right -> Menu Icon */}

      <div className='flex space-x-4 items-center justify-end text-gray-500'>

        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className="h-6" />

        <div
          onClick={() => setShowMenu(!showMenu)}
          className='flex items-center space-x-2 border-2 p-2 rounded-full hover:shadow-lg' >
          <MenuIcon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer' />
        </div>

      </div>

      {showMenu &&
        (<div className='flex absolute top-20 md:right-6 shadow-2xl popup'>
          <SmallMenu />
        </div>)}





      {
        searchInput && (
          <div className='flex flex-col col-span-3 relative mx-auto'>
            {/* Calender - Dater Ranger Picker */}
            <div className=''>
              {/* Big Calender */}
              <div className='hidden sm:block'>
                <DateRangePicker
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={['#FD5B61']}
                  onChange={handleSelect}
                />
              </div>

              {/* Small Calender */}
              <div className='sm:hidden'>
                <DateRange
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={['#FD5B61']}
                  onChange={handleSelect}

                />
              </div>
            </div>

            <div className='flex items-center border-b mb-4'>
              <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
              <UsersIcon className='h-5' />
              <input value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} type="number" className='w-12 pl-2 outline-none' min={1} name="" id="" />
            </div>

            <div className="flex">
              <button
                onClick={resetInput}
                className="flex-grow text-gray-500">Cancel</button>
              <button onClick={search} className="flex-grow text-red-400">Search</button>
            </div>



          </div>
        )
      }
    </header>
  )
}

export default Header


