import React from 'react';
import Rasm_8 from "../images/rasm8.png";
import Rasm_9 from "../images/rasm9.png";
import Rasm_10 from "../images/rasm10.png";
import Rasm_11 from "../images/rasm11.png";
import Rasm_12 from "../images/rasm12.svg";
import Rasm_13 from "../images/rasm13.png";
import Rasm_14 from "../images/rasm14.png";

const Hover = () => {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-[1200px] mt-[50px] p-4 md:p-8'>
        <ul className='flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10'>
          <li className='flex items-center gap-3'>
            <img src={Rasm_8} alt="Categories" />
            <p className='font-poppins text-[16px] font-semibold leading-[20px] text-[#DB4444]'>Categories</p>
          </li>
          <li>
            <h1 className='font-inter text-[28px] md:text-[36px] font-semibold leading-[36px] md:leading-[48px] tracking-wide text-black'>
              Browse By Category
            </h1>
          </li>   
        </ul>
        <ul className='hover-active grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10 items-center mt-[30px] md:mt-[50px] mb-[40px] max-sm:gap-10'>
          {[
            { src: Rasm_9, label: 'Phones' },
            { src: Rasm_10, label: 'Computers' },
            { src: Rasm_11, label: 'SmartWatch' },
            { src: Rasm_12, label: 'Camera' },
            { src: Rasm_13, label: 'HeadPhones' },
            { src: Rasm_14, label: 'Gaming' }
          ].map((item, index) => (
            <li 
              key={index}
              className='w-[170px] h-[145px] border border-black flex flex-col justify-center items-center transition-transform duration-300 hover:bg-red-500 hover:scale-105 hover:text-white group max-sm:w-[140px]'
            >
              <img className='w-[50px] h-[50px] group-hover:filter group-hover:invert' src={item.src} alt={item.label} />
              <p className='mt-[10px] font-poppins text-[16px] group-hover:text-white'>{item.label}</p>
            </li>
          ))}
        </ul>
        <hr className='h-0.5 bg-black' />
      </div>
    </div>
  );
}

export default Hover;
