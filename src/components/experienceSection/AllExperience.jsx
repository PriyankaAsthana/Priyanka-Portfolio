import React from 'react'
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variance';

const experiences =[
  {
    job: 'Front-End Developer',
    company: 'MotionCut',
    date: 'Apr 2024 - May 2024',
    responsibilities: [
      'Designed and optimized front-end components for e-commerce apps.',
      'Focused on security-oriented UI features to enhance user safety.',
      'Improved responsiveness and UI accessibility across devices.',      
    ]
  },
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
    job: 'Transcriptor & Quality Analyst',
    company: 'Solvitude',
    date: 'Dec 2024 - Jan 2025',
    responsibilities: [
      'Transcribed cybersecurity datasets for ML applications.',
      'Ensured accuracy and structure of large-scale datasets.',
      'Worked closely with research teams for clean input data.',
    ]
  },
  {
    job: 'AI Intern',
    company: 'AICTE Edunet',
    date: 'Feb 2025 - Mar 2025',
    responsibilities: [
      'Researched AI-based web security solutions.',
      'Built basic ML models for anomaly detection.',
      'Worked with datasets simulating network traffic.',
      'Presented findings on AI use in threat mitigation and security.'
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
