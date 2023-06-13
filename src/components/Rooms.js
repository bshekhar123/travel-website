import React, { useContext } from 'react';
import Room from '../components/Room';
import { RoomContext } from '../context/RoomContext';
import {SpinnerDotted} from "spinners-react"

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext);
 
  return (
    <section className=' py-24'>
    {
      loading &&(
        <div className='h-screen fixed bottom-0 top-0 bg-black bg-opacity-90 w-full z-50 flex justify-center items-center'>
          <SpinnerDotted/>
        </div>
      )
    }
      <div className='container mx-auto lg:px-0'>
        <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:max-0'>
          {rooms.map((room) => (
            <Room key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
