import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 hover:transition hover:duration-500' 
            src="./img/icon.png"
            alt="" />
          </div>
    </footer>
  )
}