import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
export default function Header() {
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <Image src='./logo.svg' alt="logoo" width={160} height={100}/> 
      <Button>Get Started</Button>
    </div>
  )
}


/* changes*/