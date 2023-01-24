import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill/Skill1'
import Skill1 from './Skill/Skill1'
import Skill2 from './Skill/Skill2'
import Skill3 from './Skill/Skill3'
import Skill4 from './Skill/Skill4'
import Skill5 from './Skill/Skill5'
import Skill6 from './Skill/Skill6'
import Skill7 from './Skill/Skill7'
import Skill8 from './Skill/Skill8'
import Skill9 from './Skill/Skill9'
import Skill10 from './Skill/Skill10'
import Skill11 from './Skill/Skill11'
import Skill12 from './Skill/Skill12'
type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
    initial={{ opacity:0, }}
    whileInView={{ opacity: 1,}}
    transition={{ duration: 1.5,}}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center space-y-10'>
        <h3 className='font-bold absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>  

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>Hover over a skill for currency proficiency</h3>

        <div className='grid grid-cols-4 gap-5'>
            <Skill1 />
            <Skill2 />
            <Skill4 />
            <Skill3 />
            <Skill8 />
            <Skill9 />
            <Skill5 />
            <Skill6 />
            <Skill7 />
            <Skill10 />
            <Skill11 />
            <Skill12 />
        </div>
    </motion.div>
  )
}