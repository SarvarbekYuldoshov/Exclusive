import React from 'react';
import Rasm_36 from "../images/rasm36.png";
import Rasm_37 from "../images/rasm37.png";
import Rasm_38 from "../images/rasm38.png";
import Rasm_39 from "../images/rasm39.png";
import Rasm_40 from "../images/rasm40.png";
import Rasm_41 from "../images/rasm41.png";
import Rasm_42 from "../images/rasm42.png";

const Footer = () => {
  return (
    <div className='bg-black p-5'>
      <div className='max-w-[1200px] mx-auto flex flex-wrap gap-4 justify-between items-start'>
        
        <div>
          <ul>
            <li className='mt-5'>
              <a className='text-2xl font-bold text-[#FAFAFA]' href="">
                Exclusive
              </a>
            </li>
            <li className='mt-5'>
              <a className='text-xl font-medium text-[#FAFAFA]' href="">
                Subscribe
              </a>
            </li>
            <p className='mt-3 text-base text-[#FAFAFA]'>
              Get 10% off your first order
            </p>
            <input
              className='w-full mt-5 p-2 bg-transparent border border-white placeholder-white text-white'
              type="text"
              placeholder='Enter your email'
            />
          </ul>
        </div>

        <div>
          <ul>
            <li className='mt-5'>
              <a className='text-xl font-medium text-[#FAFAFA]' href="">
                Support
              </a>
            </li>
            <p className='mt-3 text-base text-[#FAFAFA]'>
              111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="">
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
              <a className='text-xl font-medium text-[#FAFAFA]' href="">
                Account
              </a>
            </li>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="">
                My Account
              </a>
            </li>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="">
                Login / Register
              </a>
            </li>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="">
                Cart
              </a>
            </li>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="">
                Wishlist
              </a>
            </li>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="">
                Shop
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className='mt-5'>
              <a className='text-xl font-medium text-[#FAFAFA]' href="">
                Quick Links
              </a>
            </li>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="">
                Privacy Policy
              </a>
            </li>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="">
                Terms Of Use
              </a>
            </li>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="">
                FAQ
              </a>
            </li>
            <li className='mt-3'>
              <a className='text-base text-[#FAFAFA]' href="">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className='mt-5 text-center'>
              <a className='text-xl font-medium text-[#FAFAFA]' href="">
                Download App
              </a>
            </li>
            <li className='mt-3 text-center'>
              <a className='text-base text-[#FAFAFA]' href="">
                Save $3 with App New User Only
              </a>
            </li>
            <ul className='flex justify-center gap-5 mt-5'>
              <li>
                <img className='w-20 h-20' src={Rasm_36} alt="App Icon 1" />
              </li>
              <ul>
              <li>
                <img className='w-[110px] h-[40px]' src={Rasm_37} alt="App Icon 2" />
              </li>
              <li>
                <img className='w-[110px] h-[40px]' src={Rasm_38} alt="App Icon 3" />
              </li>
              </ul> 
            </ul>
            <ul className='flex justify-center gap-5 mt-5'>
              <li>
                <img src={Rasm_39} alt="Social Icon 1" />
              </li>
              <li>
                <img src={Rasm_40} alt="Social Icon 2" />
              </li>
              <li>
                <img src={Rasm_41} alt="Social Icon 3" />
              </li>
              <li>
                <img src={Rasm_42} alt="Social Icon 4" />
              </li>
            </ul>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
