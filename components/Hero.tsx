import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BgCircles from './BgCircles'

type Props = {}

export default function Hero({}: Props) {
    const [text, count]=useTypewriter({
        words:[
            "The Name's Gupta...",
            "Manan Gupta",
            "What Doesn't KILL Me Gives Me XP",
            "<ButLovesToCodeMode />"
        ],
        loop:true,
        delaySpeed:2000, 
    })


  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BgCircles />
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='./img/1stimg.jpg'/////////////////////////////////////////IMG/////////////////////////////////////////////
        alt=""  />
        <div className='z-20'> 
            <h2 className='font-extrabold text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Sofware Engineer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='red' />
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton font-extrabold'>About</button>
                </Link>
                {/* <Link href='#workxp'>
                    <button className='heroButton font-extrabold'>Experience</button>
                </Link> */}
                <Link href='#skills'>
                    <button className='heroButton font-extrabold'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroButton font-extrabold'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}