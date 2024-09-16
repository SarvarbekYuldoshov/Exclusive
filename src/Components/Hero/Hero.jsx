import React, { useState } from 'react';
import './Hero.css';
import Rasm_5 from '../../images/rasm5.png';
import Rasm_8 from '../../images/phonr.png';

import { useTranslation } from 'react-i18next';
import { Form, Input, Button, Modal, message } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const Hero = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  
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
            chat_id,
            text: messageText,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.ok) {
              message.success("Ma'lumot yuborildi");
              form.resetFields();
              setOpen(false);
            } else {
              message.error("Yuborishda xatolik yuz berdi");
            }
          })
          .catch((err) => {
            console.error(err);
            message.error("Xatolik yuz berdi, iltimos keyinroq urinib ko'ring");
          });
      })
      .catch(() => {
        message.error("Iltimos, barcha maydonlarni to'ldiring!");
      });
  };
  
  const showModal = () => setOpen(true);
  const closeModal = () => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <div style={{ backgroundColor: 'black', textAlign: 'center', marginTop: '150px', position: 'relative', height: '100vh' }} id="acount">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto', maxWidth: '1200px', padding: '0 20px', height: '100%' }}>
        <Swiper
          effect="coverflow"
          slidesPerView="auto"
          grabCursor={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          style={{ width: '100%', height: '100%' }}
        >
          <SwiperSlide
            style={{
              backgroundImage: `url(${Rasm_8})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ color: 'white', textAlign: 'center' }}>
              <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img style={{ marginTop: '5px', width: '80px', height: '80px' }} src={Rasm_5} alt="icon" />
                  <p style={{ color: 'white', marginTop: '5px', width: '150px', fontSize: '14px' }}>
                    {t("hero.hero_text_1")}
                  </p>
                <h1 style={{ marginTop: '50px', width: '100%', fontSize: '23px', fontWeight: '600', color: 'white' }}>
                  {t("hero.hero_text_2")}
                </h1>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              backgroundImage: `url(${Rasm_8})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ color: 'white', textAlign: 'center' }}>
              <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img style={{ marginTop: '5px', width: '80px', height: '80px' }} src={Rasm_5} alt="icon" />
                  <p style={{ color: 'white', marginTop: '5px', width: '150px', fontSize: '14px' }}>
                    {t("hero.hero_text_1")}
                  </p>
                <h1 style={{ marginTop: '50px', width: '100%', fontSize: '23px', fontWeight: '600', color: 'white' }}>
                  {t("hero.hero_text_2")}
                </h1>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              backgroundImage: `url(${Rasm_8})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ color: 'white', textAlign: 'center' }}>
              <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img style={{ marginTop: '5px', width: '80px', height: '80px' }} src={Rasm_5} alt="icon" />
                  <p style={{ color: 'white', marginTop: '5px', width: '150px', fontSize: '14px' }}>
                    {t("hero.hero_text_1")}
                  </p>
                <h1 style={{ marginTop: '50px', width: '100%', fontSize: '23px', fontWeight: '600', color: 'white' }}>
                  {t("hero.hero_text_2")}
                </h1>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              backgroundImage: `url(${Rasm_8})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ color: 'white', textAlign: 'center' }}>
              <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img style={{ marginTop: '5px', width: '80px', height: '80px' }} src={Rasm_5} alt="icon" />
                  <p style={{ color: 'white', marginTop: '5px', width: '150px', fontSize: '14px' }}>
                    {t("hero.hero_text_1")}
                  </p>
                <h1 style={{ marginTop: '50px', width: '100%', fontSize: '23px', fontWeight: '600', color: 'white' }}>
                  {t("hero.hero_text_2")}
                </h1>
              </ul>
            </div>
          </SwiperSlide>


          <SwiperSlide
            style={{
              backgroundImage: `url(${Rasm_8})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
             <div style={{ color: 'white', textAlign: 'center' }}>
              <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img style={{ marginTop: '5px', width: '80px', height: '80px' }} src={Rasm_5} alt="icon" />
                  <p style={{ color: 'white', marginTop: '5px', width: '150px', fontSize: '14px' }}>
                    {t("hero.hero_text_1")}
                  </p>
                <h1 style={{ marginTop: '50px', width: '100%', fontSize: '30px', fontWeight: '600', color: 'white' }}>
                  {t("hero.hero_text_2")}
                </h1>
              </ul>
            </div>
          </SwiperSlide>


          <SwiperSlide
            style={{
              backgroundImage: `url(${Rasm_8})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
             <div style={{ color: 'white', textAlign: 'center' }}>
              <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img style={{ marginTop: '5px', width: '80px', height: '80px' }} src={Rasm_5} alt="icon" />
                  <p style={{ color: 'white', marginTop: '5px', width: '150px', fontSize: '14px' }}>
                    {t("hero.hero_text_1")}
                  </p>
                <h1 style={{ marginTop: '50px', width: '100%', fontSize: '30px', fontWeight: '600', color: 'white' }}>
                  {t("hero.hero_text_2")}
                </h1>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Button
        style={{ marginTop: '10px', marginBottom: '3px', width: '150px', backgroundColor: 'black', color: 'white', hover: { backgroundColor: 'blue' } }}
        onClick={showModal}
      >
        {t("main.main_text_3")}
      </Button>

      <Modal open={open} footer={null} onCancel={closeModal}>
        <h1 style={{ textAlign: 'center', fontSize: '24px' }}>
          Ma'lumotlarni to'ldiring
        </h1>
        <p style={{ textAlign: 'center', fontSize: '18px', color: 'blue' }}>
          Biz siz bilan imkon qadar tez bog'lanamiz va mahsulotingizni yetkazib beramiz. Xizmatimiz bepul!
        </p>
        <Form form={form} layout="vertical">
          <Form.Item
            label="Ism"
            name="name"
            rules={[
              { required: true, message: 'Ismingizni kiriting' },
              { min: 5, message: 'Ism 5 tadan kam bo\'lmasligi kerak' },
            ]}
          >
            <Input style={{ width: '100%', height: '50px' }} placeholder="Ismingizni kiriting" />
          </Form.Item>
          <Form.Item
            label="Familiya"
            name="surname"
            rules={[
              { required: true, message: 'Familiyangizni kiriting' },
              { min: 5, message: 'Familiya 5 tadan kam bo\'lmasligi kerak' },
            ]}
          >
            <Input style={{ width: '100%', height: '50px' }} placeholder="Familiyangizni kiriting" />
          </Form.Item>
          <Form.Item
            label="Telefon raqam"
            name="number"
            rules={[
              { required: true, message: 'Raqamingizni kiriting' },
              {
                pattern: /^\d+$/,
                message: 'Telefon raqam faqat raqamlardan iborat bo\'lishi kerak',
              },
            ]}
          >
            <Input style={{ width: '100%', height: '50px' }} placeholder="Telefon raqamingizni kiriting" />
          </Form.Item>
          <Button style={{ width: '100%', height: '50px', backgroundColor: 'blue', color: 'white' }} onClick={sendMessage}>
            Yuborish
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Hero;
