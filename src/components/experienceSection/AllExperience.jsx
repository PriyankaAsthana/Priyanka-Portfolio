import React from 'react'
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variance';

const experiences =[
  {
    job: 'Web Developer',
    company: 'Bharat Intern',
    date: 'May 2024 - Jun 2024',
    responsibilities: [
      'Built a secure login system using PHP and MySQL.',
      'Implemented encrypted credential handling for user safety.',
      'Developed role-based access control for internal tools.',
    ]
  },
  {
    job: 'QA Analyst',
    company: 'JoshTalks-Solvitude',
    date: 'Dec 2024 - Feb 2025',
    responsibilities: [
      ' Developed and executed manual and automated test cases.',
      'Implemented for web and mobile applications.',
      'Conducted regression and performance testing',
    ]
  },
  {
    job: 'AI Intern',
    company: 'Edunet | IBM',
    date: 'Feb 2024 - Mar 2025',
    responsibilities: [
      'Researched AI-based web security solutions.',
      'Worked with datasets simulating network traffic.',
      'Presented findings on AI use in threat mitigation and security.',
    ]
  },
  {
    job: 'IT Intern',
    company: 'Hindalco Industries',
    date: 'Jul 2025 - Aug 2025',
    responsibilities: [
      'Worked with Oracle ERP solutions.',
      'Implemented MERN Skills for development',
      'Worked for internal tools and UI enhancements under skilled guidance and environment',
    ]
  }
];
const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
      {experiences.map((experience, index)=>{
        return (
          <>
          <SingleExperience key={index} experience={experience} />
          {index <3 ? (
            <motion.div
             variants={fadeIn('right',0.2)}
             initial='hidden'
             whileInView='show'
             viewport={{once:false, amount:0}}>
            <FaArrowRight className='text-6xl text-orange lg:block sm:hidden' />
            </motion.div>
          ) : ("")}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience


