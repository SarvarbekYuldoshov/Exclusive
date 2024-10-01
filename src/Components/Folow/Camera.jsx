import React, { useState } from 'react';
import useSharedStore from '../String/Store';
import Rasm_1 from "../../images/img2.png";
import Rasm_2 from "../../images/image3.png";
import Rasm_3 from "../../images/image4.png";
import Rasm_4 from "../../images/image5.png";
import Rasm_5 from "../../images/image6.png";
import Rasm_6 from "../../images/image7.png";
import Rasm_7 from "../../images/image8.png";
import { Link } from 'react-router-dom';

const Camera = () => {
  const { cards, setCards, addToWishlist } = useSharedStore();
  const [error, setError] = useState('');
  const [adding, setAdding] = useState({});

  const Data = [
    {
      id: 1,
      name: "Camera 1",
      price: "$500",
      text: "Professional kamera",
      img: Rasm_1,
    },
    {
      id: 2,
      name: "Camera 2",
      price: "$600",
      text: "Yuqori sifatli kamera",
      img: Rasm_2,
    },
    {
      id: 3,
      name: "Camera 3",
      price: "$750",
      text: "Katta ekranli kamera",
      img: Rasm_3,
    },
    {
      id: 4,
      name: "Camera 4",
      price: "$900",
      text: "Tez va qulay kamera",
      img: Rasm_4,
    },
    {
      id: 5,
      name: "Camera 5",
      price: "$1100",
      text: "Keng imkoniyatli kamera",
      img: Rasm_5,
    },
    {
      id: 6,
      name: "Camera 6",
      price: "$1300",
      text: "Ultra professional kamera",
      img: Rasm_6,
    },
    {
      id: 7,
      name: "Camera 7",
      price: "$1500",
      text: "O'ziga xos imkoniyatli kamera",
      img: Rasm_7,
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
    addToWishlist(item);
    setAdding((add)=>({...add, [item.name]: true}));
  };

  return (
    <div>
      <div className='max-w-[1200px] mx-auto p-[20px]' id='main'>
        <div className='flex flex-wrap gap-[50px]'>
          {Data.map((item, index) => (
           
            <div
              key={index}
              className='w-[251px] h-[301px] p-4 bg-white shadow-md rounded-lg relative max-sm:w-[340px] group transform transition-transform duration-1000 ease-in-out hover:scale-[0.98]'
            >
               <Link to={`/korzinka/${item.id}`}>
              <img src={item.img} alt={item.name} className='w-[140px] h-[150px] ml-[30px] max-sm:ml-[70px]' />
              <h1 className='text-xl font-bold mt-2 max-sm:ml-[40px]'>{item.name}</h1>
              <ul className='flex h-[40px] items-center gap-[5px] max-sm:ml-[20px]'>
                <h2 className='text-lg text-gray-600'>{item.price}</h2>
                <p className=''>{item.text}</p>
              </ul>

              {/* Qo'shish tugmasi */}
              <button
                onClick={() => handleAdd(item)}
                className='mt-[40px] w-[250px] h-[40px] top-[221px] bg-black text-white py-2 px-4 rounded-md hover:bg-black absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity max-sm:w-[338px]'
              >
                {adding[item.name] ? "Qushilgan" : "Qushish"}
              </button>
              </Link>
            </div>
          ))}
        </div>
        {error && <p className='text-red-500 mt-4'>{error}</p>}
      </div>
    </div>
  );
};

export default Camera;
