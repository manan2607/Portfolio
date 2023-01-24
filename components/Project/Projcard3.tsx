import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    directionLeft?:boolean;
}

function Projcard3({directionLeft}: Props) {
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
                src="./img/phonebook.jpg" ////////////IMG////////////////
                alt=""
                />
                

                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[red]/50'>
                            Case Study 3 of 3 :
                        </span> 
                        {" " }PhoneBook
                    </h4>

                    <p className='text-lg text-center md:text-left'>
                        Just like a normal PhoneBook you can Save, Search and Edit the contacts in the program. Achived it with a O(log n) time as we used BST for better Time Complexity... All of the projects are uploaded on my GitHub account.
                    </p>
                </div>
            </div>
  )
}

export default Projcard3