import React, { useState } from 'react';
import "./Menu.css";
import { useTranslation } from 'react-i18next';
import { Button, Modal, message, Input, Form } from 'antd';

const CustomModal = ({ visible, onClose, form, sendMessage }) => {
  return (
    <Modal open={visible} footer={null} onCancel={onClose}>
      <h1 className='flex items-center justify-center text-[30px]'>Malumotlarni tuldiring</h1>
      <p className='justify-center text-[20px] text-[blue]'>
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
          <Input className='w-full h-[50px]' placeholder='Ismingizni kiriting' />
        </Form.Item>
        <Form.Item
          label="Surname"
          name="surname"
          rules={[
            { required: true, message: 'Familiyangizni kiriting' },
            { min: 5, message: "Familiya 5 ta belgidan kam bo'lmasligi kerak" }
          ]}
        >
          <Input className='w-full h-[50px]' placeholder='Familiyangizni kiriting' />
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
          <Input className='w-full h-[50px]' placeholder='+998' />
        </Form.Item>
        <Button className='w-full h-[50px] mt-4' onClick={sendMessage} type="primary">
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
        const messageText = `Ism: ${name}\nFamiliya: ${surname}\nNumber: ${number}`;

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
        <ul>
          {/* Other content */}
        </ul>

        <div className='mt-[60px] flex flex-wrap justify-between'>
          {/* Card components */}
        </div>

        <CustomModal visible={open} onClose={closeModal} form={form} sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Menu;
 