import React from 'react'
import Rasm_8 from "../images/rasm8.png"
import Rasm_16 from "../images/rasm16.png"
import Rasm_17 from "../images/rasm17.png"
import Rasm_18 from "../images/rasm18.png"
const Navbar = () => {
  return (
    <div className=''>
      <div className='mx-auto max-w-[1200px] p-[20px]'>
           <ul className='flex items-center gap-10 mt-[40px]'>
              <img className='' src={Rasm_8} alt="" />
                <p className='font-poppins text-[16px] font-semibold leading-[20px] text-left text-[#DB4444] w-[150px] h-[20px]'>Our Products</p>
           </ul>
           <div className=''>
            <ul className=''>
              <li className='mt-20 bg-[#F5F5F5] justify-center w-[270px] h-[250px]'>
                <img className='w-[115px] h-[180px] mt-10' src={Rasm_16} alt=" " />
              </li>
              <li>
                <img className='w-[24px] h-[24px]' src={Rasm_17} alt="" />
                <img className='w-[34px] h-[34px]' src={Rasm_18} alt="" />
              </li>
            </ul>
           </div>
      </div>
    </div>
  )
}

export default Navbar
