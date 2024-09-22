import React from 'react';
import "./Header.css";
import Rasm_1 from "../../images/rasm1.png";
import Rasm_4 from "../../images/rasm4.png";
import Rasm15 from "../../images/rasm15.png";
import { Dropdown } from 'antd';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useSharedStore from '../String/Store';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { cards } = useSharedStore();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const navigate = useNavigate();

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#home">{t("header.header_text")}</a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#home1">{t("header.header_text_1")}</a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#home2">{t("header.header_text_2")}</a>
      ),
    },
  ];

  return (
    <>
      <div className='header'>
        <div className='p-[20px] items-center flex justify-between mx-auto max-w-[1200px] max-sm:relative'>
          <NavLink to="/"><img src={Rasm_1} alt="" /></NavLink>
          <Dropdown
            className='w-[200px]'
            menu={{ items }}
            placement="bottom"
          >
            <button>
              <img className='headerImg max-md:block w-10 max-sm:absolute bottom-2 right-[25px] top-[20px]' src={Rasm15} alt="Menu" />
            </button>
          </Dropdown>

          <ul className="flex gap-8 max-xl:gap-5 max-lg:gap-1 max-md:hidden">
            <li>
              <a className="text-base text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300 ease-in-out px-4 py-2 max-xl:text-[15px] max-lg:text-[13px]" href="#sotib">{t("header.header_text")}</a></li>
            <li>
              <a className="text-base text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300 ease-in-out px-4 py-2 max-xl:text-[15px] max-lg:text-[13px]" href="#acount">{t("header.header_text_1")}</a></li>
            <li>
              <a className="text-base text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300 ease-in-out px-4 py-2 max-xl:text-[15px] max-lg:text-[13px]" href="#navbar3">{t("header.header_text_2")}</a></li>
            <li className="header-item-a">
              <select className="select" onChange={handleLanguageChange} value={i18n.language}>
                <option value="uz">Uzbek</option>
                <option value="en">English</option>
              </select>
            </li>
          </ul>

          <ul className='flex gap-5 max-sm:gap-5 relative'>
            <li className='cart-wrapper'>
              <Link className='header-link-a' to="/shopping">
                <img className='cart-icon max-sm:w-7 max-sm:h-7' src={Rasm_4} alt="Cart" />
              </Link>
              <div onClick={() => {
                navigate(`/shopping`);
                window.scroll(0, 0);
              }}></div>
              <span className="cart-badge">
                {cards.length}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
