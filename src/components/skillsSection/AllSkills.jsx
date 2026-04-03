import React from 'react'
import { SiPython } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { SiThealgorithms } from "react-icons/si";
import SingleSkills from './SingleSkills';
import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variance';

const skills = [
  {
    skill: 'Python',
    icon: SiPython,
  },
  {
    skill: 'PyTorch',
    icon: SiPytorch,
  },
  {
    skill: 'TensorFlow',
    icon: SiTensorflow,
  },
  {
    skill: 'Scikit-learn',
    icon: SiScikitlearn,
  },
  {
    skill: 'NLP / LLMs',
    icon: SiHuggingface,
  },
  {
    skill: 'Java',
    icon: FaJava,
  },
  {
    skill: 'DSA',
    icon: SiThealgorithms,
  },
  {
    skill: 'JavaScript',
    icon: IoLogoJavascript,
  },
  {
    skill: 'Databases',
    icon: FaDatabase,
  },
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
