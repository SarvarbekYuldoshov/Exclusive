import React from 'react'; // No need for useState here since you're not using any state.
import "./Bollen.css";

const Bollen = () => {
  return (
    <>
      <div className='bollen'>
        <div className='max-w-[1200px] mx-auto p-[20px] flex flex-col md:flex-row gap-[20px] items-center'>
          <h1 className= 'bollen-text text-white text-center md:text-left text-lg md:text-2xl'>
            <q className=' text-[#47e228]'>Zamonbop</q> texnikalar bozori! Tanlangan elektronika
            textnikangizni uyingizgacha dastafka qilib beramiz mutlaqo bepulga!
          </h1>
          <li className='list-none'>
            <a className='text-[#50ec38] text-base md:text-lg' href="#sotibolish">
              <q>Buyurtma berish uchun?</q>
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Bollen;
