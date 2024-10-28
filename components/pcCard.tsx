"use client"

import Image from 'next/image';
import React from 'react'
import { BorderBeam } from './ui/border-beam';
import BlurFade from './ui/blur-fade';

const PcCard = () => {

    
  return (
    <BlurFade delay={0.20} inView>
    <div className="overflow-hidden rounded-xl m-6 md:mx-28 z-10 relative ">
   
      <Image
        src="/bgdark.png"
        alt="Dark mode hero"
        width={1920}
        height={1080}
        className='hidden dark:block'
        priority
      />
   
      <Image
        src="/bglight.png"
        alt="Light mode hero"
        width={1920}
        height={1080}
        className='dark:hidden'
        priority
      />


      <BorderBeam/>
   
  </div>
  </BlurFade>

  )
}

export default PcCard
