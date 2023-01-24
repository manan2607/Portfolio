import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    directionLeft?:boolean;
}

function Projcard1({directionLeft}: Props) {
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
                src="./img/bank.jpg" ////////////IMG////////////////
                alt=""
                />
                

                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[red]/50'>
                            Case Study 1 of 3 : 
                        </span> 
                        {" "}  Simple Banking System
                    </h4>

                    <p className='text-lg text-center md:text-left'>
                    A simple banking system typically includes basic services such as account creation, deposits, withdrawals, and transfers. We achived it using a C++ program which can perform all of the above.
                    </p>
                </div>
            </div>
  )
}

export default Projcard1