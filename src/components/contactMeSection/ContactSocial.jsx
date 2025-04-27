import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link="https://www.linkedin.com/in/priyanka-asthana-1b9a74250/" Icon={TiSocialLinkedin} />
      <SingleContactSocial link="https://github.com/PriyankaAsthana" Icon={FaGithub} />
      <SingleContactSocial link="https://leetcode.com/u/Priyanka_Asthana/" Icon={SiLeetcode} />
    </div>
  );
};

export default ContactSocial
