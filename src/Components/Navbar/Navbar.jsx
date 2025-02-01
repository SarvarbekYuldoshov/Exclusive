import React, { useState } from 'react';
import Data from '../Data/Data';
import useSharedStore from '../String/Store';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { cards, setCards } = useSharedStore();
  const [adding, setAdding] = useState({});

  const handleAdd = (item) => {
    const exists = cards.find(card => card.id === item.id);
    if (!exists) {
      setCards([...cards, item]);
      setAdding((add) => ({ ...add, [item.id]: true })); 
    } else {
      setAdding((add) => ({ ...add, [item.id]: true }));
    }
  };

  const navigate = useNavigate();

// ------------------------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <div className='max-w-[1200px] mx-auto p-[20px]' id='main'>
        <div className='flex flex-wrap gap-[50px]'>
          {Data &&
            Data.map((item, index) => (
              <div
                key={index}
                className='w-[250px] h-[300px] p-4 bg-white shadow-md rounded-lg relative max-sm:w-[340px] group transform transition-transform duration-1000 ease-in-out hover:scale-[0.98]'
              >
                <div onClick={() => {
                  navigate(`/korzinka/${item.id}`);
                  window.scroll(0, 0);
                }}>
                  <ul className=''>
                    <img src={item.img1} alt={item.name} className='w-[140px] h-[150px] ml-[30px] max-sm:ml-[70px]'/>
                    <h1 className='text-xl font-bold mt-2 max-sm:ml-[40px]'>{item.name}</h1>
                    <ul className='flex h-[40px] items-center gap-[5px] max-sm:ml-[20px]'>
                      <h2 className='text-lg text-gray-600'>{item.price}</h2>
                      <img src={item.img2} alt={item.name} className='w-[140px] h-[20px]'/>
                      <p className=''>{item.text}</p>
                    </ul>
                  </ul>
                </div>

                <button 
                  onClick={() => handleAdd(item)} 
                  className={`mt-[40px] w-[250px] h-[40px] top-[220px] py-2 px-4 rounded-md absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity max-sm:w-[338px] 
                  ${adding[item.id] 
                    ? 'bg-blue-500 text-white cursor-not-allowed' 
                    : 'bg-black text-white hover:bg-black opacity-0 group-hover:opacity-100'}`}
                  disabled={adding[item.id]} 
                >
                  {adding[item.id] ? 'Qushilgan' : 'Qushish'}
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
