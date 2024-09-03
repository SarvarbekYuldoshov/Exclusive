import React from 'react';
import "./Menu.css";
import Rasm_27 from "../images/rasm27.png";
import Rasm_29 from "../images/rasm29.png";
import Rasm_30 from "../images/rasm30.png";
import Rasm_31 from "../images/rasm31.png";

const Menu = () => {
  return (
    <div className=''>
      <div className='mx-auto max-w-[1200px] p-[20px]'>
        <ul className=''>
          <li className='flex items-center gap-[10px]'>
            <img className='w-[20px] h-[40px]' src={Rasm_27} alt="" />
            <p className='w-[74px] h-[20px] font-poppins text-[16px] font-semibold leading-[20px] text-left text-[#DB4444]'>
              Featured
            </p>
          </li>
          <h1 className='mt-[20px] w-[216px] h-[48px] font-inter text-[36px] font-semibold leading-[48px] tracking-[0.04em] text-left text-black'>
            New Arrival
          </h1>
        </ul>

        <div className='mt-[40px] flex flex-wrap justify-between'>
          <div className='w-[100%] lg:w-[48%] bg-black menu relative p-[20px] mb-[20px]'>
            <h1 className='text-[24px] font-semibold text-left text-[#FAFAFA]'>
              PlayStation 5
            </h1>
            <p className='mt-[20px] text-[14px] font-normal text-left text-[#FAFAFA]'>
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className='mt-[20px] text-[16px] font-medium text-left text-white'>
              Shop Now
              <hr className='mt-[5px]' />
            </button>
          </div>

          <div className='w-[100%] lg:w-[48%] bg-black menu-img relative p-[20px] mb-[20px] flex items-center justify-between'>
            <div>
              <h2 className='text-[24px] font-semibold text-left text-[#FAFAFA]'>
                Women’s Collections
              </h2>
              <p className='mt-[20px] text-[14px] font-normal text-left text-[#FAFAFA]'>
                Featured woman collections that give you another vibe.
              </p>
              <button className='mt-[20px] text-[16px] font-medium text-left text-white'>
                Shop Now
                <hr className='mt-[5px]' />
              </button>
            </div>
            <img className='w-[180px]' src={Rasm_29} alt="" />
          </div>

          <div className='w-[100%] lg:w-[48%] bg-black p-[20px] mb-[20px] relative'>
            <img className='w-[150px] h-[150px] absolute top-[-20px] right-0' src={Rasm_30} alt="" />
            <h3 className='mt-[120px] text-[24px] font-semibold text-left text-[#FAFAFA]'>
              Speakers
            </h3>
            <p className='mt-[20px] text-[14px] font-normal text-left text-[#FAFAFA]'>
              Amazon wireless speakers
            </p>
            <button className='mt-[20px] text-[16px] font-medium text-left text-white'>
              Shop Now
              <hr className='mt-[5px]' />
            </button>
          </div>

          <div className='w-[100%] lg:w-[48%] bg-black p-[20px] mb-[20px] relative'>
            <img className='w-[180px] h-[180px] absolute top-[-20px] right-0' src={Rasm_31} alt="" />
            <h4 className='mt-[120px] text-[24px] font-semibold text-left text-[#FAFAFA]'>
              Perfume
            </h4>
            <p className='mt-[20px] text-[14px] font-normal text-left text-[#FAFAFA]'>
              GUCCI INTENSE OUD EDP
            </p>
            <button className='mt-[20px] text-[16px] font-medium text-left text-white'>
              Shop Now
              <hr className='mt-[5px]' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
