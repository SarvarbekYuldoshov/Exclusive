import React, { useState } from 'react';
import useSharedStore from '../String/Store';
import Rasm_1 from "../../images/img2.png";
import Rasm_2 from "../../images/image3.png";
import Rasm_3 from "../../images/image4.png";
import Rasm_4 from "../../images/image5.png";
import Rasm_5 from "../../images/image6.png";
import Rasm_6 from "../../images/image7.png";
import Rasm_7 from "../../images/image8.png";

const Camera = () => {
  const { cards, setCards, addToWishlist } = useSharedStore();
  const [error, setError] = useState('');
  const [adding, setAdding] = useState({});

  // Mahsulotlar haqida ma'lumot (Data massiv)
  const Data = [
    {
      id: 1,
      name: "Camera 1",
      price: "$500",
      text: "Professional kamera",
      img1: Rasm_1,
      img2: Rasm_2,
    },
    {
      id: 2,
      name: "Camera 2",
      price: "$600",
      text: "Yuqori sifatli kamera",
      img1: Rasm_3,
      img2: Rasm_4,
    },
    {
      id: 3,
      name: "Camera 3",
      price: "$750",
      text: "Katta ekranli kamera",
      img1: Rasm_5,
      img2: Rasm_6,
    },
    {
      id: 4,
      name: "Camera 4",
      price: "$900",
      text: "Tez va qulay kamera",
      img1: Rasm_7,
      img2: Rasm_1,
    },
  ];

  const handleAdd = (item) => {
    const exists = cards.find(card => card.id === item.id);
    if (exists) {
      setError('Siz bu mahsulotni olgansiz');
    } else {
      setCards([...cards, item]);
      setError('');
    }
    setAdding((add)=>({...add, [item.name]: true}));
  };

  const handleWishlistAdd = (item) => {
    addToWishlist(item); // Wishlistga mahsulot qo'shish
    setAdding((add)=>({...add, [item.name]: true}));
  };

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
                <img src={item.img1} alt={item.name} className='w-[140px] h-[150px] ml-[30px] max-sm:ml-[70px]' />
                <h1 className='text-xl font-bold mt-2 max-sm:ml-[40px]'>{item.name}</h1>
                <ul className='flex h-[40px] items-center gap-[5px] max-sm:ml-[20px]'>
                  <h2 className='text-lg text-gray-600'>{item.price}</h2>
                  <img src={item.img2} alt={item.name} className='w-[140px] h-[20px]' />
                  <p className=''>{item.text}</p>
                </ul>

                {/* Qo'shish tugmasi */}
                <button
                  onClick={() => handleAdd(item)}
                  className='mt-[40px] w-[250px] h-[40px] top-[220px] bg-black text-white py-2 px-4 rounded-md hover:bg-black absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity max-sm:w-[338px]'
                >
                  {adding[item.name] ? "Qushilgan" : "Qushish"}
                </button>
              </div>
            ))}
        </div>
        {error && <p className='text-red-500 mt-4'>{error}</p>}
      </div>
    </div>
  );
};

export default Camera;
