import React from 'react'
import "./Header.css"
import Rasm_1 from "../images/rasm1.png"
import Rasm_2 from "../images/rasm2.png"
import Rasm_3 from "../images/rasm3.png"
import Rasm_4 from "../images/rasm4.png"
const Header = () => {
  return (
    <div>
      <div className='my-10 flex justify-between mx-auto max-w-[1200px]'>
      <img className="" src={Rasm_1} alt="" />
        <ul className='flex gap-20 '>
            <li><a className='text-[16px] text-[#000000] text-center' href="#">Home</a></li>
            <li><a className='text-[16px] text-[#000000] text-center' href="#">Contact</a></li>
            <li><a className='text-[16px] text-[#000000] text-center' href="#">About</a></li>
            <li><a className='text-[16px] text-[#000000] text-center' href="#">Sign in</a></li>
        </ul>
        <ul className='flex gap-5'>
            <div className='flex gap-20 border border-black'>
                <input type="text" placeholder='What are you looking for?' className='hover:border-white' />
                <button className=''><img src={Rasm_2} alt="" /></button>
            </div>
            <img src={Rasm_3} alt="" />
            <img src={Rasm_4} alt="" />
        </ul>
      </div>
    </div>
  )
}

export default Header
