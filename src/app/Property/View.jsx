'use client'
import React, {useContext } from 'react'
import { housesData } from '@/data'
import { HouseContext } from '@/Context/HouseContext'
import Detail from './Detail'


function View() {
  const { ID } = useContext(HouseContext)
  const house = housesData.find(home => {
     return home.id === ID
  })
  console.log('Hello',house)
  console.log('House',ID)
    return (
        <div className='lg:mx-14'>
            <Detail detail={house}/>
        </div>
        
       )
}

export default View