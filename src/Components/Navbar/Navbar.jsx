import React, { useState } from 'react';
import Data from '../Data/Data';
import useSharedStore from '../String/Store';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cards, setCards } = useSharedStore();
  const [error, setError] = useState('');
  const [adding, setAdding] = useState({})
  const handleAdd = (item) => {
    const exists = cards.find(card => card.id === item.id);
    if (exists) {
      setError('Siz bu mahsulotni olgansiz'); 
    } else {
      setCards([...cards, item]);
      setError('');
    }
    setAdding((add)=>({...add, [item.name]:true}))
  };

  return (
    <div>
      <div className='max-w-[1200px] mx-auto p-[20px]'>
        <div className='flex flex-wrap gap-[50px]'>
          {Data &&
            Data.map((item, index) => (
              <div
                key={index}
                className='w-[250px] h-[300px] p-4 bg-white shadow-md rounded-lg relative max-sm:w-[340px] group'
              >
             <Link to={`/korzinka/${item.id}`}>
                  <img src={item.img1}alt={item.name}className='w-[140px] h-[150px] ml-[30px] max-sm:ml-[70px]'/>
                      <img src={item.img3}alt={item.name}className='w-[30px] h-[30px] absolute right-2 top-1'/>
                      <img src={item.img4}alt={item.name}className='w-[30px] h-[30px] absolute right-2 top-10'/>
                      <h1 className='text-xl font-bold mt-2 max-sm:ml-[40px]'>{item.name}</h1>
                    <ul className='flex h-[40px] items-center gap-[5px] max-sm:ml-[20px]'>
                      <h2 className='text-lg text-gray-600'>{item.price}</h2>
                      <img src={item.img2}alt={item.name}className='w-[140px] h-[20px]'/>
                      <p className=''>{item.text}</p>
                    </ul>
             </Link>
             <button onClick={() => handleAdd(item)} className='mt-[20px] w-[250px] h-[60px] top-[220px] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity max-sm:w-[338px]'>
                          {adding[item.name]?"Qushilgan":"Qushish"}
            </button>
              </div>
            ))}
        </div>
        {error && <p className='text-red-500 mt-4'>{error}</p>}
      </div>
    </div>
  );
};

export default Navbar;

