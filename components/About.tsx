import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity:0, }}
    whileInView={{ opacity: 1,}}
    transition={{ duration: 1.5,}}
    className= 'flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='font-bold absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-0'>
            About
        </h3>  

        <motion.img 
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        viewport={{
            once: true,
        }}
        src="./img/2ndimg.jpg" ////////////////////////////////////////////IMG////////////////////////////////////////////
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-50  md:h-95 xl:w-[400px] xl:h-[500px]'
    />

    <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here Is A <span className='underline decoration-[red]/50'>Little</span> Background
        </h4>

        <p className='text-lg'>
        The name is Manan and I am a Second year student. I have had the opportunity to work on a diverse range of projects and have honed my skills in different languages such as CPP, Python, JS, etc.. My portfolio showcases some of my best work and demonstrates my passion for developing. I am always looking to take on new challenges and expand my skill set, so please feel free to reach out if you have any projects/internships that you think I would be a good fit for. Thanks for visiting!</p>
    </div>
    </motion.div>
  )
}