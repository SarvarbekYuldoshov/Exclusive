import React from 'react'
import "./Hero.css"
import Rasm_5 from "../images/rasm5.png"
import Rasm_6 from "../images/rasm6.png"
import Rasm_7 from "../images/rasm7.png"
const Hero = () => {
  return (
    <div className=''>
      <div className=' bg-black text-center  flex mx-auto max-w-[1200px]'>
        <ul className='ml-10'>
            <li className='flex items-center gap-5 mt-[30px]' >
                <img className='w-[40] h-[40]' src={Rasm_5} alt="" />
                <p className='font-poppins text-[16px] font-normal leading-[24px] text-center text-[#FAFAFA] w-[126px] h-[20px]'>iPhone 14 Series</p>
            </li>
            <h1 className='mt-[20px] font-inter text-[48px] font-semibold leading-[60px] tracking-[0.04em] text-left text-[#FAFAFA] w-[294px] h-[120px]'>Up to 10% off Voucher</h1>
            <button className='items-center  flex w-[150px] h-[40px] gap-5 mt-[20px] border border-white hover:scale-110 transition-transform duration-1000'>
                <p className='font-poppins text-[16px] font-medium leading-[24px] text-center text-white w-[81px] h-[24px]'>Shop Now</p>
                <img className='w-[24px] h-[24px]' src={Rasm_6} alt="" />
            </button>
        </ul>
        <img className='ml-[100px] max-lg:ml-[-40px]' src={Rasm_7} alt="" />
      </div>
    </div>
  )
}

export default Hero 