"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import {signIn, signOut, useSession, getProviders,} from "next-auth/react"
const Nav = () => {
  return (
   <nav className='flex-between w-full mb-16 pt-3'>
    <Link href="/" className='flex gap-2 flex-center'>
      <Image src="logo.svg" alt="Logo" height={30} width={30} className=" object-contain "/>
    </Link>
   </nav>
  )
}

export default Nav
