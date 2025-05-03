import React from 'react'
import { FaCopyright } from "react-icons/fa";
const links =[
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills"},
    { link: "Experience", section: "experience"},
    { link: "Projects", section: "projects"},
    { link: "Contact", section: "contact"},
];

const FooterMain = () => {
  return (
    <div className='px-4'>
      <div className='w-full h-[1px] bg-lightgrey mt-24'></div>
      <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
        <p className='text-3xl text-lightgrey'>Priyanka Asthana</p>
        <ul className='flex gap-4 text-lightgrey text-xl'>
            {links.map((item,index)=>{
                return <li key={index}><a href={`#${item.section}`} className='hover:text-white transition- duration-500 cursor-pointer'>{item.link}</a></li>
            })}
        </ul>
      </div>
      <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightbrown'>© 2024 Priyanka Asthana | All rights reserved.</p>
    </div>
  );
};

export default FooterMain
