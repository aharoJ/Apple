import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import{
  BadgeCheckIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/outline';

const Header = () => {
  return (
  <header className='sticky z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4'>
    <div className='flex items-center justify-center md:w-1/5'>
      <Link href='/'>
        <div className='relative  w-5 cursor-pointer opacity-75 transition hover:opacity-100 h-10'>
          <Image src="/logo.png" layout="fill" style={{objectFit:"contain"}} alt='hehe'/>
        </div>
      </Link>
    </div>

    <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
      <a className="headerLink">Product</a>
      <a className="headerLink">Explore</a>
      <a className="headerLink">Support</a>
      <a className="headerLink">Business</a>
    </div>

    <div className=''>
      <SearchIcon className='headerIcon'/>
      <Link href={'/checkout'}>
        <div className='relative cursor-pointer'>
          <span className=' -right-1 -top-1 absolute z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500'>
            5
          </span> 
          <ShoppingBagIcon className='headerIcon'/>
        </div>
      </Link>
    </div>
      

  </header>
  )
}


export default Header