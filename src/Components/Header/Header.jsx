import React from 'react';
import "./Header.css";
import Rasm_1 from "../images/rasm1.png";
import Rasm_2 from "../images/rasm2.png";
import Rasm_3 from "../images/rasm3.png";
import Rasm_4 from "../images/rasm4.png";

const Header = () => {
  return (
    <div className="my-10 mx-auto max-w-[1200px]">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <img className="w-24 h-auto" src={Rasm_1} alt="Logo" />
        
        <ul className="flex flex-wrap gap-4 md:gap-8 mt-4 md:mt-0">
          <li><a className="text-base text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg" href="#">Home</a></li>
          <li><a className="text-base text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg" href="#">Contact</a></li>
          <li><a className="text-base text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg" href="#">About</a></li>
          <li><a className="text-base text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg" href="#">Sign in</a></li>
        </ul>       
        <ul className="flex flex-col sm:flex-row gap-4 md:gap-5 mt-4 md:mt-0">
          <div className="flex items-center gap-2 border border-black rounded-md p-2">
            <input type="text" placeholder="What are you looking for?" className="w-full focus:outline-none px-2" />
            <button className="p-2"><img src={Rasm_2} alt="Search" /></button>
          </div>
          <img className="w-8 h-auto" src={Rasm_3} alt="Icon 1" />
          <img className="w-8 h-auto" src={Rasm_4} alt="Icon 2" />
        </ul>
      </div>
    </div>
  );
}

export default Header;

