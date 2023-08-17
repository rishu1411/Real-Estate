'use client'
import { HouseContext } from '@/Context/HouseContext'
import React,{useContext} from 'react'

function Buttons({ value }) {
  const { handleClick, setLoading } = useContext(HouseContext)
  
  return (
      <button className='bg-violet-700 w-full h-16 lg:max-w-[162px] transition flex items-center justify-center text-2xl font text-white rounded-lg hover:bg-violet-800' onClick={()=>handleClick()}>{value}</button>
  )
}

export function Button_2({value,id }) {
  const { handle } = useContext(HouseContext)
  const handleCLick = () => {
    setID(id)
    setTimeout(() => {
      
      sessionStorage.setItem("ID",ID)
    }, 500);
  }
  
  return (
    <button onClick={()=>handle(id)} className='w-auto px-2 bg-green-500 text-white font-semibold rounded-lg h-8 xs:text-sm hover:bg-green-600'>{ value}</button>
  )
}

export default Buttons