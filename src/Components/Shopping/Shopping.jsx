import React, { useState } from 'react';
import useSharedStore from '../String/Store';
import { Button, Form, Input, Modal, message } from 'antd';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Shopping = () => {
  const { cards, setCards } = useSharedStore();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [form] = Form.useForm();
  const [quantities, setQuantities] = useState(
    cards.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const sendMessage = () => {
    form.validateFields()
      .then((values) => {
        const { name, surname, number } = values;
        const token = "7288526920:AAH-vd_HYqMjr_qE5zG6idFBNxfFeMi9aFo";
        const chat_id = "6801549705";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const messageText = `Ism: ${name}\nFamiliya: ${surname}\nNumber: ${number}\nMahsulot: ${selectedItem?.name}\nNarxi: ${selectedItem?.price}`;

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
              form.resetFields();
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

  const showModal = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedItem(null); 
  };

  const deleteCards = (id) => {
    const updatedCards = cards.filter(item => item.id !== id);
    setCards(updatedCards);
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[id];
    setQuantities(updatedQuantities);
  };

  const decrease = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1
    }));
  };

  const increase = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  return (
    
  <>
  <Header/>
      <div className='max-w-[1200px] mx-auto p-[20px]  items-center justify-center mt-[150px]'>
      <h1 className='text-[40px] flex items-center justify-center '>Siz sotib olmoqchi bulgan buyumlar</h1>
      <div className='flex flex-wrap gap-[40px] mt-20'>
        {cards.length > 0 ? (
          cards.map((item, index) => (
            <div className='cards' key={index}>
              <img
                src={item.img1}
                alt={item.name}
                className='w-[140px] h-[150px] ml-[30px] max-sm:ml-[70px]'
              />

              <h1 className='text-xl font-bold mt-2 max-sm:ml-[40px]'>{item.name}</h1>
              <ul className='flex h-[40px] items-center gap-[5px] max-sm:ml-[20px]'>
                <h2 className='text-lg text-gray-600 ml-[20px]'>{item.price}</h2>
                <img
                  src={item.img2}
                  alt={item.name}
                  className='w-[140px] h-[20px]'
                />
                <p>{item.text}</p>
              </ul>
              <ul className='flex gap-[10px] items-center'>
                <button onClick={() => deleteCards(item.id)} 
                className='mt-[10px] w-[100px] h-[30px] border border-[red] hover:scale-105 transition-transform duration-300 bg-[#f3f8f8] text-black rounded-[3px] max-sm:ml-[40px]'>
                  Delete
                </button>
                <Button className=' mt-[10px] text-[12px] w-[100px] h-[30px] border border-[#3057f2] hover:scale-105 transition-transform duration-300 bg-[#f4f4f7] text-black rounded-[3px]' onClick={() => showModal(item)}>Buyurtma Berish</Button>
                <Modal 
                  open={open} 
                  footer={null} 
                  onCancel={closeModal}
                  bodyStyle={{ padding: '20px', overflow: 'hidden' }}
                  style={{ top: 50 }} 
                >
                  <h2>Mahsulot: {selectedItem?.name}</h2>
                  <h3>Narxi: {selectedItem?.price}</h3>
                  <Form form={form} layout="vertical">
                    <Form.Item
                      name="name"
                      rules={[
                        { required: true, message: 'Ismingizni kiriting' },
                        { min: 5, message: 'Ism 5 tadan kam bo\'lmasligi kerak' }
                      ]}
                    >
                      <Input className='home-input-a' placeholder='Ismingizni kiriting' />
                    </Form.Item>
                    <Form.Item
                      name="surname"
                      rules={[
                        { required: true, message: 'Familiyangizni kiriting' },
                        { min: 5, message: 'Familiya 5 tadan kam bo\'lmasligi kerak' }
                      ]}
                    >
                      <Input className='home-input-b' placeholder='Familiyangizni kiriting' />
                    </Form.Item>
                    <Form.Item
                      name="number"
                      rules={[
                        { required: true, message: 'Raqamingizni kiriting' },
                        {
                          pattern: /^\+998\d{9}$/,
                          message: 'Telefon raqam +998 bilan boshlanib, 9 ta raqam bilan davom etishi kerak',
                        },
                      ]}
                    >
                      <Input className='home-input-c' placeholder='+998XXXXXXXXX' />
                    </Form.Item>
                    <Button onClick={sendMessage} type="primary">
                      Yuborish
                    </Button>
                  </Form>
                </Modal>
              </ul>
              <br />
              <ul className='ml-2 flex w-[190px] gap-[30px] mt-[20px] border border-black bg-[#edf4ea] max-sm:ml-[45px]'>
                <button onClick={() => decrease(item.id)} className='w-[100px] border bg-[#000000] text-[white] border-[#233a9f]'>-</button>
                <h5 className=''>{quantities[item.id]}</h5>
                <button onClick={() => increase(item.id)} className='w-[100px] border bg-[#040711] text-[white] border-[#443be8]'>+</button>
              </ul>
            </div>
          ))
        ) : (
          <p className='justify-center'></p>
        )}
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default Shopping;
