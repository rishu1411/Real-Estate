import React from 'react';
import banner from '@/assets/house-banner.png'
import Image from 'next/image';
import Search from './Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[648px] mb-8 xl:mb-24 xs:pt-5 md:pt-0'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='font-semibold text-4xl lg:text-[58px] leading-none mb-6'><span className='text-violet-700'>Rent </span>Your Dream House With Us.</h1>
          <p className='max-w-[480px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium expedita voluptatibus officiis labore placeat repellendus blanditiis, iure, in tempore maiores sit omnis veritatis animi ipsum qui, possimus pariatur fuga.</p>
        </div>

        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <Image src={banner } alt='banner' />
        </div>
    </div>
    
      <Search/>
    </section>
  )
};

export default Banner;
