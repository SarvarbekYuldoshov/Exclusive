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
        <ul className='flex gap-10 items-center'>
            <li className='w-[170px] h-[145px] border border-black '>
              <img src={Rasm_9} alt="" />
              <p className=''></p>
            </li>
            <li className='w-[170px]'>
              <img src={Rasm_10} alt="" />
              <p className=''></p>
            </li>
            <li className='w-[170px]'>
              <img src={Rasm_11} alt="" />
              <p className=''></p>
            </li>
            <li className='w-[170px]'>
              <img src={Rasm_12} alt="" />
              <p className=''></p>
            </li>
            <li className='w-[170px]'>
              <img src={Rasm_13} alt="" />
              <p className=''></p>
            </li>
            <li className='w-[170px]'>
              <img src={Rasm_14} alt="" />
              <p className=''></p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Hover
