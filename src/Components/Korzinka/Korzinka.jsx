import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data/Data';
import { Button, Form, Input, Modal, message } from 'antd';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Bollen from '../Bollen/Bollen';
import { useTranslation } from 'react-i18next';

const Korzinka = () => {
    const { id } = useParams();
    const [single, setSingle] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [form] = Form.useForm();
    const { t, i18n } = useTranslation();
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
                message.error("Iltimos, barcha joyni  to'ldiring!");
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
        <div className='flex flex-col min-h-screen'>
            <Bollen/>
            <Header/>
            <main className='flex-grow'>
                <div className='max-w-[1200px] mx-auto p-4 flex justify-center items-center flex-col mt-[150px]'>
                    {single.map(item => (
                        <div key={item.id} className='flex flex-col lg:flex-row justify-center items-center gap-[20px] mb-[20px]'>
                            <div className='flex flex-col lg:flex-row items-center lg:items-start w-full'>
                                <img 
                                    className='w-full lg:w-[250px] h-auto lg:h-[350px] object-cover mb-4 lg:mb-0 mx-auto' 
                                    src={item.img1} 
                                    alt={item.name} 
                                />
                                <div className='text-center lg:text-left lg:ml-6'>
                                    <h1 className='text-[24px] font-bold mb-2'>{i18n?.language==="uz" ?  item.name : item?.name_en}</h1>
                                    <h2 className='text-[20px] text-gray-600 mb-2'>{i18n?.language==="uz" ?  item.text1 : item?.text1en}</h2>
                                    <img className='w-[80px] h-[20px] mb-2 mx-auto lg:mx-0' src={item.img2} alt={item.name} />
                                    <p className='text-[16px] text-gray-500'>{i18n?.language==="uz" ?  item.text6 : item?.text6en}</p>
                                    <p className='w-full lg:w-[400px] mb-4'>{i18n?.language==="uz" ?  item.text7 : item?.text7en}</p>
                                    <hr className='h-[3px] bg-black mb-4' />
                                    <Button className='mt-4 w-[150px] bg-blue-500 text-white hover:bg-blue-600' onClick={() => showModal(item)}>
                                    {i18n?.language==="uz" ?  item.text10 : item?.text10en}
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
                                    <div className='mt-[30px]'>
                                        <ul className='flex gap-[20px] border border-black h-[60px]'>
                                            <img className='ml-2' src={item.img4} alt={item.name}/>
                                            <li>
                                                <h1 className='mt-[10px]'>{i18n?.language==="uz" ?  item.text6 : item?.text6en}</h1>
                                                <p>{i18n?.language==="uz" ?  item.text7 : item?.text7en}</p>
                                            </li>
                                        </ul>
                                        <ul className='flex mt-[20px] gap-[20px] border border-black'>
                                            <img className='ml-2 w-[60px]' src={item.img5} alt={item.name}/>
                                            <li>
                                                <h1 className='mt-[10px]'>{i18n?.language==="uz" ?  item.text8 : item?.text8en}</h1>
                                                <p>{i18n?.language==="uz" ?  item.text9 : item?.text9en}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Korzinka;
