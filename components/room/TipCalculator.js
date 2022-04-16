import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { StarIcon } from '@heroicons/react/solid';
import { format } from 'date-fns';
import Guest from './Guest';

const TipCalculator = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showDatepicker, setShowDatepicker] = useState(false);
  const formattedStartDate = format(new Date(startDate), 'dd / MM / yyyy');
  const formattedEndDate = format(new Date(endDate), 'dd / MM / yyyy');
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  console.log(showDatepicker);
  return (
    <div className="w-4/12 shadow-lg p-4 rounded-2xl border">
      <span className="flex justify-between">
        <h4 className="text-2xl font-bold">
          $77
          <span className="text-lg font-normal"> night</span>
        </h4>
        <span className="flex items-center">
          <StarIcon className="h-5 text-red-400" />
          4.3
        </span>
      </span>

      <div className="relative">
        <div
          className="flex justify-between divide-x border rounded-lg"
          onClick={() => setShowDatepicker(!showDatepicker)}
        >
          <div className="flex flex-col text-sm text-gray-500 w-full  p-3 cursor-pointer">
            <span>CHECK-IN</span>
            <span>{formattedStartDate}</span>
          </div>

          <div
            className="flex flex-col text-sm text-gray-500 w-full p-3 cursor-pointer"
            onClick={() => setShowDatepicker(!showDatepicker)}
          >
            <span>CHECK-IN</span>
            <span>{formattedEndDate}</span>
          </div>
        </div>
        <div className="absolute z-50 left-5">
          {showDatepicker && (
            <DateRange className=""
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={['#FD5B61']}
              onChange={handleSelect}
            />
          )}
        </div>

        {/* Section => Guest Adding */}

        <div>
          <Guest />
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
