import React, { useEffect, useState } from 'react';
import Rasm_26 from '../../images/rasm26.png';
import { Button, Modal, Form, Input, message } from 'antd';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date('2024-12-31T00:00:00');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, [targetDate]);

  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const sendMessage = () => {
    form.validateFields()
      .then((values) => {
        const { name, surname, number } = values;
        const token = "your-telegram-bot-token";
        const chat_id = "your-chat-id";
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
    <div className="bg-black py-10" id='sotibolish' >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center px-5 md:px-10">
        <div className="md:w-1/2">
          <p className="text-[#00FF66] font-poppins font-semibold text-sm md:text-base mb-4">
            {t("main.main_text_1")}
          </p>
          <h1 className="text-[#FAFAFA] font-inter font-semibold text-3xl md:text-5xl leading-tight md:leading-snug mb-6">
          {t("main.main_text_2")}
          </h1>
          <ul className="flex gap-4 mb-8">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, index) => (
              <li key={unit} className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-full">
                <p className="font-poppins font-semibold text-lg text-black">
                  {Object.values(timeLeft)[index]}
                </p>
                <span className="font-poppins text-xs text-black">{unit}</span>
              </li>
            ))}
          </ul>
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
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
            src={Rasm_26}
            alt="Music Experience"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
