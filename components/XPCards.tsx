import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function XPCards({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-[200px] md:w-[300px] xl:w-[600px]  rounded-corner snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden py-5 relative'>
        <motion.img 
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{duration:1.2,}}
        whileInView={{opacity:1,y:0,}}
        viewport={{once:true}}
        className='w-18 h-18 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="./img/1stimg.jpg" //////////////////////IMG///////////////////
        alt="" />


        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-bold'>
              CEO of Trendiz
            </h4>
            <div className='flex space-x-2 my-2'>

            </div>
            <p className='uppercase  text-gray-300'>bharo idhar kuch toh</p>

        </div>
    </article>
  )
}