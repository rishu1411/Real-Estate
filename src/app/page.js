import Banner from '@/components/Banner'
import HouseList from '@/components/HouseList'
import React from 'react'


function page() {
  return (
    <div className='min-h-[1800px] mx-auto bg-white xl:mx-8 md:rounded-lg'>
      <Banner />
      <HouseList/>
    </div>
  )
}

export default page