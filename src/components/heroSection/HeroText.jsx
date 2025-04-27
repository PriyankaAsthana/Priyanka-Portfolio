import React from 'react'
import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variance';
const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
      <motion.h2
       variants={fadeIn('down',0.2)}
       initial='hidden'
       whileInView='show'
       viewport={{once:false, amount:0}}
       className='lg:text-2xl sm:text-xl uppercase text-cyan'>Java & Web Developer</motion.h2>
      <motion.h1
        variants={fadeIn('right',0.4)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount:0}}
       className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange'>
        PRIYANKA ASTHANA
      </motion.h1>
      <motion.p
        variants={fadeIn('up',0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount:0}}
        className='text-lg mt-4 text-white'>
        Fueled by Java, structured with DSA,
        <br /> and brought to life on the web.
      </motion.p>
      <a
        href="/images/Priyanka_Asthana_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-4 hover:bg-orange transition-all duration-500 cursor-pointer text-white hover:text-cyan md:self-start sm:self-center'
      >
        Resume
      </a>
    </div>
  );
};

export default HeroText
