'use client'
import React, { useContext,useState } from 'react';
import {RiWallet3Line,RiArrowUpSLine,RiArrowDownSLine} from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { HouseContext } from '@/Context/HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext)
  
 
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (price) => {
    setPrice(price)
    setIsOpen(!isOpen)
  }

  const prices = [
    {
    value : 'Price range (any)',
    },
    {
    value : '100000 - 130000',
    },
    {
    value : '130000 - 160000',
    },
    {
    value : '160000 - 190000',
    },
    {
    value : '190000 - 220000',
    },
    {
    value : '10000 - 30000',
    },
    {
    value : '30000 - 40000',
    },
  ]

  return (
    <Menu as='div' className='dropdown relative  '>
      <Menu.Button className=' dropdown-btn w-full text-left' onClick={()=>setIsOpen(!isOpen)}>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div className='flex flex-col text-[15px] font-medium leading-tight '>
          <span className='font-semibold text-lg'>{price}</span>
          <span className='text-sm text-start'>Choose price</span>
        </div>
        
          {isOpen? <RiArrowUpSLine className='dropdown-icon-secondary'/>:<RiArrowDownSLine  className='dropdown-icon-secondary'/>}
          

      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item as='li' key={index} className='cursor-pointer hover:text-violet-700 transition list-none font-medium' onClick={()=>handleClick(price.value)}>{ price.value}</Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
};

export default PriceRangeDropdown;
