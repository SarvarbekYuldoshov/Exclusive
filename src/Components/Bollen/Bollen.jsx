import React from 'react'
import "./Bollen.css"
const Bollen = () => {
  return (
    <div className=''>
       <div className='bollen max-w-[1200px] mx-auto p-[20px]'>
          <h1 className=''>Zamonbop va eng yaxshi textnikalar bozori?Tanlangan elektronika uchun 50% gacha chegirma bilan gadjetlar kollektsiyangizni yangilang!</h1>
          <Button className='home-btn' onClick={showModal}>
        Foydalanuvchi ma'lumotlarini yuboring
      </Button>
      <Modal open={open} footer={null} onCancel={closeModal}>
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            rules={[
              { required: true, message: 'Ismingizni kiriting' },
              { min: 4, message: 'Ismingiz kamida 4 ta harfdan iborat bo\'lishi kerak' }
            ]}
          >
            <Input placeholder='Ismingizni kiriting' />
          </Form.Item>
          <Form.Item
            name="surname"
            rules={[
              { required: true, message: 'Familiyangizni kiriting' },
              { min: 4, message: 'Familiyangiz kamida 4 ta harfdan iborat bo\'lishi kerak' }
            ]}
          >
            <Input placeholder='Familiyangizni kiriting' />
          </Form.Item>
          <Form.Item
            name="number"
            rules={[
              { required: true, message: 'Raqamingizni kiriting' },
              { len: 9, message: 'Raqamingiz 9 ta raqamdan iborat bo\'lishi kerak' },
              { pattern: /^[0-9]+$/, message: 'Faqat raqam kiriting' }
            ]}
          >
            <Input addonBefore="+998" placeholder='Raqamingizni kiriting (9 ta raqam)' />
          </Form.Item>
          <Button onClick={sendMessage} type="primary">
            Yuborish
          </Button>
        </Form>
      </Modal>
    </div>
       </div>
    </div>
  )
}

export default Bollen
