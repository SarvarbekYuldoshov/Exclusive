import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import Data from '../Data/Data'

const Korzinka = () => {
    const { id } = useParams()
    const [single, setSingle] = useState([])

    useEffect(() => {
        if (id) {
            const updateCard = Data.filter((item) => item.id.toString() === id)
            setSingle(updateCard)
        }
    }, [id])

    return (
        <div className='max-w-[1200px] mx-auto p-[20px] justify-center'>
            <h1 className='ml-[350px] text-[20px] max-sm:ml-[20px] '>
                Siz Tanlagan mahsulot shu yerda
            </h1>
            {
                single.length > 0 ? (
                    single.map(item => (
                        <div key={item.id} className='relative p-4 ml-[295px]'>
                            <img src={item.img1} alt={item.name} className='w-[300px] h-[350px] ml-[30px] max-sm:ml-[70px]' />
                            <h1 className='text-xl text-[40px] font-bold mt-[20px] max-sm:ml-[40px]'>{item.name}</h1>
                            <ul className='flex items-center gap-[5px] mt-2 max-sm:ml-[20px]'>
                                <h2 className='text-lg text-[30px] text-gray-600'>{item.price}</h2>
                                <img src={item.img2} alt={item.name} className='w-[250px] h-[40px]' />
                                <p className='ml-2 text-[30px] mt-[20px]'>{item.text}</p>
                            </ul>
                        </div>
                    ))
                ) : (
                    <p className='text-center text-lg text-gray-500'>Mahsulot topilmadi</p>
                )
            }
        </div>
    )
}

export default Korzinka

