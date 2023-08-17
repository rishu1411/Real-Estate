'use client'
import { HouseContext } from '@/Context/HouseContext';
import React, { useContext } from 'react';
import House from './House'
import {ImSpinner2} from 'react-icons/im'
const HouseList = () => {
  const { houses, loading } = useContext(HouseContext)
  
  if (loading) {
   
      return (<ImSpinner2 className='animate-spin text-violet-700 mx-auto mt-[200px] text-4xl' />)

  }
  
  if (houses.length < 1) {
    return (
     <h2 className='text-center text-violet-700 text-2xl font-semibold'>Sorry! No results found</h2>
   )
 }
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 space-x-4'>
          {houses.map((house, index) => {
            return (
              <House house={house} key={index}/>
            )
          })}
        </div>
      </div>
    </section>
  )
};

export default HouseList;
