'use client'
import React, {useContext } from 'react'
import { housesData } from '@/data'
import { HouseContext } from '@/Context/HouseContext'
import Detail from './Detail'
import {ImSpinner2} from 'react-icons/im'


function View() {
  const { ID } = useContext(HouseContext)
  const house = housesData.find(home => {
     return home.id === ID
  })

    return (
      <div className='lg:mx-14'>
          {ID === null? (<ImSpinner2 className='animate-spin text-violet-700 mx-auto mt-[200px] text-4xl my-96' />):<Detail detail={house}/>}
            
        </div>
        
       )
}

export default View