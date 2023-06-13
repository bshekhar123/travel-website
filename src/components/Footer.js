import React from 'react';
import LogoWhite from "../assets/img/logo-white.svg"


const Footer = () => {
  return (<footer className="bg-zinc-800 py-12 ">
    <div className="container mx-auto text-white flex justify-between">
      <img src={LogoWhite} alt=""/>
      Copyright &copy; 2023. All rights reserved
    </div>
  </footer>);
};

export default Footer;
