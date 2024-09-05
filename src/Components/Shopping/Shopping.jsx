import React, { useState } from 'react';
import useSharedStore from '../String/Store';

const Shopping = () => {
  const { cards, setCards } = useSharedStore();
  const [quantities, setQuantities] = useState(
    cards.reduce((acc, item) => {
      acc[item.id] = 1; // Initialize each item's count to 1
      return acc;
    }, {})
  );

  const deleteCards = (id) => {
    const updatedCards = cards.filter(item => item.id !== id);
    setCards(updatedCards);
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[id]; // Remove the quantity when deleting the item
    setQuantities(updatedQuantities);
  };

  const decrease = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1 // Prevent going below 1
    }));
  };

  const increase = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  return (
    <div className='max-w-[1200px] mx-auto p-[20px] justify-center'>
      <h1 className='ml-[400px] text-[30px]'>Sizning mahsulotlaringiz shu yerda</h1>
      <div className='flex flex-wrap gap-[40px] mt-20'>
        {cards.length > 0 ? (
          cards.map((item, index) => (
            <div className='cards' key={index}>
              <img
                src={item.img1}
                alt={item.name}
                className='w-[140px] h-[150px] ml-[30px] max-sm:ml-[70px]'
              />
              <img
                src={item.img3}
                alt={item.name}
                className='w-[30px] h-[30px] absolute right-2 top-1'
              />
              <img
                src={item.img4}
                alt={item.name}
                className='w-[30px] h-[30px] absolute right-2 top-10'
              />
              <h1 className='text-xl font-bold mt-2 max-sm:ml-[40px]'>{item.name}</h1>
              <ul className='flex h-[40px] items-center gap-[5px] max-sm:ml-[20px]'>
                <h2 className='text-lg text-gray-600'>{item.price}</h2>
                <img
                  src={item.img2}
                  alt={item.name}
                  className='w-[140px] h-[20px]'
                />
                <p>{item.text}</p>
              </ul>
              <ul className='flex gap-[10px] items-center'>
              <button onClick={() => deleteCards(item.id)} className='mt-[10px] w-[100px] h-[30px] border border-[red] hover:scale-105 transition-transform duration-300 bg-[red] text-white rounded-[3px]'>
                Delete
              </button>
              <button className='mt-[10px] w-[100px] h-[30px]  border border-[#8ef330] hover:scale-105 transition-transform duration-300 bg-[#5ff026] text-white rounded-[3px]'>Submit</button>
              </ul>
              <br />
              <ul className='ml-2 flex w-[190px] gap-[30px] mt-[20px] border border-black bg-[#67f127]'>
                <button onClick={() => decrease(item.id)} className='w-[100px] border bg-[red] text-[white] border-[red]'>-</button>
                <h5 className=''>{quantities[item.id]}</h5>
                <button onClick={() => increase(item.id)} className='w-[100px] border bg-[#345ef5] text-[white] border-[#443be8]'>+</button>
              </ul>
            </div>
          ))
        ) : (
          <p>Hech qanday mahsulot yo'q</p>
        )}
      </div>
    </div>
  );
};

export default Shopping;

