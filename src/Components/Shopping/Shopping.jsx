import React from 'react';
import useSharedStore from '../String/Store';

const Shopping = () => {
  const { cards } = useSharedStore();

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
