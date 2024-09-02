import React from 'react';
import "./Hero.css";
import Rasm_5 from "../images/rasm5.png";
import Rasm_6 from "../images/rasm6.png";
import Rasm_7 from "../images/rasm7.png";

const Hero = () => {
  return (
    <div className='bg-black text-center'>
      <div className=' mt-20 flex flex-col md:flex-row items-center mx-auto max-w-[1200px] p-6 md:p-10'>
        <ul className='md:mr-10 text-white'>
          <li className='flex items-center gap-5'>
            <img className='w-[40px] h-[45px] max-sm:ml-[-10px]' src={Rasm_5} alt="iPhone 14 Series" />
            <p className='font-poppins text-[16px] font-normal leading-[24px] max-sm:text-[20px]'>iPhone 14 Series</p>
          </li>
          <h1 className='mt-[30px] font-inter w-[320px] h-[140px]  text-[36px] md:text-[48px]  font-semibold leading-[40px] md:leading-[60px] tracking-wide text-left max-sm:text-[50px] max-w-[140px] items-center leading-[70px]'>
            Up to 10% off Voucher
           </h1>
          <button className='flex items-center mt-40  w-[150px] h-[40px] gap-5  border border-white hover:scale-105 transition-transform duration-300 max-sm:ml-5'>
            <p className=' ml-1 font-poppins text-[16px] font-medium leading-[24px] max-sm:ml-[10px]'>Shop Now</p>
            <img className='w-[24px] h-[24px] ' src={Rasm_6} alt="Shop Now" />
          </button>
        </ul>
        <img className='mt-6 md:mt-0 max-w-full' src={Rasm_7} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
