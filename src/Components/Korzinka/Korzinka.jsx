import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data/Data';
import { Button, Form, Input, Modal, message } from 'antd';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Bollen from '../Bollen/Bollen';

const Korzinka = () => {
    const { id } = useParams();
    const [single, setSingle] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [form] = Form.useForm();

    useEffect(() => {
        if (id) {
            const updateCard = Data.filter((item) => item.id.toString() === id);
            setSingle(updateCard);
            if (updateCard.length > 0) {
                setQuantities({ [updateCard[0].id]: 1 });
            }
        }
    }, [id]);

    const decrease = (id) => {
        setQuantities(prev => ({
            ...prev,
            [id]: prev[id] > 1 ? prev[id] - 1 : 1
        }));
    };

    const increase = (id) => {
        setQuantities(prev => ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }));
    };

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

    return (
        <>
        <Bollen/>
        <Header/>
        <div className='max-w-[1200px] mx-auto p-4 justify-center mt-[50px]'>
          <h1 className='text-[30px] flex items-center justify-center mb-[40px] mt-[150px]'>Bu yerda sizga kerakli mahsulotlar mavjud</h1>
            {/* Map qilingan qism */}
            {single.map(item => (
                <div key={item.id} className='flex flex-col lg:flex-row gap-[20px] mb-[20px]'>
                    <div className='w-full lg:w-[200px] h-auto lg:h-[600px]'>
                        <img className='w-[100px] h-[100px] mx-auto mt-[10px]' src={item.img1} alt={item.name} />
                        <hr className='mt-[10px] h-[3px] bg-black' />
                        <img className='w-[150px] h-[150px] mx-auto mt-[10px]' src={item.img1} alt={item.name} />
                        <hr className='mt-[10px] h-[3px] bg-black' />
                        <img className='w-[180px] h-[150px] mx-auto mt-[10px]' src={item.img1} alt={item.name} />
                    </div>

                    <div className='flex flex-col lg:flex-row items-center lg:items-start w-full'>
                        <img className='w-full lg:w-[500px] h-auto lg:h-[400px] mb-4 lg:mb-0' src={item.img1} alt={item.name} />
                        <div className='text-center lg:text-left lg:ml-6'>
                            <h1 className='text-[24px] font-bold mb-2'>{item.name}</h1>
                            <h2 className='text-[20px] text-gray-600 mb-2'>{item.price}</h2>
                            <img className='w-[200px] h-[40px] mb-2' src={item.img2} alt={item.name} />
                            <p className='text-[16px] text-gray-500'>{item.text}</p>
                            <p className='w-full lg:w-[400px] mb-4'>{item.text1}</p>
                            <hr className='h-[3px] bg-black mb-4' />
                            <Button className='mt-4 w-[150px] bg-blue-500 text-white hover:bg-blue-600' onClick={() => showModal({ name: 'Product Name', price: '100' })}>
            {t("main.main_text_3")}
          </Button>

          <Modal open={open} footer={null} onCancel={closeModal}>
            <h1 className='flex items-center justify-center text-[30px]'>Ma'lumotlarni to'ldiring</h1>
            <p className='justify-center text-[20px] text-[blue]'>Biz siz bilan imkon qadar tez bog'lanamiz va sizning mahsulotingizni yetkazib beramiz. Xizmatimiz bepul!</p>
            <Form form={form} layout="vertical">
              <Form.Item
                label="Ism"
                name="name"
                rules={[
                  { required: true, message: 'Ismingizni kiriting' },
                  { min: 5, message: 'Ism 5 tadan kam bo\'lmasligi kerak' }
                ]}
              >
                <Input className='w-full h-[50px]' placeholder='Ismingizni kiriting' />
              </Form.Item>
              <Form.Item
                label="Familiya"
                name="surname"
                rules={[
                  { required: true, message: 'Familiyangizni kiriting' },
                  { min: 5, message: 'Familiya 5 tadan kam bo\'lmasligi kerak' }
                ]}
              >
                <Input className='w-full h-[50px]' placeholder='Familiyangizni kiriting' />
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
                <Input className='w-full h-[50px]' placeholder='+998' />
              </Form.Item>
              <Button className='w-full h-[50px]' onClick={sendMessage} type="primary">
                Yuborish
              </Button>
            </Form>
          </Modal>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <Footer/>
        </>
    );
};


export default Korzinka;
