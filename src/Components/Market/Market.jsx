import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Button, Form, Input, Modal, message } from 'antd';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const sendMessage = () => {
    form
      .validateFields()
      .then((values) => {
        const { name, surname, number } = values;
        const token = '7288526920:AAH-vd_HYqMjr_qE5zG6idFBNxfFeMi9aFo';
        const chat_id = '6801549705';
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const messageText = `Ism: ${name}\nFamiliya: ${surname}\nNumber: ${number}`;

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
          .then((res) => res.json()) 
          .then((res) => {
            if (res.ok) {
              message.success('Xabar yuborildi');
              setOpen(false);
              form.resetFields();
            } else {
              message.error('Xatolik yuz berdi, qaytadan urinib ko‘ring');
            }
          })
          .catch(() => {
            message.error('Telegramga ulanishda xatolik yuz berdi');
          });
      })
      .catch(() => {
        message.error('Iltimos, barcha maydonlarni to‘ldiring!');
      });
  };

  const showModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="Navbar">
      <div className="Navbar-container">
        <div className="Navbar-mindle">
          <ul className="Navbar-list">
            {[
              'Cell Phones',
              'Computers & Laptop',
              'TV & Video',
              'Accessories',
              'Home Appliance',
              'Video Games & Consoles',
            ].map((category, index) => (
              <li key={index} className="Navbar-item">
                <a className="Navbar-link" href="">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="Navbar-degree">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="navbar-mendle">
                <ul className="navbar-list">
                  <img className="navbar-img" src={Rasm_4} alt="Product" />
                </ul>
                <ul className="navbar-list">
                  <li>
                    <h1 className="navbar-title">Color your days with small joy</h1>
                  </li>
                  <li>
                    <Button
                      className="mt-4 w-[150px] bg-blue-500 text-white hover:bg-blue-600"
                      onClick={showModal}
                    >
                      SHOP NOW
                    </Button>
                    <Modal open={open} footer={null} onCancel={closeModal}>
                      <Form form={form} layout="vertical">
                        <Form.Item
                          name="name"
                          rules={[
                            { required: true, message: 'Ismingizni kiriting' },
                            { min: 5, message: 'Ism 5 tadan kam bo‘lishi mumkin emas' },
                          ]}
                        >
                          <Input placeholder="Ismingizni kiriting" />
                        </Form.Item>
                        <Form.Item
                          name="surname"
                          rules={[
                            { required: true, message: 'Familiyangizni kiriting' },
                            { min: 5, message: 'Familiya 5 tadan kam bo‘lishi mumkin emas' },
                          ]}
                        >
                          <Input placeholder="Familiyangizni kiriting" />
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
                          <Input placeholder="+998XXXXXXXXX" />
                        </Form.Item>
                        <Button onClick={sendMessage} type="primary">
                          Yuborish
                        </Button>
                      </Form>
                    </Modal>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
