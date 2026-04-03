import React from 'react'
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variance';

const experiences = [
  {
    job: 'NLP Researcher',
    company: 'IIT BHU',
    date: 'Feb 2026 – Apr 2026',
    responsibilities: [
      'Engineered NLP-driven test automation processing 1,000+ text inputs for semantic accuracy.',
      'Detected and resolved 20+ NLP parsing failures in real-time systems.',
      'Boosted pipeline reliability by 25% through targeted fixes.',
    ]
  },
  {
    job: 'AI Research Intern',
    company: 'Bharat Space Education Research Centre',
    date: 'Dec 2025 – Jan 2026',
    responsibilities: [
      'Developed AI-driven control algorithms for UAS across 5 experimental modules.',
      'Optimized trajectory prediction accuracy by 15% using ML.',
      'Reduced subsystem latency by 20% via real-time sensor data fusion.',
    ]
  },
  {
    job: 'IT Intern',
    company: 'Hindalco Industries (Aditya Birla Group)',
    date: 'Jul 2025 – Aug 2025',
    responsibilities: [
      'Built analytical dashboards and automated ERP data pipelines.',
      'Accelerated API and query performance by 10% for industrial operations.',
      'Reduced manual processing time by 25% through data flow optimization.',
    ]
  },
  {
    job: 'AI Intern',
    company: 'Edunet Foundation',
    date: 'Feb 2025 – Mar 2025',
    responsibilities: [
      'Worked on applied AI/ML projects including classification and clustering.',
      'Implemented supervised and unsupervised learning algorithms in Python.',
      'Evaluated models using accuracy, precision, recall, and confusion matrices.',
    ]
  },
];

const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
      {experiences.map((experience, index)=>{
        return (
          <>
          <SingleExperience key={index} experience={experience} />
          {index < 3 ? (
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
