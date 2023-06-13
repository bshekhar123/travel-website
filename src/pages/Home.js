import React from 'react'
import Rooms from "../components/Rooms"
import BookForm from '../components/BookForm'
import HeroSlider from '../components/HeroSlider'
const Home = () => {
  return (
    <>
    <HeroSlider/>
      <div className="container mx-auto relative">
        <div className='mt-4 p-4 lg:shadow-xl lg:absolute  bg-blue-200 lg:-top-12 lg:left-0 lg:right-0 lg:p-0 lg:z-30'><BookForm /></div>
      </div>
      <Rooms />
    </>
  )
}

export default Home