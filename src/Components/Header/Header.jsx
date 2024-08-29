import React from 'react'
import "./Header.css"
import Rasm_1 from "../images/rasm1.png"
import Rasm_2 from "../images/rasm2.png"
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
        <ul className='flex'>
            <button>
                <input type="text" placeholder='What are you looking for?' />
                <img src={Rasm_2} alt="" />
            </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
