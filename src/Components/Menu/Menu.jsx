import React from 'react';
import "./Menu.css";
import Rasm_27 from "../images/rasm27.png";
import Rasm_29 from "../images/rasm29.png"
import Rasm_30 from "../images/rasm30.png"
import Rasm_31 from "../images/rasm31.png"
const Menu = () => {
  return (
    <div className=''>
      <div className='mx-auto max-w-[1200px] p-[20px]'>
        <ul className=''>
          <li className='flex items-center gap-[10px]'>
            <img className='w-[20px] h-[40px]' src={Rasm_27} alt="" />
            <p className='w-[74px] h-[20px] font-poppins text-[16px] font-semibold leading-[20px] text-left text-[#DB4444]'>Featured</p>
          </li>
          <h1 className='mt-[20px] w-[216px] h-[48px] font-inter text-[36px] font-semibold leading-[48px] tracking-[0.04em] text-left text-black'>New Arrival</h1>
        </ul>
        <div className=' mt-[40px] flex space-x-[20px] relative'>  
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
          <div className='w-[570px] h-[284px] bg-black menu-img flex relative'>
            <div className=''>
              <h2 className='w-[255px] h-[24px] font-inter text-[24px] font-semibold leading-[24px] tracking-[0.03em] text-left text-[#FAFAFA] absolute left-5 bottom-40'>Women’s Collections</h2>
              <p className='w-[255px] h-[42px] font-poppins text-[14px] font-normal leading-[21px] text-left text-[#FAFAFA] absolute left-5 bottom-20'>Featured woman collections that give you another vibe.</p>
               <button className='w-[81px] h-[24px] font-poppins text-[16px] font-medium leading-[24px] text-left text-white absolute left-5 bottom-10'>
               Shop Now
                <hr />
              </button>
            </div>
              <img className='ml-[180px]' src={Rasm_29} alt="" />
          </div>
          <div className=''>
            <div className='w-[300px] h-[212px] bg-black absolute top-[300px] left-[530px] '>
              <img className='w-[150px] h-[150px] absolute top-10 right-0' src={Rasm_30} alt="" />
              <h3 className='w-[114px] h-[24px] font-inter text-[24px] font-semibold leading-[24px] tracking-[0.03em] text-left text-[#FAFAFA] absolute bottom-[80px] left-5'>Speakers</h3>
              <p className='w-[191px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-left text-[#FAFAFA] absolute bottom-[50px] left-5'>Amazon wireless speakers</p>
              <button className='w-[81px] h-[24px] font-poppins text-[16px] font-medium leading-[24px] text-left text-[#FFFFFF] absolute bottom-[20px] left-5'>
              Shop Now
                <hr />
              </button>
            </div>
            <div className='w-[300px] h-[212px] bg-black absolute top-[300px] left-[845px]'>
                <img className='w-[180px] h-[180px] absolute top-4 right-0' src={Rasm_31} alt="" />
                <h4 className='w-[114px] h-[24px] font-inter text-[24px] font-semibold leading-[24px] tracking-[0.03em] text-left text-[#FAFAFA] absolute bottom-[80px] left-5'>Perfume</h4>
                <p className='w-[191px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-left text-[#FAFAFA] absolute bottom-[50px] left-5'>GUCCI INTENSE OUD EDP</p>
                <button className='w-[81px] h-[24px] font-poppins text-[16px] font-medium leading-[24px] text-left text-[#FFFFFF]  absolute bottom-[20px] left-5'> 
                Shop Now
                  <hr />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;

