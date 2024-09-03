import React from 'react'
import Rasm_35 from "../images/rasm35.png"
const Footer = () => {
  return (
    <div className=''>
      <div className='mx-auto mt-[50px] max-w-[1200px] p-[20px] bg-black relative flex'>
        <div className=''>
            <li className='mt-[20px]'><a className=' w-[118px] h-[24px] font-inter text-[24px] font-bold leading-[24px] tracking-[0.03em] text-left text-[#FAFAFA]' href="">Exclusive</a>
            </li>
            <li className='mt-[20px]'><a className='w-[101px] h-[28px] font-poppins text-[20px] font-medium leading-[28px] text-left text-[#FAFAFA]' href="">Subscribe</a>
            </li>
            <p className='mt-[10px] ml-[24px] w-[206px] h-[24px] font-poppins text-[16px] font-normal leading-[24px] text-left text-[#FAFAFA]'>Get 10% off your first order</p>
            <input className='w-[217px] h-[48px] ml-[24px] mt-[20px] bg-transparent border border-white' type="text" placeholder='    Enter your email'/>
            <img className='absolute left-[230px] bottom-[33px] text-[white]' src={Rasm_35} alt="" />
        </div>
        <div className=''>
            <li className='mt-[20px]'>
                <a className='w-[81px] h-[28px] font-poppins text-[20px] font-medium leading-[28px] text-left text-[#FAFAFA]' href="">Support</a>
            </li>
               <p className='mt-[20px] ml-[24px] w-[175px] h-12 font-poppins text-[16px] font-normal leading-6 text-left text-[#FAFAFA]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <li className='mt-[10px] ml-[1px]'>
               <a className='w-[100px] h-[30px] font-poppins text-[16px] font-normal leading-[24px] text-left text-[#FAFAFA]' href="">sarvarbekyuldoshov85@gmail.com</a>
            </li>
            <p className='mt-[10px] ml-[20px] w-[165px] h-[24px] font-poppins text-[16px] font-normal leading-[24px] text-left text-[#FAFAFA]'>+998 94 239 04 26</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
