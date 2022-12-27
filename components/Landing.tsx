import Image from 'next/image'
import React from 'react'
import Banner from '../public/images/banner.jpg'
import Button from './Button'

function Landing() {
  return (
    <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8'>  
      <div className='space-y-8'>
        <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl'>
          <span className='block bg-gradient-to-r from-pink-600 to-violet-500 bg-clip-text text-transparent'>Powered</span>
          <span className='block'>By Intellect</span>
          <span className='block'>Driven By Values</span>
        </h1>
        <div className='space-x-8'>
          <Button title="Buy Now"/>
          <a className='relative cursor-pointer text-lg font-medium inset-x-0 -bottom-1 h-0.5 origin-left hover:underline'>Learn More</a>
        </div>
      </div>
      <div className='relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline md:h-[300px] lg:h-[600px] lg:w-[900px]'>
        <Image src={Banner} alt="/" style={{objectFit: "cover"}}width={900} height={900}/>
      </div>
    </section>
  )
}

export default Landing