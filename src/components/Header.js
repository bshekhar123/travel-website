import React, { useState, useEffect } from 'react';

import LogoWhite from "../assets/img/logo-white.svg"
import LogoDark from "../assets/img/logo-dark.svg"

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
  })

  return (
    <header className={`${header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"} fixed z-50 w-full transition-all duration-500`}>
      <div className="container mx-auto flex  flex-col items-center gap-y-6 lf:felx-row lg:justify-between ">
        <a href="/" className="">{header ? (<img className="w-[160px]" src={LogoDark} />) : (<img className="w-[160px]" src={LogoWhite} />)}</a>

        <nav className={`${header ? "text-black" : "text-white"} flex gap-x-4 lg:gap-x-8 tracking-[3px] text-[15px ] items-center uppercase font-tertiary`}>
          <a href=" " className="hover:text-purple-500 transition">
            Home
          </a>
          <a href=" " className="hover:text-purple-500 transition">
            Rooms
          </a>
          <a href=" " className="hover:text-purple-500 transition">
            Resturant
          </a>
          <a href=" " className="hover:text-purple-500 transition">
            Spa
          </a>
          <a href=" " className="hover:text-purple-500 transition">
            Contact
          </a>

        </nav>
      </div>
    </header>
  );
};

export default Header;
