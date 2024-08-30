import React from 'react'
import Rasm_8 from "../images/rasm8.png"
const Navbar = () => {
  return (
    <div className=''>
      <div className='mx-auto max-w-[1200px]'>
           <ul className='flex items-center gap-10 mt-[40px]'>
              <img className='' src={Rasm_8} alt="" />
                <p className='font-poppins text-[16px] font-semibold leading-[20px] text-left text-[#DB4444] w-[150px] h-[20px]'>Our Products</p>
           </ul>
      </div>
    </div>
  )
}

export default Navbar
