import React, { useState } from 'react';
import useSharedStore from '../String/Store';
import { Button, Form, Input, Modal, message } from 'antd';

const Shopping = () => {
  const { cards, setCards } = useSharedStore();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [quantities, setQuantities] = useState(
    cards.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  // Send Telegram Message
  const sendMessage = () => {
    form.validateFields()
      .then((values) => {
        const { name, surname, number } = values;

        // Replace with your actual token and chat_id
        const token = "7288526920:AAH-vd_HYqMjr_qE5zG6idFBNxfFeMi9aFo";  // Use your bot token here
        const chat_id = "6801549705";  // Replace with your actual chat ID
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const messageText = `Ism: ${name}\nFamiliya: ${surname}\nNumber: ${number}`;

        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "chat_id": chat_id,
            "text": messageText,
          }),
        })
        .then(res => res.json())
        .then(res => {
          if (res.ok) {
            message.success("Xabar yuborildi");
            setOpen(false);
            form.resetFields(); // Clear form after success
          } else {
            console.error("Telegram API error:", res);
            message.error("Xatolik yuz berdi, qaytadan urinib ko'ring");
          }
        })
        .catch(err => {
          console.error("Fetch error:", err);
          message.error("Telegramga ulanishda xatolik");
        });
      })
      .catch(() => {
        message.error("Iltimos, barcha maydonlarni to'ldiring!");
      });
  };

  // Modal handlers
  const showModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  // Delete card item
  const deleteCards = (id) => {
    const updatedCards = cards.filter(item => item.id !== id);
    setCards(updatedCards);
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[id];
    setQuantities(updatedQuantities);
  };

  // Decrease quantity
  const decrease = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1
    }));
  };

  // Increase quantity
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
                <button onClick={() => deleteCards(item.id)} className='mt-[10px] w-[100px] h-[30px] border border-[red] hover:scale-105 transition-transform duration-300 bg-[#f53232] text-white rounded-[3px]'>
                  Delete
                </button>
                <Button className=' mt-[10px] text-[12px] w-[100px] h-[30px] border border-[#3057f2] hover:scale-105 transition-transform duration-300 bg-[#2758f7] text-white rounded-[3px]' onClick={showModal}>Buyurtma Berish</Button>
                <Modal open={open} footer={null} onCancel={closeModal}>
                  <Form form={form} layout="vertical">
                    <Form.Item
                      name="name"
                      rules={[{ required: true, message: 'Ismingizni kiriting' }]}
                    >
                      <Input className='home-input-a' placeholder='Ismingizni kiriting' />
                    </Form.Item>
                    <Form.Item
                      name="surname"
                      rules={[{ required: true, message: 'Familiyangizni kiriting' }]}
                    >
                      <Input className='home-input-b' placeholder='Familiyangizni kiriting' />
                    </Form.Item>
                    <Form.Item
                      name="number"
                      rules={[{ required: true, message: 'Raqamingizni kiriting' }]}
                    >
                      <Input className='home-input-c' placeholder='Raqamingizni kiriting' />
                    </Form.Item>
                    <Button onClick={sendMessage} type="primary">
                      Yuborish
                    </Button>
                  </Form>
                </Modal>
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
