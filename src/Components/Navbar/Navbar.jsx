import React from 'react'
import Data from "../Data/Data"

const Navbar = () => {
  return (
    <div className=''>
      <div className='max-w-[1200px] mx-auto p-[20px]'>
        <div className='flex flex-wrap gap-[50px]'>
          {
            Data && Data.map((item, index) => (
              <div key={index} className='w-[250px] h-[300px] p-4 bg-white shadow-md rounded-lg relative max-sm:w-[340px] group'>
                {/* Mahsulot rasmi */}
                <img src={item.img1} alt={item.name} className='w-[140px] h-[150px] ml-[30px] max-sm:ml-[70px]' />
                
                {/* Qo'shimcha rasmlar */}
                <img src={item.img3} alt={item.name} className='w-[30px] h-[30px] absolute right-2 top-1' />
                <img src={item.img4} alt={item.name} className='w-[30px] h-[30px] absolute right-2 top-10' />
                
                {/* Mahsulot nomi */}
                <h1 className='text-xl font-bold mt-2 max-sm:ml-[40px]'>{item.name}</h1>
                
                {/* Narx va boshqa elementlar */}
                <ul className='flex h-[40px] items-center gap-[5px] max-sm:ml-[20px]'>
                  <h2 className='text-lg text-gray-600'>{item.price}</h2>
                  <img src={item.img2} alt={item.name} className='w-[140px] h-[20px]' />
                  <p className=''>{item.text}</p>
                </ul>
                
                {/* Hover bo'lganda tugma ko'rinadi */}
                <button className='mt-[20px] w-[250px] h-[60px] top-[220px]  bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity max-sm:w-[338px]'>
                  Buy Now
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;
