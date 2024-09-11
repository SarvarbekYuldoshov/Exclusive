import React from 'react';
import Rasm_36 from "../../images/rasm36.png";
import Rasm_37 from "../../images/rasm37.png";
import Rasm_38 from "../../images/rasm38.png";
import Rasm_39 from "../../images/rasm39.png";
import Rasm_40 from "../../images/rasm40.png";
import Rasm_41 from "../../images/rasm41.png";
import Rasm_42 from "../../images/rasm42.png";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div id='navbar3' className='bg-black p-5'>
      <div className='max-w-[1200px] mx-auto flex flex-wrap gap-4 justify-between items-start'>
        
        <div>
          <ul>
            <li className='mt-5'>
              <a className='text-2xl font-bold text-[#FAFAFA]' href="#main">
                Exclusive
              </a>
            </li>
            <li className='mt-5'>
              <a className='text-xl font-medium text-[#FAFAFA]' href="#acount">
                Subscribe
              </a>
            </li>
             <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="#yaxshi">
                Shop
              </a>
            </li>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="#main">
                Wishlist
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className='mt-5'>
              <a className='text-xl font-medium text-[#FAFAFA]' href="#main">
                Support
              </a>
            </li>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="#acount">
                sarvarbekyuldoshov85@gmail.com
              </a>
            </li>
            <p className='mt-3 text-base text-[#FAFAFA]'>
              +998 94 239 04 26
            </p>
          </ul>
        </div>

        <div>
          <ul>
            <li className='mt-5'>
              <a className='text-xl font-medium text-[#FAFAFA]' href="#main">
                Account
              </a>
            </li>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="#acount">
                My Account
              </a>
            </li>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="#yaxshi">
                Login / Register
              </a>
            </li>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="#yaxshi">
                Cart
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='mt-5 text-center'>
              <a className='text-xl font-medium text-[#FAFAFA]' href="#main">
                Download App
              </a>
            </li>
            <li className='mt-3 text-center'>
              <a className='text-base text-[#FAFAFA]' href="#yaxshi">
                Save $3 with App New User Only
              </a>
            </li>
            <ul className='flex justify-center gap-5 mt-5'>
              <li>
                <a href="#acount">
                <img className='w-20 h-20' src={Rasm_36} alt="App Icon 1" />
                </a>
              </li>
              <ul>
              <li>
              <a href="#acount">
                <img className='w-[110px] h-[40px]' src={Rasm_37} alt="App Icon 2" />
                </a>
              </li>
              <li>

              <a href="#yaxshi">
                <img className='w-[110px] h-[40px]' src={Rasm_38} alt="App Icon 3" />
              </a>
              </li>
              </ul> 
            </ul>
            <ul className='flex justify-center gap-5 mt-5'>
              <li>
              <a href="#yaxshi">
                <img src={Rasm_39} alt="Social Icon 1" />
                </a>
              </li>
              <a href="#main">
              <li>
                <img src={Rasm_40} alt="Social Icon 2" />
              </li>
              </a>
              <a href="#yaxshi">
              <li>
                <img src={Rasm_41} alt="Social Icon 3" />
              </li>
              </a>
              <a href="#acount">
              <li>
                <img src={Rasm_42} alt="Social Icon 4" />
              </li>
              </a>
            </ul>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
