import React from 'react';
import Logo from '@/app/logo.svg'
import Link from 'next/link';
import Image from 'next/image';
import { BiMenu } from 'react-icons/bi'

const Header = () => {
  return (
    <header className="h-16 bg-white flex items-center justify-between shadow-lg md:mb-12 xs:mb-0 xs:border-b-[1.5px] border-violet-400 md:border-none">
      <Link href='/' className='ml-5 text-center'><Image src={Logo} alt='Logo' /></Link>
      <div className="links space-x-3 mr-5 transition flex items-center xs:hidden sm:flex">
        <Link href='/' className='font-semibold transition underline hover:text-violet-600'>Log in</Link>
        <Link href='/' className='bg-violet-500 text-white font-semibold rounded-full w-auto px-2 py-1 transition hover:bg-violet-700'>Sign up</Link>
      </div>
        <span className='sm:hidden text-2xl mr-6 font-semibold hover:text-violet-700 transition cursor-pointer'><BiMenu/></span>

    </header>
  )
};

export default Header;
