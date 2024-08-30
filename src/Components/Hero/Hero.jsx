import React from 'react'
import "./Hero.css"
import Rasm_5 from "../images/rasm5.png"
import Rasm_6 from "../images/rasm6.png"
import Rasm_7 from "../images/rasm7.png"
const Hero = () => {
  return (
    <div className='header'>
      <div className='flex mx-auto max-w-[1200px] bg-black'>
        <ul className=''>
            <li className='flex items-center gap-10'>
                <img src={Rasm_5} alt="" />
                <p className='text-white'>iPhone 14 Series</p>
            </li>
            <h1 className='text-white'>Up to 10% off Voucher</h1>
            <button className='flex'>
                <p className='text-white'>Shop Now</p>
                <img src={Rasm_6} alt="" />
            </button>
        </ul>
        <img src={Rasm_7} alt="" />
      </div>
    </div>
  )
}

export default Hero
