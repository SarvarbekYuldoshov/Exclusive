import React, { useState } from 'react';
import './Hero.css';
import Rasm_5 from '../../images/rasm5.png';
import Rasm_7 from '../../images/rasm7.png';
import Rasm_8 from '../../images/rasm43.png';
import Rasm_9 from '../../images/rasm44.png';
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

        const token = 'YOUR_BOT_TOKEN';
        const chat_id = 'YOUR_CHAT_ID';
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
          .then((res) => res.json())
          .then((res) => {
            if (res.ok) {
              message.success("Ma'lumot yuborildi");
              setOpen(false);
              form.resetFields();
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
  const closeModal = () => setOpen(false);

  return (
    <div className="bg-black text-center mt-[150px] max-sm:mt-[120px]">
      <div className="flex flex-col md:flex-row items-center mx-auto max-w-[1200px] p-6 md:p-10">
        <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <li className="flex items-center">
            <img className="mt-5" src={Rasm_5} alt="" />
            <p className="text-[#FAFAFA] mt-5 w-[150px] md:w-auto">{t("hero.hero_text_1")}</p>
          </li>
          <h1 className="mt-10 md:mt-0 w-[294px] md:w-auto font-inter text-[36px] md:text-[48px] font-semibold leading-[44px] md:leading-[60px] tracking-[0.04em] text-left text-[#FAFAFA]">
            {t("hero.hero_text_2")}
          </h1>
        </ul>

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
          className="mySwiper mt-5 md:mt-0"
        >
          <SwiperSlide>
            <img className="w-[300px] h-[250px] md:w-[400px] md:h-[300px] mx-auto" src={Rasm_7} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[300px] h-[250px] md:w-[400px] md:h-[300px] mx-auto" src={Rasm_8} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[250px] h-[200px] md:w-[350px] md:h-[300px] mx-auto" src={Rasm_9} alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </div>

      <Button className="w-[130px] md:w-[150px] bg-black text-white hover:bg-blue-600 mt-5 md:mt-[-50px]" onClick={showModal}>
        {t("main.main_text_3")}
      </Button>

      <Modal open={open} footer={null} onCancel={closeModal}>
        <h1 className="text-center text-[30px]">Ma'lumotlarni to'ldiring</h1>
        <p className="text-center text-[20px] text-blue-600">
          Biz siz bilan imkon qadar tez bog'lanamiz va sizning mahsulotingizni yetkazib beramiz. Xizmatimiz bepul!
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
            <Input className="w-full h-[50px]" placeholder="Ismingizni kiriting" />
          </Form.Item>
          <Form.Item
            label="Familiya"
            name="surname"
            rules={[
              { required: true, message: 'Familiyangizni kiriting' },
              { min: 5, message: 'Familiya 5 tadan kam bo\'lmasligi kerak' },
            ]}
          >
            <Input className="w-full h-[50px]" placeholder="Familiyangizni kiriting" />
          </Form.Item>
          <Form.Item
            label="Telefon raqam"
            name="number"
            rules={[
              { required: true, message: 'Raqamingizni kiriting' },
              {
                pattern: /^\d{9}$/,
                message: 'Telefon raqam 9 ta raqamdan iborat bo\'lishi kerak',
              },
            ]}
          >
            <Input className="w-full h-[50px]" placeholder="Telefon raqamingizni kiriting" />
          </Form.Item>
          <Button className="w-full h-[50px] text-white bg-blue-600 hover:bg-blue-700" onClick={sendMessage}>
            Yuborish
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Hero;
