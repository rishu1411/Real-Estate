import React from 'react'
import Image from 'next/image'
import { BiBed, BiBath, BiArea } from 'react-icons/bi'

function Detail({ detail}) {
    // console.log('Detail',detail)
    const {type,  name, description, imageLg, country, address, bedrooms, bathrooms, surface, price,agent } = detail
  return (
      <section className='bg-white  container max-w-full py-8 min-h-[50rem] space-y-4'>
          <div className="cover">
              <div className="top flex flex-col sm:flex-row justify-between sm:items-center items-start space-y-4 mb-6"> 
                <div className='name xs:text-sm md:text-md'>
                  <h2 className='text-xl font-semibold'>{name}</h2>
                  <span className='font-md'>{address}</span>
                  </div>      
                  <div className="type space-x-3">
                      <span className='bg-green-500 text-white px-2 rounded-full py-1'>{ type}</span>
                      <span className='bg-violet-700 text-white px-2 rounded-full py-1'>{ country}</span>
                  </div>

                  <div className="price text-violet-700 font-semibold text-xl ">$ { price}</div>
              </div>

              <div className='flex flex-col md:flex-row justify-between space-x-2'>
              <div className="center space-y-4">
                      <Image src={imageLg} alt='House Image' width={700} className='border-[1.5px] border-gray-400 rounded-md p-1 w-full 'loading='lazy'/>
                      <div className='flex items-center gap-x-2 text-gray-600'>
          <span className='text-[20px] text-violet-700'><BiBed /> </span>
          <span>{ bedrooms} </span>
          <span className='text-[20px] text-violet-700'><BiBath /></span>
          <span>{ bathrooms} </span>
          <span className='text-[20px] text-violet-700'><BiArea /> </span>
          <span>{ surface} </span>
        </div>
                  <p className='pr-8 w-full '>{ description}</p>
                  </div>
                  <form action="" className=' border-[1.5px] border-gray-300 p-4 rounded-lg max-h-[552px] mt-5 md:mt-0 ' id='form1'>
                      <div className="intro flex items-center space-x-2 mb-6">
                          <Image src={agent.image} alt='agent image' height={100} className='border-[1.5px] border-gray-200 rounded-full p-1' loading='lazy' />
                          <div>
                              <h3 className='font-semibold text-lg'>{agent.name}</h3>
                              <span className='text-gray-400 text-sm'>View Listings</span>
                          </div>
                      </div>

                      <div className="form_area ">
                          <label htmlFor="name">
                              <input type="text" placeholder='*Name' id='name' className='px-3 py-3 outline-none border-[1.5px] border-gray-300 rounded-md w-full mb-4 focus:border-black ' onChange={(e)=> e.target.value} required/>
                          </label>
                          <label htmlFor="email">
                              <input type="email" placeholder='*Email' id='email' className='px-3 py-3 outline-none border-[1.5px] border-gray-300 rounded-md w-full mb-4 focus:border-black ' onChange={(e)=> e.target.value} required/>
                          </label>
                          <label htmlFor="phone">
                              <input type="tel" placeholder='*Phone' id='phone' className='px-3 py-3 outline-none border-[1.5px] border-gray-300 rounded-md w-full mb-4 focus:border-black ' onChange={(e)=> e.target.value} required/>
                          </label>
                          <label htmlFor="name">
                              <input type="text" placeholder="Hello I'm Interested in Modern Apartment" id='name' className='px-3  outline-none border-[1.5px] border-gray-300 rounded-md w-full mb-4 h-24 focus:border-black' onChange={(e)=> e.target.value} />
                          </label>

                          <div className="buttons  space-x-2  flex mb-2">
                              <button type='submit' onSubmit={(e) => e.preventDefault()} form='form1' value='Submit' className='bg-violet-700 text-white font-semibold s py-2 rounded-lg hover:bg-violet-800 w-auto px-1'>Send Message</button>
                              <button className='border-2 border-violet-700 w-[50%] px-2 rounded-lg text-violet-700 font-semibold'>Call</button>
                          </div>
                          
                      </div>
                      
                  </form>
                  </div>
          </div>
   </section>
  )
}

export default Detail