'use client'
import React, { useState, useEffect, createContext } from 'react';
import { housesData } from '@/data';


export const HouseContext = createContext()



const HouseContextProvider = ({ children }) => {
 
  const [houses,setHouses] = useState(housesData)
  const [country,setCountry] = useState('Location (any)')
  const [ countries, setCountries ] = useState([]);
  const [property,setProperty ] = useState('Property type (any)')
  const [ properties,setProperties ] = useState([]);
  const [ price, setPrice ] = useState('Price range (any)')
  const [loading,setLoading] = useState(false)
  const [ID, setID] = useState(null)
  

  
  useEffect(() => {
    const allCountries = houses.map((house) => {
    return house.country
    })
    const uniqueCountries = ['Location (any)', ... new Set(allCountries)]
    
    setCountries(uniqueCountries)
  },[houses])
  
  useEffect(() => {
    const allProperties = houses.map((house) => {
    return house.type
    })
    const uniqueCountries = ['Property Type (any)', ... new Set(allProperties)]
    
    setProperties(uniqueCountries)
  },[houses])
  
  function handleClick() {
    setLoading(true)
    console.log('IsLoading',loading)
    function isDefault(str) {
      // console.log(str.split(' ').includes('(any)'))
      return str.split(' ').includes('(any)')
    }

    const min_val = parseInt(price.split(' ')[0])
    const max_val = parseInt(price.split(' ')[2])
    
    const newHouse = housesData.filter((house) => {
      const housePrice = parseInt(house.price)

      if (house.country === country && house.type === property && min_val <= housePrice && housePrice <= max_val) {
        return house
      }
       if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house
      }
      
       if (house.country === country && isDefault(property) && isDefault(price)) {
        return house
      }
       if (isDefault(country) && house.type === property && isDefault(price)) {
        return house
      }
       if (isDefault(country) && isDefault(property) && min_val <= housePrice  && housePrice <= max_val) {
        return house
      }
       if (isDefault(country) && house.type === property && min_val <= housePrice && housePrice <= max_val) {
        return house
      }
       if (house.country === country && isDefault(property) && min_val <= housePrice && housePrice <= max_val) {
        return house
      }
       if (house.country === country && house.type === property && isDefault(price)) {
        return house
      }
    })
    
    setTimeout(() => {
      setLoading(false)
      return newHouse.length < 1 ? setHouses([]) : setHouses(newHouse)
   },1000)
  }

  function handle(id) {
    setID(id)
    setTimeout(() => {
      
      sessionStorage.setItem('id',id)
    }, 300);
  }

  useEffect(() => {
    const id = window.sessionStorage.getItem('id')
    if (id !== null) {
      
      setID(JSON.parse(id))
    }
  },[])

  useEffect(() => {
    window.sessionStorage.setItem('id',JSON.stringify(ID))
  },[ID])
  const value = { country, setCountry, countries, property, setProperty, properties, price, setPrice, houses, loading,handleClick,ID,setID,handle}
  return <HouseContext.Provider value={value
   } >{children}</HouseContext.Provider>
};

export default HouseContextProvider;
