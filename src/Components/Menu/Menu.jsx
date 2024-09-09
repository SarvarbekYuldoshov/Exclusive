import React from 'react';
import "./Menu.css";
import Rasm_27 from "../../images/rasm27.png";
import Rasm_28 from "../../images/rasm28.png";
import Rasm_29 from "../../images/rasm29.png";
import Rasm_30 from "../../images/rasm30.png";
import Rasm_31 from "../../images/rasm31.png";
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();
  return (
    <div id='navbar3' className=''>
      <div className='mx-auto max-w-[1200px] p-[20px]'>
        <ul className=''>
          <li className='flex items-center gap-[10px]'>
            <img className='w-[20px] h-[40px]' src={Rasm_27} alt="" />
            <p className='w-[130px] h-[20px] font-poppins text-[16px] font-semibold leading-[20px] text-left text-[#DB4444]'>
              {t("menu.menu_text_1")}
            </p>
          </li>
          <h1 className='mt-[20px] w-[306px] h-[48px] font-inter text-[36px] font-semibold leading-[48px] tracking-[0.04em] text-left text-black'>
          {t("menu.menu_text_2")}
          </h1>
        </ul>

        <div className='mt-[40px] flex flex-wrap justify-between'>
          <div className=' w-[100%] lg:w-[48%] bg-black relative p-[20px] mb-[20px]'>
            <h1 className='text-[24px] font-semibold text-left text-[#FAFAFA]'>
            {t("menu.menu_text_3")}
            </h1>
            <p className='mt-[20px] text-[14px] font-normal text-left text-[#FAFAFA]'>
            {t("menu.menu_text_4")}
            </p>
            <button className='mt-[20px] text-[16px] font-medium text-left text-white'>
            {t("menu.menu_text_5")}
              <hr className='mt-[5px]' />
            </button>
            <img className='w-[280px]' src={Rasm_28} alt="" />
          </div>

          <div className='w-[100%] lg:w-[48%] bg-black menu-img relative p-[20px] mb-[20px] flex items-center justify-between'>
            <div>
              <h2 className='text-[24px] font-semibold text-left text-[#FAFAFA]'>
              {t("menu.menu_text_6")}
              </h2>
              <p className='mt-[20px] text-[14px] font-normal text-left text-[#FAFAFA]'>
              {t("menu.menu_text_7")}
              </p>
              <button className='mt-[20px] text-[16px] font-medium text-left text-white'>
              {t("menu.menu_text_8")}
                <hr className='mt-[5px]' />
              </button>
            </div>
            <img className='w-[180px]' src={Rasm_29} alt="" />
          </div>

          <div className='w-[100%] lg:w-[48%] bg-black p-[20px] mb-[20px] relative'>
            <img className='w-[150px] h-[150px] absolute top-[-20px] right-0' src={Rasm_30} alt="" />
            <h3 className='mt-[120px] text-[24px] font-semibold text-left text-[#FAFAFA]'>
            {t("menu.menu_text_9")}
            </h3>
            <p className='mt-[20px] text-[14px] font-normal text-left text-[#FAFAFA]'>
            {t("menu.menu_text_11")}
            </p>
            <button className='mt-[20px] text-[16px] font-medium text-left text-white'>
            {t("menu.menu_text_12")}
              <hr className='mt-[5px]' />
            </button>
          </div>

          <div className='w-[100%] lg:w-[48%] bg-black p-[20px] mb-[20px] relative'>
            <img className='w-[180px] h-[180px] absolute top-[-20px] right-0' src={Rasm_31} alt="" />
            <h4 className='mt-[120px] text-[24px] font-semibold text-left text-[#FAFAFA]'>
            {t("menu.menu_text_13")}
            </h4>
            <p className='mt-[20px] text-[14px] font-normal text-left text-[#FAFAFA]'>
            {t("menu.menu_text_14")}
            </p>
            <button className='mt-[20px] text-[16px] font-medium text-left text-white'>
            {t("menu.menu_text_15")}
              <hr className='mt-[5px]' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
