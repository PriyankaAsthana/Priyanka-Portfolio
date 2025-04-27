import React from 'react'
import { FaJava } from "react-icons/fa";
import { SiThealgorithms } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import SingleSkills from './SingleSkills';
import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variance';
const skills = [
{
    skill: 'Java',
    icon: FaJava, 
},
{
    skill: 'DSA',
    icon: SiThealgorithms,
},
{
    skill: 'HTML',
    icon: FaHtml5,
},
{
    skill:'CSS',
    icon: FaCss3Alt,
},
{
    skill: 'JS',
    icon: IoLogoJavascript,
},
{
    skill: 'REACT',
    icon: IoLogoReact,
},
{
    skill: 'TailWind',
    icon: RiTailwindCssFill,
},
{
    skill: 'DBMS',
    icon: FaDatabase,
},
{
    skill: 'PHP',
    icon: FaPhp ,
}
]

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item, index)=>{
        return (
          <motion.div
          variants={fadeIn('up',0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{once:false, amount:0.7}}
          key={index} className='flex flex-col items-center'>
          <item.icon className='text-7xl text-orange'/>
          <p className='text-center mt-4 text-white'>{item.skill}</p>
        </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM
