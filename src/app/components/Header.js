import Link from 'next/link'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header() {
  return (
   <header className='flex bg-gray-400 sm:px-10 min-h-[70px] tracking-wide relative z-50'>
<div className="flex items-center justify-between w-full">
        <Link href="/" passHref>
          <div className="text-xl font-bold text-white hover:text-blue-100 cursor-pointer">
            Sunrise Sips
          </div>
        </Link>
        <nav>
          <ul className='lg:flex flex-col lg:flex-row gap-x-5 items-center mt-3 text-white'>
<li className="my-2 lg:my-0">
<Link href="#products">Shop</Link>
</li>
          </ul>
        </nav>
        </div>
   </header>
  )
}
