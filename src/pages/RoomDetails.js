import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import { RoomContext } from '../context/RoomContext';

import { FaCheck } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';

const RoomDetails = () => {
  const { id } = useParams();
  const { rooms } = useContext(RoomContext);

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <div className="bg-room bg-center bg-cover h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black bg-opacity-80"></div>
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          <div className="w-full h-full px-6 lg:w-[60%]">
            <h2 className='h2'>{name}</h2>
            <p className="mb-8">{description}</p>
            <img className='mb-8' src={imageLg} />
            <div className="mt-12">
              <h3 className='h3'>Room Facilities</h3>
              <p className='mb-12 '>
                lorem ipsum dolor sit amet, consectetur adip lorem lorem lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaera
              </p>
              <div className=" "></div>
              <div className="grid grid-cols-3 gap-6 mb-12">{facilities.map((item, index)=>{
                const{name, icon} = item;
                return <div className='flex items-center gap-x-3 flex-1' key={index} >
                <div className="text-3xl text-purple-600">{icon}</div>
                <div className="text-base">{name}</div>
                </div>;
              })}</div>
            </div>
          </div>
          <div className="w-full h-full lg:w-[40%]">
          <div className="py-8 px-6 bg-purple-600 rounded-lg bg-opacity-40 mb-12">

            <div className="flex- flex-col space-y-4 mb-4 ">
              <h3> Your Reservation</h3>
              <div className='h-[60px]'>
                <CheckIn/>
              </div>
              <div className='h-[60px]'>
                <CheckOut/>
              </div>
              <div className='h-[60px]'>
                <AdultsDropdown/>
              </div>
              <div className='h-[60px]'>
                <KidsDropdown/>
              </div>
              <button className='btn btn-lg btn-primary w-full hover:text-purple-700  hover:text-md hover:bg-white '>Book Now for ${price}</button>
            </div>

          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;

