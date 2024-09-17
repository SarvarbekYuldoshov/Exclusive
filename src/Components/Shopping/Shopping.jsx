import React, { useState, useEffect } from 'react';
import useSharedStore from '../String/Store'; // Assuming you store card data here
import { Button, Form, Input, Modal, message } from 'antd';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Bollen from '../Bollen/Bollen';

const Shopping = () => {
  const { cards, setCards } = useSharedStore(); // Ensure cards have data
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [form] = Form.useForm();
  const [quantities, setQuantities] = useState(
    cards.reduce((acc, item) => {
      acc[item.id] = 1; // Initialize quantities for each card
      return acc;
    }, {})
  );

  useEffect(() => {
    if (!cards.length) {
      console.error('Card data is empty. Ensure that card data is being fetched or passed correctly.');
    }
  }, [cards]);

  const sendMessage = () => {
    form.validateFields()
      .then((values) => {
        const { name, surname, number } = values;
        const token = "YOUR_TELEGRAM_BOT_TOKEN";
        const chat_id = "YOUR_TELEGRAM_CHAT_ID";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const messageText = `Ism: ${name}\nFamiliya: ${surname}\nNumber: ${number}\nMahsulot: ${selectedItem?.name}\nNarxi: ${selectedItem?.price}`;

        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chat_id,
            text: messageText,
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
    <div className="flex flex-col min-h-screen">
      <Bollen />
      <Header />
      <div className="flex-grow max-w-6xl mx-auto p-4 mt-[150px]">
        <h1 className='text-3xl text-center mb-10'>Siz sotib olmoqchi bo'lgan buyumlar</h1>
        <div className='flex flex-wrap gap-8'>
          {cards.length > 0 ? (
            cards.map((item, index) => (
              <div className='bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-full sm:w-80' key={index}>
                <img
                  src={item.img1}  // Ensure correct image property
                  alt={item.name}
                  className='w-full h-40 object-cover rounded-lg'
                />
                <h2 className='text-xl font-semibold mt-4'>{item.name}</h2>
                <div className='flex items-center gap-2 mt-2'>
                  <h3 className='text-lg text-gray-600'>{item.price}</h3>
                  <img
                    src={item.img2}  // Ensure correct image property
                    alt={item.name}
                    className='w-20 h-5 object-contain'
                  />
                  <p>{item.text}</p>  // Ensure correct text property
                </div>
                <div className='flex gap-4 mt-4'>
                  <Button
                    className='bg-red-500 text-white hover:bg-red-600'
                    onClick={() => deleteCards(item.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className='bg-blue-500 text-white hover:bg-blue-600'
                    onClick={() => showModal(item)}
                  >
                    Buyurtma berish
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center text-gray-500'>Hozircha hech qanday buyum yo'q.</p>
          )}
        </div>
      </div>
      <Footer />
      <Modal open={open} footer={null} onCancel={closeModal}>
        <h1 className='text-2xl text-center mb-4'>Ma'lumotlarni to'ldiring</h1>
        <p className='text-lg text-blue-500 text-center mb-6'>Biz siz bilan imkon qadar tez bog'lanamiz va sizning mahsulotingizni yetkazib beramiz. Xizmatimiz bepul!</p>
        <Form form={form} layout="vertical">
          <Form.Item
            label="Ism"
            name="name"
            rules={[
              { required: true, message: 'Ismingizni kiriting' },
              { min: 5, message: 'Ism 5 tadan kam bo\'lmasligi kerak' }
            ]}
          >
            <Input placeholder='Ismingizni kiriting' />
          </Form.Item>
          <Form.Item
            label="Familiya"
            name="surname"
            rules={[
              { required: true, message: 'Familiyangizni kiriting' },
              { min: 5, message: 'Familiya 5 tadan kam bo\'lmasligi kerak' }
            ]}
          >
            <Input placeholder='Familiyangizni kiriting' />
          </Form.Item>
          <Form.Item
            label="Telefon raqam"
            name="number"
            rules={[
              { required: true, message: 'Telefon raqamingizni kiriting' },
              {
                pattern: /^\+998\d{9}$/,
                message: 'Telefon raqam +998 bilan boshlanib, 9 ta raqamdan iborat bo\'lishi kerak',
              },
            ]}
          >
            <Input placeholder='+998XXXXXXXXX' />
          </Form.Item>
          <Button className='w-full bg-blue-500 text-white hover:bg-blue-600' onClick={sendMessage} type="primary">
            Yuborish
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Shopping;
