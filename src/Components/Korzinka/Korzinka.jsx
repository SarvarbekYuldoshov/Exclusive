import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data/Data';
import { Button, Form, Input, Modal, message } from 'antd';

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
        <div className='max-w-[1200px] mx-auto p-4 justify-center border border-black mt-[50px]'>

            {/* Map qilingan qism */}
            {single.length > 0 ? (
                single.map(item => (
                    <div key={item.id} className='flex flex-col lg:flex-row gap-[20px] mb-[20px]'>
                        <div className='w-full lg:w-[200px] h-auto lg:h-[600px] border border-black'>
                            <img className='w-[100px] h-[100px] mx-auto mt-[10px]' src={item.img1} alt={item.name} />
                            <p className='mx-auto w-[100px] h-[25px] border border-black text-center mt-2 bg-blue-500 text-white'>{item.text3}</p>
                            <hr className='mt-[10px] h-[3px] bg-black' />
                            <img className='w-[150px] h-[150px] mx-auto mt-[10px]' src={item.img1} alt={item.name} />
                            <p className='mx-auto w-[150px] h-[25px] border border-black text-center mt-2 bg-blue-500 text-white'>{item.text4}</p>
                            <hr className='mt-[10px] h-[3px] bg-black' />
                            <img className='w-[180px] h-[150px] mx-auto mt-[10px]' src={item.img1} alt={item.name} />
                            <p className='mx-auto w-[180px] h-[25px] border border-black text-center mt-2 bg-blue-500 text-white'>{item.text5}</p>
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
                                
                                <div className='w-full lg:w-[200px] flex items-center border border-black bg-green-400 max-sm:'>
                                    <button onClick={() => decrease(item.id)} className='w-[80px] border bg-red-500 text-white max-sm:ml-[65px]'>-</button>
                                    <h5 className='mx-4'>{quantities[item.id] || 1}</h5>
                                    <button onClick={() => increase(item.id)} className='w-[80px] border bg-blue-500 text-white '>+</button>
                                </div>
                                
                                <Button className='mt-4 w-[150px] bg-blue-500 text-white hover:bg-blue-600' onClick={() => showModal(item)}>
                                    Buyurtma Berish
                                </Button>
                                
                                <Modal open={open} footer={null} onCancel={closeModal}>
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
                                            <Input placeholder='Ismingizni kiriting' />
                                        </Form.Item>
                                        <Form.Item
                                            name="surname"
                                            rules={[
                                                { required: true, message: 'Familiyangizni kiriting' },
                                                { min: 5, message: 'Familiya 5 tadan kam bo\'lmasligi kerak' }
                                            ]}
                                        >
                                            <Input placeholder='Familiyangizni kiriting' />
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
                                            <Input placeholder='+998XXXXXXXXX' />
                                        </Form.Item>
                                        <Button onClick={sendMessage} type="primary">
                                            Yuborish
                                        </Button>
                                    </Form>
                                </Modal>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className='text-center text-lg text-gray-500'>Mahsulot topilmadi</p>
            )}
        </div>
    );
};

export default Korzinka;
