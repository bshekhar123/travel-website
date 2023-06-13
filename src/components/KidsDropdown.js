import React ,{useContext} from 'react';
import { RoomContext } from "../context/RoomContext"
import { Menu } from "@headlessui/react"
import { BsChevronDown } from 'react-icons/bs';


const lis = [
  { name: '0 Kid' },
  { name: '1 Kid' },
  { name: '2 Kid' },
  { name: '3 Kid' },

]


const KidsDropdown = () => {
  const{kids, setKids}= useContext(RoomContext)

  return (<Menu as="div" className="w-full bg-white relative h-full"> 
    <Menu.Button className="w-full h-full flex items-center justify-between  px-8">{kids === "0 Kids" ? "No Kid" : kids}
      <BsChevronDown className='text-base text-purple-400'/>
    </Menu.Button>
    <Menu.Items className="bg-white absolute w-full h-full flex flex-col z-40" as="ul">{lis.map((li, index) => {
      return <Menu.Item onClick={()=> setKids(li.name)}  as="li" className="w-full border-b last-of-type:border=b=0 h-12 cursor-pointer hover:bg-purple-500 hover:text-white flex justify-center" key={index}>{li.name}</Menu.Item>
    })}</Menu.Items>
  </Menu>);
};

export default KidsDropdown;