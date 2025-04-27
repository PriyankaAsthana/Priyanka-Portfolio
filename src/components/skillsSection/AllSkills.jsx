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
const AllSkills = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-2 max-w-[1200px] mx-auto'>
        {skills.map((item, index) =>{
            return(
                <motion.div 
                variants={fadeIn('up',`0.${index}`)}
                initial='hidden'
                whileInView='show'
                viewport={{once:false, amount:0}}>
                <SingleSkills key={index} text={item.skill} imgSvg={<item.icon/>}/>
                </motion.div>
            );
        })};
      </div>
    </div>
  );
};

export default AllSkills
