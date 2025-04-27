import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdPhone } from "react-icons/md";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
      <SingleInfo text='asthanapriyanka829@gmail.com' Image={HiOutlineMail} />
      <SingleInfo text='www.linkedin.com/in/priyanka-asthana-1b9a74250' Image={TiSocialLinkedin} />
      <SingleInfo text='+91 9198161468' Image={MdPhone} />
    </div>
  );
};

export default ContactInfo
