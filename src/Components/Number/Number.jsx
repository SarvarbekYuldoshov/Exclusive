import React from 'react';
import Rasm_27 from "../../images/rasm27.png";
import Rasm_32 from "../../images/rasm32.png";
import Rasm_33 from "../../images/rasm33.png";
import Rasm_34 from "../../images/rasm34.png";

const Number = () => {
  return (
    <div className=''>
      <div className='mx-auto max-w-[1200px] p-[20px]'>
        <ul className=''>
          <li className='flex items-center gap-[10px]'>
            <img className='w-[20px] h-[40px]' src={Rasm_27} alt="" />
            <p className='w-[74px] h-[20px] font-poppins text-[16px] font-semibold leading-[20px] text-left text-[#DB4444]'>
              Services
            </p>
          </li>
          <h1 className='mt-[20px] text-center w-full font-inter text-[36px] font-semibold leading-[48px] tracking-[0.04em] text-black'>
            Our services
          </h1>
        </ul>
        <div className='flex flex-wrap gap-[100px] mt-[100px] justify-center'>
          <div className='flex flex-col items-center'>
            <img className='mb-[10px]' src={Rasm_32} alt="" />
            <h5 className='mt-[10px] w-[242px] h-[40px] font-poppins text-[20px] font-semibold leading-[28px] text-center text-black'>
              FREE AND FAST DELIVERY
            </h5>
            <p className='mt-[10px] w-[240px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-center text-black'>
              Free delivery for all orders over $140
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <img className='mb-[10px]' src={Rasm_33} alt="" />
            <h5 className=' mt-[10px] w-[242px] h-[30px] font-poppins text-[20px] font-semibold leading-[28px] text-center text-black'>
              24/7 CUSTOMER SERVICE
            </h5>
            <p className='w-[220px] mt-[10px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-center text-black'>
              Friendly 24/7 customer support
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <img className='mb-[10px]' src={Rasm_34} alt="" />
            <h5 className=' mt-[10px] w-[252px] h-[40px] font-poppins text-[20px] font-semibold leading-[28px] text-center text-black'>
              MONEY BACK GUARANTEE
            </h5>
            <p className=' mt-[10px] w-[220px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-center text-black'>
              We return money within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
