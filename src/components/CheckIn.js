import React, { useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css"
import { BsCalendar } from 'react-icons/bs';

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false)
  return (
  <div className='relative flex justify-end items-center h-full'>
  <div className='absolute z-10 pr-8'>
    <div>
      <BsCalendar className="text-purple-400 text-base  "/>
    </div>
  </div>
  <DatePicker className="w-full  hover:cursor-pointer h-full "
   selected={startDate}
   placeholderText='Check In'
   onChange={(date)=> setStartDate(date)}
   
   ></DatePicker>
  </div>);
};

export default CheckIn;
