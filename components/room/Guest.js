/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline';
const Guest = () => {
  
  return (
    <div>
      {/* Show Guest */}

      <div className="border ">
        <label className="flex flex-col">
          Guests
          <span>1 Guests</span>
        </label>
        <span>^</span>
      </div>

      {/* Adding Guest */}

      <div className="flex flex-col">
        <div className="flex justify-between items-center py-3">
          <div>
            <h4 className="text-lg">Adults</h4>
            <p className="text-sm text-gray-500">Age 13+</p>
          </div>
          <div className="flex relative items-center gap-x-2">
            <span>
              <MinusCircleIcon className="h-8 text-gray-500 hover:text-gray-700 cursor-pointer" />
            </span>
            <span className="text-xl">{1}</span>
            <span>
              <PlusCircleIcon className="h-8 text-gray-500 hover:text-gray-700 cursor-pointer" />
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center py-3">
          <div>
            <h4 className="text-lg">Children</h4>
            <p className="text-sm text-gray-500">Ages 2–12</p>
          </div>
          <div className="flex relative items-center gap-x-2">
            <span>
              <MinusCircleIcon className="h-8 text-gray-500 hover:text-gray-700 cursor-pointer" />
            </span>
            <span className="text-xl">{1}</span>
            <span>
              <PlusCircleIcon className="h-8 text-gray-500 hover:text-gray-700 cursor-pointer" />
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center py-3">
          <div>
            <h4 className="text-lg">Infants</h4>
            <p className="text-sm text-gray-500">Under 2</p>
          </div>
          <div className="flex relative items-center gap-x-2">
            <span>
              <MinusCircleIcon className="h-8 text-gray-500 hover:text-gray-700 cursor-pointer" />
            </span>
            <span className="text-xl">{1}</span>
            <span>
              <PlusCircleIcon className="h-8 text-gray-500 hover:text-gray-700 cursor-pointer" />
            </span>
          </div>
        </div>
        <div>
          This place has a maximum of 2 guests, not including infants. Pets
          aren't allowed.
        </div>
      </div>
    </div>
  );
};

export default Guest;
