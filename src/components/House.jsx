import React from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import Image from 'next/image';
import { Button_2 } from './Buttons';
import Link from 'next/link';

const House = ({ house }) => {

  const {id,country,type,price,image,address,bedrooms,bathrooms,surface} = house
  return (
    

    <div className='bg-white shadow-lg rounded-lg rounded-tl-[90px] mx-auto w-full max-w-[352px] p-5 border-[1.5px] border-gray-200  hover:shadow-xl hover:shadow-violet-200 '>
    
        <Image src={image} alt='House photo' className='mb-8' />

      <div className='mb-4 flex gap-x-2 text-sm'>
    <span className='bg-green-500 rounded-full text-white px-3 py-1'>{type}</span>
          <span className='bg-violet-500 rounded-full text-white px-3 py-1'>{country}</span>
        </div>
        
        <div className='text-lg font-semibold max-w-[260px] '>{address}</div>   
        <div className='flex items-center gap-x-2 text-gray-800'>
          <span className='text-[20px] text-black'><BiBed /> </span>
          <span>{ bedrooms} </span>
          <span className='text-[20px] text-black'><BiBath /></span>
          <span>{ bathrooms} </span>
          <span className='text-[20px] text-black'><BiArea /> </span>
          <span>{ surface} </span>
        </div>

      <div className='flex justify-between'>
      <div className='text-lg font-semibold text-violet-700 mb-4'>$ {price}</div>
        <div>
          <Link href='/Property'><Button_2 id={ id} value={'View '} /></Link>
        
        </div>
        </div>
    </div>  
    
  )
};

export default House;
