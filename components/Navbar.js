"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef ,useState} from 'react'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const [value, setValue] = useState('')
  const router=useRouter();
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      router.push(value)
    }
  }
  return (
    <nav className="h-16 px-4 bg-purple-700 flex justify-between items-center text-white">
      <Link href="/"><div className=" font-bold text-lg">BitLinks</div></Link>
      <ul className="flex gap-3">
        <li className='relative'><input type="text" placeholder="Search" className='pl-3 pr-2 rounded-md focus:outline-purple-600 text-purple-600 placeholder-purple-600' onChange={(e)=>setValue(e.target.value)} onKeyDown={handleKeyDown}></input>
        <Image src="search.svg" alt="search" width="20" height="20" className='absolute left-44 top-0.5'></Image></li>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact us</li></Link>
        <li className="flex gap-3">
          <Link href="/shorten"><button className="bg-purple-500 rounded-lg p-3 py-1  font-bold ">Try Now</button></Link>
          <Link href="/github"><button className="bg-purple-500 rounded-lg p-3 py-1  font-bold ">Github</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
