import React from 'react';
import "./Hero.css";
import Rasm_5 from "../images/rasm5.png";
import Rasm_6 from "../images/rasm6.png";
import Rasm_7 from "../images/rasm7.png";

const Hero = () => {
  return (
    <div className='bg-black text-center'>
      <div className='flex flex-col md:flex-row items-center mx-auto max-w-[1200px] p-6 md:p-10'>
        <ul className='md:mr-10 text-white'>
          <li className='flex items-center gap-3'>
            <img className='w-[40px] h-[40px]' src={Rasm_5} alt="iPhone 14 Series" />
            <p className='font-poppins text-[16px] font-normal leading-[24px]'>iPhone 14 Series</p>
          </li>
          <h1 className='mt-[20px] font-inter text-[36px] md:text-[48px] font-semibold leading-[40px] md:leading-[60px] tracking-wide text-left'>
            Up to 10% off Voucher
           </h1>
          <button className='flex items-center w-[150px] h-[40px] gap-2 mt-[20px] border border-white hover:scale-105 transition-transform duration-300'>
            <p className='font-poppins text-[16px] font-medium leading-[24px]'>Shop Now</p>
            <img className='w-[24px] h-[24px] gap' src={Rasm_6} alt="Shop Now" />
          </button>
        </ul>
        <img className='mt-6 md:mt-0 max-w-full' src={Rasm_7} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
