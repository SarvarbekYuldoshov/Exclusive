import React from 'react';
import "./Menu.css";
import Rasm_27 from "../../images/rasm27.png";
import Rasm_28 from "../../images/rasm28.png";
import Rasm_29 from "../../images/rasm29.png";
import Rasm_30 from "../../images/rasm30.png";
import Rasm_31 from "../../images/rasm31.png";
import { useTranslation } from 'react-i18next';

const Menu = () => {
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
  const closeModal = () => setOpen(false);
  return (
    <div id='navbar3' className=''>
      <div className='mx-auto max-w-[1200px] p-[20px]'>
        <ul className=''>
          <li className='flex items-center gap-[10px]'>
            <img className='w-[20px] h-[40px]' src={Rasm_27} alt="" />
            <p className='w-[130px] h-[20px] font-poppins text-[16px] font-semibold leading-[20px] text-left text-[#DB4444]'>
              {t("menu.menu_text_1")}
            </p>
          </li>
          <h1 className='mt-[20px] w-[306px] h-[48px] font-inter text-[36px] font-semibold leading-[48px] tracking-[0.04em] text-left text-black'>
          {t("menu.menu_text_2")}
          </h1>
        </ul>

        <div className='mt-[40px] flex flex-wrap justify-between'>
          <div className=' w-[100%] lg:w-[48%] bg-black relative p-[20px] mb-[20px]'>
            <h1 className='text-[24px] font-semibold text-left text-[#FAFAFA]'>
            {t("menu.menu_text_3")}
            </h1>
            <p className='mt-[20px] text-[14px] font-normal text-left text-[#FAFAFA]'>
            {t("menu.menu_text_4")}
            </p>
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
            <img className='w-[280px]' src={Rasm_28} alt="" />
          </div>

          <div className='w-[100%] lg:w-[48%] bg-black menu-img relative p-[20px] mb-[20px] flex items-center justify-between'>
            <div>
              <h2 className='text-[24px] font-semibold text-left text-[#FAFAFA]'>
              {t("menu.menu_text_6")}
              </h2>
              <p className='mt-[20px] text-[14px] font-normal text-left text-[#FAFAFA]'>
              {t("menu.menu_text_7")}
              </p>
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
            <img className='w-[180px]' src={Rasm_29} alt="" />
          </div>

          <div className='w-[100%] lg:w-[48%] bg-black p-[20px] mb-[20px] relative'>
            <img className='w-[150px] h-[150px] absolute top-[-20px] right-0' src={Rasm_30} alt="" />
            <h3 className='mt-[120px] text-[24px] font-semibold text-left text-[#FAFAFA]'>
            {t("menu.menu_text_9")}
            </h3>
            <p className='mt-[20px] text-[14px] font-normal text-left text-[#FAFAFA]'>
            {t("menu.menu_text_11")}
            </p>
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

          <div className='w-[100%] lg:w-[48%] bg-black p-[20px] mb-[20px] relative'>
            <img className='w-[180px] h-[180px] absolute top-[-20px] right-0' src={Rasm_31} alt="" />
            <h4 className='mt-[120px] text-[24px] font-semibold text-left text-[#FAFAFA]'>
            {t("menu.menu_text_13")}
            </h4>
            <p className='mt-[20px] text-[14px] font-normal text-left text-[#FAFAFA]'>
            {t("menu.menu_text_14")}
            </p>
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
        </div>
      </div>
    </div>
  );
};

export default Menu;
