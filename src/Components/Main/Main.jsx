import React from 'react';
import Rasm_26 from '../images/rasm26.png';

const Main = () => {
  return (
    <div className="bg-black py-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center px-5 md:px-10">
        <div className="md:w-1/2">
          <p className="text-[#00FF66] font-poppins font-semibold text-sm md:text-base mb-4">
            Categories
          </p>
          <h1 className="text-[#FAFAFA] font-inter font-semibold text-3xl md:text-5xl leading-tight md:leading-snug mb-6">
            Enhance Your Music Experience
          </h1>
          <ul className="flex gap-4 mb-8">
            {[
              { time: '05', label: 'Hours' },
              { time: '59', label: 'Minutes' },
              { time: '35', label: 'Seconds' },
              { time: '23', label: 'Days' },
            ].map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-full"
              >
                <p className="font-poppins font-semibold text-lg text-black">
                  {item.time}
                </p>
                <span className="font-poppins text-xs text-black">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
          <button className="bg-[#00FF66] hover:bg-[#00CC55] text-[#FAFAFA] font-poppins font-medium text-base py-3 px-6 rounded transition duration-300">
            Buy Now!
          </button>
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
            src={Rasm_26}
            alt="Music Experience"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
