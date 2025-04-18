import React, { useState } from 'react';
import "./Menu.css";
import Rasm_27 from "../../images/rasm27.png";
import Rasm_28 from "../../images/rasm28.png";
import Rasm_29 from "../../images/rasm29.png";
import Rasm_30 from "../../images/rasm30.png";
import Rasm_31 from "../../images/rasm31.png";
import { useTranslation } from 'react-i18next';
import { Button, Modal, message, Input, Form } from 'antd';

const CustomModal = ({ visible, onClose, form, sendMessage }) => {
  return (
    <Modal open={visible} footer={null} onCancel={onClose}>
      <h1 className='flex items-center justify-center text-2xl md:text-3xl'>Malumotlarni tuldiring</h1>
      <p className='text-center text-lg md:text-xl text-blue-600'>
        Biz siz bilan imkon qadar tez bog`lanamiz va sizning mahsulotingizni yetkazib beramiz. Xizmatimiz bepul!
      </p>
      <Form form={form} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: 'Ismingizni kiriting' },
            { min: 5, message: "Ism 5 ta belgidan kam bo'lmasligi kerak" }
          ]}
        >
          <Input className='w-full h-[50px] md:w-[480px]' placeholder='Ismingizni kiriting' />
        </Form.Item>
        <Form.Item
          label="Surname"
          name="surname"
          rules={[
            { required: true, message: 'Familiyangizni kiriting' },
            { min: 5, message: "Familiya 5 ta belgidan kam bo'lmasligi kerak" }
          ]}
        >
          <Input className='w-full h-[51xpx] md:w-[480px]' placeholder='Familiyangizni kiriting' />
        </Form.Item>
        <Form.Item
          label="Number"
          name="number"
          rules={[
            { required: true, message: 'Raqamingizni kiriting' },
            {
              pattern: /^\+998\d{9}$/,
              message: 'Telefon raqam +998 bilan boshlanib, 9 ta raqam bilan davom etishi kerak'
            }
          ]}
        >
          <Input className='w-full h-[50px] md:w-[480px]' placeholder='+998' />
        </Form.Item>
        <Button className='w-full md:w-[480px] h-[50px]' onClick={sendMessage} type="primary">
          Yuborish
        </Button>
      </Form>
    </Modal>
  );
};

const Menu = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const sendMessage = () => {
    form.validateFields()
      .then(values => {
        const { name, surname, number } = values;
        const token = "7288526920:AAH-vd_HYqMjr_qE5zG6idFBNxfFeMi9aFo";
        const chat_id = "6801549705";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const messageText = `Ism: ${name}\nFamiliya: ${surname}\nNumber: ${number}\nMahsulot: ${selectedItem?.name}\nNarxi: ${selectedItem?.price}`;

        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id, text: messageText })
        })
          .then(res => res.json())
          .then(res => {
            message.success("Yuborildi");
            setOpen(false);
            form.resetFields();
          })
          .catch(err => {
            console.error(err);
            message.error("Yuborishda xatolik yuz berdi");
          });
      })
      .catch(() => {
        message.error("Iltimos, barcha maydonlarni to'ldiring!");
      });
  };

  const showModal = () => setOpen(true);
  const closeModal = () => {
    setOpen(false);
    form.resetFields(); // Reset the form fields when the modal is closed
  };

  return (
    <div id='navbar'>
      <div className='mx-auto max-w-[1200px] p-[20px]'>
        <ul className=''>
          <li className='flex items-center gap-2 md:gap-4'>
            <img className='w-5 h-8 md:w-6 md:h-10' src={Rasm_27} alt="" />
            <p className='w-[130px] h-[20px] font-poppins text-sm md:text-lg font-semibold leading-[20px] text-left text-[#DB4444]'>
              {t("menu.menu_text_1")}
            </p>
          </li>
          <h1 className='mt-5 text-2xl md:text-4xl font-semibold text-left text-black'>
            {t("menu.menu_text_2")}
          </h1>
        </ul>

        <div className='mt-14 flex flex-wrap justify-between'>
          {/* Card 1 */}
          <div className='w-full lg:w-[48%] bg-black relative p-5 mb-5'>
            <h1 className='text-lg md:text-2xl font-semibold text-left text-[#FAFAFA]'>
              {t("menu.menu_text_3")}
            </h1>
            <p className='mt-5 text-sm md:text-base text-left text-[#FAFAFA]'>
              {t("menu.menu_text_4")}
            </p>
            <Button className='mt-4 w-[150px] bg-black text-white hover:bg-blue-600' onClick={showModal}>
              {t("main.main_text_3")}
            </Button>
            <img className='w-[280px] mt-4 bg-cover' src={Rasm_28} alt="" />
          </div>

          {/* Card 2 */}
          <div className='w-full lg:w-[48%] bg-black p-5 mb-5 relative'>
            <h2 className='text-lg md:text-2xl font-semibold text-left text-[#FAFAFA]'>
              {t("menu.menu_text_6")}
            </h2>
            <p className='mt-5 text-sm md:text-base text-left text-[#FAFAFA]'>
              {t("menu.menu_text_7")}
            </p>
            <Button className='mt-4 w-[150px] bg-black text-white hover:bg-blue-600' onClick={showModal}>
              {t("main.main_text_3")}
            </Button>
            <img className='w-[180px] mt-4' src={Rasm_29} alt="" />
          </div>

          {/* Card 3 */}
          <div className='w-full lg:w-[48%] bg-black p-5 mb-5 relative'>
            <img className='w-[150px] h-[150px] absolute top-[-20px] right-0' src={Rasm_30} alt="" />
            <h3 className='mt-20 text-lg md:text-2xl font-semibold text-left text-[#FAFAFA]'>
              {t("menu.menu_text_9")}
            </h3>
            <p className='mt-5 text-sm md:text-base text-left text-[#FAFAFA]'>
              {t("menu.menu_text_11")}
            </p>
            <Button className='mt-4 w-[150px] bg-black text-white hover:bg-blue-600' onClick={showModal}>
              {t("main.main_text_3")}
            </Button>
          </div>

          {/* Card 4 */}
          <div className='w-full lg:w-[48%] bg-black p-5 mb-5 relative'>
            <img className='w-[180px] h-[180px] absolute top-[-20px] right-0' src={Rasm_31} alt="" />
            <h4 className='mt-20 text-lg md:text-2xl font-semibold text-left text-[#FAFAFA]'>
              {t("menu.menu_text_13")}
            </h4>
            <p className='mt-5 text-sm md:text-base text-left text-[#FAFAFA]'>
              {t("menu.menu_text_14")}
            </p>
            <Button className='mt-4 w-[150px] bg-black text-white hover:bg-blue-600' onClick={showModal}>
              {t("main.main_text_3")}
            </Button>
          </div>
        </div>

        <CustomModal visible={open} onClose={closeModal} form={form} sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Menu;
