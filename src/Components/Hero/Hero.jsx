import React, { useState } from 'react';
import "./Hero.css";
import Rasm_5 from "../../images/rasm5.png";
import Rasm_6 from "../../images/rasm6.png";
import Rasm_7 from "../../images/rasm7.png";
import { useTranslation } from 'react-i18next';
import { Form, Input, Button, Modal, message } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Autoplay, Pagination, Navigation } from 'swiper';

const Hero = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const sendMessage = () => {
    form.validateFields()
      .then((values) => {
        const { name, surname, number } = values;

        const token = "7288526920:AAH-vd_HYqMjr_qE5zG6idFBNxfFeMi9aFo";
        const chat_id = 6801549705;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const messageText = `Ism: ${name}\nFamiliya: ${surname}\nNumber: +998${number}`;

        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id,
            text: messageText,
          }),
        })
          .then(res => res.json())
          .then(res => {
            if (res.ok) {
              message.success("Ma'lumot yuborildi");
              setOpen(false);
              form.resetFields();
            } else {
              message.error("Yuborishda xatolik yuz berdi");
            }
          })
          .catch(err => {
            console.error(err);
            message.error("Xatolik yuz berdi, iltimos keyinroq urinib ko'ring");
          });
      })
      .catch(() => {
        message.error("Iltimos, barcha maydonlarni to'ldiring!");
      });
  };

  const showModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

  return (
    <div className='bg-black text-center mt-[150px] max-sm:mt-[120px]'>
      <div className='flex flex-col md:flex-row items-center mx-auto max-w-[1200px] p-6 md:p-10'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='' src={Rasm_5} alt="" />
            <h1 className=''>{t("hero.hero_text_2")}</h1>
            <Button className='mt-4 w-[150px] bg-blue-500 text-white hover:bg-blue-600' onClick={() => showModal({ name: 'Product Name', price: '100' })}>
          {t("main.main_text_3")}
          </Button>

          <Modal open={open} footer={null} onCancel={closeModal}>
            <h1 className='flex items-center justify-center text-[30px]'>Malumotlarni tuldiring</h1>
            <p className=' justify-center text-[20px] text-[blue]'>Biz siz bilan imkon qadar tez bog`lanamiz va sizning mahsulotingzi yetkazib beramiz xizmatimiz bepul?</p>
            <Form form={form} layout="vertical">
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  { required: true, message: 'Ismingizni kiriting' },
                  { min: 5, message: 'Ism 5 tadan kam bo\'lmasligi kerak' }
                ]}
              >
                <Input className='w-[480px] h-[50px]' placeholder='Ismingizni kiriting' />
              </Form.Item>
              <Form.Item
               label="Surname"
                name="surname"
                rules={[
                  { required: true, message: 'Familiyangizni kiriting' },
                  { min: 5, message: 'Familiya 5 tadan kam bo\'lmasligi kerak' }
                ]}
              >
                <Input  className='w-[480px] h-[50px]' placeholder='Familiyangizni kiriting' />
              </Form.Item>
              <Form.Item
                label="Number"
                name="number"
                rules={[
                  { required: true, message: 'Raqamingizni kiriting' },
                  {
                    pattern: /^\+998\d{9}$/,
                    message: 'Telefon raqam +998 bilan boshlanib, 9 ta raqam bilan davom etishi kerak',
                  },
                ]}
              >
                <Input className='w-[480px] h-[50px]' placeholder='+998' />
              </Form.Item>
              <Button className='w-[480px] h-[50px]' onClick={sendMessage} type="primary">
                Yuborish
              </Button>
            </Form>
          </Modal>
          </SwiperSlide>
          <SwiperSlide>
          <img className='' src={Rasm_5} alt="" />
            <h1 className=''>{t("hero.hero_text_2")}</h1>
            <Button className='mt-4 w-[150px] bg-blue-500 text-white hover:bg-blue-600' onClick={() => showModal({ name: 'Product Name', price: '100' })}>
          {t("main.main_text_3")}
          </Button>

          <Modal open={open} footer={null} onCancel={closeModal}>
            <h1 className='flex items-center justify-center text-[30px]'>Malumotlarni tuldiring</h1>
            <p className=' justify-center text-[20px] text-[blue]'>Biz siz bilan imkon qadar tez bog`lanamiz va sizning mahsulotingzi yetkazib beramiz xizmatimiz bepul?</p>
            <Form form={form} layout="vertical">
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  { required: true, message: 'Ismingizni kiriting' },
                  { min: 5, message: 'Ism 5 tadan kam bo\'lmasligi kerak' }
                ]}
              >
                <Input className='w-[480px] h-[50px]' placeholder='Ismingizni kiriting' />
              </Form.Item>
              <Form.Item
               label="Surname"
                name="surname"
                rules={[
                  { required: true, message: 'Familiyangizni kiriting' },
                  { min: 5, message: 'Familiya 5 tadan kam bo\'lmasligi kerak' }
                ]}
              >
                <Input  className='w-[480px] h-[50px]' placeholder='Familiyangizni kiriting' />
              </Form.Item>
              <Form.Item
                label="Number"
                name="number"
                rules={[
                  { required: true, message: 'Raqamingizni kiriting' },
                  {
                    pattern: /^\+998\d{9}$/,
                    message: 'Telefon raqam +998 bilan boshlanib, 9 ta raqam bilan davom etishi kerak',
                  },
                ]}
              >
                <Input className='w-[480px] h-[50px]' placeholder='+998' />
              </Form.Item>
              <Button className='w-[480px] h-[50px]' onClick={sendMessage} type="primary">
                Yuborish
              </Button>
            </Form>
          </Modal>
          </SwiperSlide>
          <SwiperSlide>
          <img className='' src={Rasm_5} alt="" />
            <h1 className=''>{t("hero.hero_text_2")}</h1>
            <Button className='mt-4 w-[150px] bg-blue-500 text-white hover:bg-blue-600' onClick={() => showModal({ name: 'Product Name', price: '100' })}>
          {t("main.main_text_3")}
          </Button>

          <Modal open={open} footer={null} onCancel={closeModal}>
            <h1 className='flex items-center justify-center text-[30px]'>Malumotlarni tuldiring</h1>
            <p className=' justify-center text-[20px] text-[blue]'>Biz siz bilan imkon qadar tez bog`lanamiz va sizning mahsulotingzi yetkazib beramiz xizmatimiz bepul?</p>
            <Form form={form} layout="vertical">
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  { required: true, message: 'Ismingizni kiriting' },
                  { min: 5, message: 'Ism 5 tadan kam bo\'lmasligi kerak' }
                ]}
              >
                <Input className='w-[480px] h-[50px]' placeholder='Ismingizni kiriting' />
              </Form.Item>
              <Form.Item
               label="Surname"
                name="surname"
                rules={[
                  { required: true, message: 'Familiyangizni kiriting' },
                  { min: 5, message: 'Familiya 5 tadan kam bo\'lmasligi kerak' }
                ]}
              >
                <Input  className='w-[480px] h-[50px]' placeholder='Familiyangizni kiriting' />
              </Form.Item>
              <Form.Item
                label="Number"
                name="number"
                rules={[
                  { required: true, message: 'Raqamingizni kiriting' },
                  {
                    pattern: /^\+998\d{9}$/,
                    message: 'Telefon raqam +998 bilan boshlanib, 9 ta raqam bilan davom etishi kerak',
                  },
                ]}
              >
                <Input className='w-[480px] h-[50px]' placeholder='+998' />
              </Form.Item>
              <Button className='w-[480px] h-[50px]' onClick={sendMessage} type="primary">
                Yuborish
              </Button>
            </Form>
          </Modal>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
