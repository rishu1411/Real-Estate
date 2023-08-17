'use client'
import React, { useContext,useState } from 'react';
import {RiMapPinLine,RiArrowUpSLine,RiArrowDownSLine} from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { HouseContext } from '@/Context/HouseContext';
const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext)
 
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (country) => {
    setCountry(country)
    setIsOpen(!isOpen)
  }

  return (
    <Menu as='div' className='dropdown relative  '>

      <Menu.Button className=' dropdown-btn w-full text-left' onClick={() => setIsOpen(!isOpen)}>
        
        <RiMapPinLine className='dropdown-icon-primary' />
        
        <div className='flex flex-col text-[15px] font-medium leading-tight '>
          <span className='font-semibold text-lg'>{country}</span>
          <span className='text-sm text-start'>Select your place</span>
        </div>
        
          {isOpen? <RiArrowUpSLine className='dropdown-icon-secondary'/>:<RiArrowDownSLine  className='dropdown-icon-secondary'/>}
          

      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {countries.map((country, index) => {
          return (
            <Menu.Item as='li' key={index} className='cursor-pointer hover:text-violet-700 transition list-none font-medium' onClick={()=>handleClick(country)}>{ country}</Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
};

export default CountryDropdown;
