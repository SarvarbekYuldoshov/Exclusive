import React from 'react';
import "./Menu.css";
import Rasm_27 from "../images/rasm27.png";
import Rasm_29 from "../images/rasm29.png"
const Menu = () => {
  return (
    <div className=''>
      <div className='mx-auto max-w-[1200px] p-[20px]'>
        <ul className='flex'>
          <li className='flex items-center gap-[10px]'>
            <img className='w-[20px] h-[40px]' src={Rasm_27} alt="" />
            <p className='w-[74px] h-[20px] font-poppins text-[16px] font-semibold leading-[20px] text-left text-[#DB4444]'>Featured</p>
          </li>
          <h1 className='mt-[20px] w-[216px] h-[48px] font-inter text-[36px] font-semibold leading-[48px] tracking-[0.04em] text-left text-black'>New Arrival</h1>
        </ul>
        <div className='flex space-x-[20px]'>  
          <div className='w-[550px] h-[600px] bg-black menu relative'>
            <h1 className='w-[162px] h-[24px] font-inter text-[24px] font-semibold leading-[24px] tracking-[0.03em] text-left text-[#FAFAFA] absolute left-5 bottom-40'>
              PlayStation 5
            </h1>
            <p className='w-[242px] h-[42px] font-poppins text-[14px] font-normal leading-[21px] text-left text-[#FAFAFA] absolute left-5 bottom-20'>
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className='w-[81px] h-[24px] font-poppins text-[16px] font-medium leading-[24px] text-left text-white absolute left-5 bottom-10'>
              Shop Now
              <hr className='' />
            </button>
          </div>
          <div className='w-[570px] h-[284px] bg-black menu-img flex'>
          <div className='w-[550px] h-[600px] bg-black menu relative'>
            <h1 className='w-[162px] h-[24px] font-inter text-[24px] font-semibold leading-[24px] tracking-[0.03em] text-left text-[#FAFAFA] absolute left-5 bottom-40'>
            Women’s Collections
            </h1>
            <p className='w-[242px] h-[42px] font-poppins text-[14px] font-normal leading-[21px] text-left text-[#FAFAFA] absolute left-5 bottom-20'>
            Featured woman collections that give you another vibe.
            </p>
            <button className='w-[81px] h-[24px] font-poppins text-[16px] font-medium leading-[24px] text-left text-white absolute left-5 bottom-10'>
              Shop Now
              <hr className='' />
            </button>
          </div>
              <img className='ml-[150px]' src={Rasm_29} alt="" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;

