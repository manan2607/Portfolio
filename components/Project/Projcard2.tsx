import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    directionLeft?:boolean;
}

function Projcard2({directionLeft}: Props) {
  return (
    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '>
                <motion.img 
                initial={{
                    y:-300,
                    opacity:0,
                }}
                transition={{duration:1.2}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                className='w-18 h-18 xl:w-[200px] xl:h-[200px] object-cover object-center'
                src="./img/ca.jpeg" ////////////IMG////////////////
                alt=""
                />
                

                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[red]/50'>
                            Case Study 2 of 3 :
                        </span> 
                        {" "}AirCanvas
                    </h4>

                    <p className='text-lg text-center md:text-left'>
                    This project deals with drawing of designs just by using a pen pointer in air you can draw anything the way you want. Some techs which we used were Stack-python, OpenCV2. Now the only limit is your imagination.
                    </p>
                </div>
            </div>
  )
}

export default Projcard2