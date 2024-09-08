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
        <div className=' max-w-[1200px] mx-auto p-4 justify-center'>

            {/* ----------------------------------------map-qilingan qism------------------------------------------------------------ */}
            
            {single.length > 0 ? (
                single.map(item => (
                    <div key={item.id} className='flex flex-col items-center sm:flex-row sm:justify-center p-4'>
                        <img src={item.img1}  alt={item.name}className='w-[400px] h-[400px] sm:w-[300px] sm:h-[350px] mb-4 sm:mb-0'/>
                    <div className='sm:ml-6 text-center sm:text-left'>
                        <h1 className='text-[24px] font-bold mb-2'>{item.name}</h1>
                    <div className='flex flex-col items-center sm:items-start'>
                        <h2 className='text-[20px] text-gray-600 mb-2'>{item.price}</h2>
                        <img src={item.img2} alt={item.name} className='w-[200px] h-[40px] mb-2'/>
                                <p className='text-[16px] text-gray-500'>{item.text}</p>
                                <p className='w-[400px]'>{item.text1}</p>
                            </div>
                            <hr className='mt-[10px] h-[3px] bg-black' />
                            <div className=' w-[200px] flex items-center mt-[20px] border border-black bg-[#67f127]'>
                                <button 
                                    onClick={() => decrease(item.id)} 
                                    className='w-[80px] border bg-[red] text-[white] border-[red]'
                                >
                                    -
                                </button>
                                <h5 className='mx-4 justify-center ml-[50px]'>{quantities[item.id] || 1}</h5>
                                <button 
                                    onClick={() => increase(item.id)} 
                                    className='w-[80px] ml-[59px] border bg-[#345ef5] text-[white] border-[#443be8]'
                                >
                                    +
                                </button>
                            </div>
                            <ul className='mb-[10px]'>
                            <Button 
                                className='mt-[10px] text-[12px] w-[100px] h-[30px] border border-[#3057f2] hover:scale-105 transition-transform duration-300 bg-[#2758f7] text-white rounded-[3px]' 
                                onClick={() => showModal(item)}
                            >
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
                            <a className='' href="">{item.link}</a>
                            <p className='mt-[10px]'>{item.text2}</p>
                        </div>

                    </div>
                ))
            ) : (
                <p className='text-center text-lg text-gray-500'>No product found</p>
            )}
        </div>
    );
};
export default Korzinka;
