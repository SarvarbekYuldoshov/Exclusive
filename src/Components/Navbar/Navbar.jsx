import React from 'react'
import Data from "../Data/Data"

const Navbar = () => {
  return (
    <div className=''>
      <div className='max-w-[1200px] mx-auto p-[20px] border border-black'>
        <div className='flex flex-wrap gap-[50px]'>
          {
            Data && Data.map((item, index) => (
              <div key={index} className='w-[250px] p-4 bg-white shadow-md rounded-lg relative max-sm:w-[340px]'>
                <img src={item.img1} alt={item.name} className='w-[140px] h-[150px] ml-[30px]' />
                <img src={item.img3} alt={item.name} className='w-[30px] h-[30px] absolute right-2 top-1' />
                <img src={item.img4} alt={item.name} className='w-[30px] h-[30px] absolute right-2 top-10' />
                <h1 className='text-xl font-bold mt-2'>{item.name}</h1>
                <ul className='flex items-center gap-[5px]'>
                  <h2 className='text-lg text-gray-600'>{item.price}</h2>
                  <img src={item.img2} alt={item.name} className='w-[140px] h-[20px] ' />
                  <p>{item.text}</p>
                </ul>
                
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;


