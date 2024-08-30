import React from 'react'
import Rasm_8 from "../images/rasm8.png"
import Rasm_9 from "../images/rasm9.png"
import Rasm_10 from "../images/rasm10.png"
import Rasm_11 from "../images/rasm11.png"
import Rasm_12 from "../images/rasm12.png"
import Rasm_13 from "../images/rasm13.png"
import Rasm_14 from "../images/rasm14.png"
const Hover = () => {
  return (
    <div className=''>
      <div className='mx-auto max-w-[1200px] mt-[100px]'>
        <ul className=''>
            <li className='flex gap-10 items-center'>
                <img className='' src={Rasm_8} alt="" />
                <p className='font-poppins text-[16px] font-semibold leading-[20px] text-left text-[#DB4444] w-[90px] h-[20px]'>Categories</p>
            </li>
            <li className=''>
                <h1 className='font-inter text-[36px] font-semibold leading-[48px] tracking-[0.04em] text-left text-black w-[379px] h-[48px]'>Browse By Category</h1>
            </li>   
        </ul>
        <ul className='flex gap-10 items-center mt-[50px] mb-[40px]'>
            <li className='w-[170px] h-[145px] border border-black hover:scale-95 transition-transform duration-1000'>
              <img className='items-center ml-[55px]  mt-[40px]' src={Rasm_9} alt="" />
              <p className='ml-[55px] mt-[10px]'>Phones</p>
            </li>
            <li className='w-[170px] h-[145px] border border-black hover:scale-95 transition-transform duration-1000'>
              <img className='items-center ml-[55px]  mt-[40px]' src={Rasm_10} alt="" />
              <p className='ml-[45px] mt-[10px]'>Computers</p>
            </li>
            <li className='w-[170px] h-[145px] border border-black hover:scale-95 transition-transform duration-1000'>
              <img className='items-center ml-[55px]  mt-[40px]' src={Rasm_11} alt="" />
              <p className='ml-[40px] mt-[10px]'>SmartWatch</p>
            </li>
            <li className='bg-red-700 w-[170px] h-[145px] border border-black hover:scale-95 transition-transform duration-1000'>
              <img className='items-center ml-[55px]  mt-[40px]' src={Rasm_12} alt="" />
              <p className='text-white ml-[55px] mt-[10px]'>Camera</p>
            </li>
            <li className='w-[170px] h-[145px] border border-black hover:scale-95 transition-transform duration-1000'>
              <img className='items-center ml-[55px]  mt-[40px]' src={Rasm_13} alt="" />
              <p className='ml-[40px] mt-[10px]'>HeadPhones</p>
            </li>
            <li className='w-[170px] h-[145px] border border-black hover:scale-95 transition-transform duration-1000'>
              <img className='items-center ml-[55px]  mt-[40px]' src={Rasm_14} alt="" />
              <p className='ml-[55px] mt-[10px]'>Gaming</p>
            </li>
        </ul>
        <hr className='mb-[20px] h-0.5 bg-black' />
      </div>
    </div>
  )
}

export default Hover
