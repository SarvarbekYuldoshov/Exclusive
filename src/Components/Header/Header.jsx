import React from 'react';
import "./Header.css";
import Rasm_1 from "../../images/rasm1.png";
import Rasm_2 from "../../images/rasm2.png";
import Rasm_3 from "../../images/rasm3.png";
import Rasm_4 from "../../images/rasm4.png";
import Rasm15 from "../../images/rasm15.png";
import { Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import useSharedStore from '../String/Store';

const Header = () => {
  const { cards } = useSharedStore(); 

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">Home</a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">Contact</a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">About</a>
      ),
    },
    {
      key: '4',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">Sign in</a>
      ),
    },
  ];

  return (
    <div>
      <div className='p-[20px] my-10 items-center flex justify-between mx-auto max-w-[1200px] max-sm:relative'>
        <img src={Rasm_1} alt="Logo" />
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
        >
          <button>
            <img className='headerImg max-md:block w-10 max-sm:absolute bottom-2 right-[25px]' src={Rasm15} alt="Menu" />
          </button>
        </Dropdown>
        <ul className="flex gap-8 max-xl:gap-5 max-lg:gap-1 max-md:hidden">  
          <li><a className="text-base text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300 ease-in-out px-4 py-2 max-xl:text-[15px] max-lg:text-[13px]" href="#">Home</a></li>
          <li><a className="text-base text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300 ease-in-out px-4 py-2 max-xl:text-[15px] max-lg:text-[13px]" href="#">Contact</a></li>
          <li><a className="text-base text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300 ease-in-out px-4 py-2 max-xl:text-[15px] max-lg:text-[13px]" href="#">About</a></li>
          <li><a className="text-base text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300 ease-in-out px-4 py-2 max-xl:text-[15px] max-lg:text-[13px]" href="#">Sign in</a></li>
        </ul>
        <ul className='flex gap-5 max-sm:gap-5'>
          <div className='flex gap-20 border border-black max-lg:gap-2 max-sm:absolute top-[70px] right-[25px]'>
            <input type="text" placeholder='        What are you looking for?' className='hover:border-white max-lg:w-70 max-md:w-60 max-sm:w-[230px] text-[14px]' />
            <button><img className='w-6 h-15' src={Rasm_2} alt="Search" /></button>
          </div>
          <img className=' max-sm:absolute bottom-3 left-[150px]' src={Rasm_3} alt="User Icon" />
          <li className=''>
            <Link className='header-link-a' to="/shopping">
              <img className='max-sm:absolute bottom-3.5 left-[190px] w-7 h-7' src={Rasm_4} alt="Cart" />
              <span className=" text-[13px] rounded-[50%] w-[15px] h-[15px] bg-[red] cart-count items-center justify text-[#f0eeee] absolute top-[55px] right-[265px] max-sm:top-[15px] left-[205px]">{cards.length}</span> {/* Display cart count */}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
