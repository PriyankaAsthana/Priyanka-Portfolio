import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variance';

const projects = [
  {
    name: 'DiagnoseAI: Medical Symptom Assessment',
    year: 'Apr 2025 – Nov 2025 | Indian Patent Filed (202611012869)',
    align:'left',
    image:'/images/website-img-2.webp',
    link:'#',
  },
  {
    name:'RAKT: Tokenized GeoAI Blood Allocation Framework',
    year:'Dec 2024 – Nov 2025 | Under Review at Springer Nature',
    align:'right',
    image:'/images/website-img-1.jpg',
    link: '#',
  },
  {
    name: 'Kashivani: Multi-Agent Cultural NLP System',
    year: 'Sep 2025 – Oct 2025 | RAG Pipeline · 40% Hallucination Reduction',
    align:'left',
    image:'/images/website-img-3.jpg',
    link:'https://kashivani.onrender.com',
  },
  {
    name: 'ChatterBox: Secure Online Chat',
    year: 'Jan 2024',
    align:'right',
    image:'/images/website-img-4.jpg',
    link: '#',
  },
]

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
       variants={fadeIn('up',0.2)}
       initial='hidden'
       whileInView='show'
       viewport={{once:false, amount:0}}>
      <ProjectsText />
      </motion.div>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((item,index)=>{
          return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link} />
        })}
      </div>
    </div>
  );
};

export default ProjectsMain
