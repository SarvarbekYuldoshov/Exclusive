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
        <div className='max-w-[1200px] mx-auto p-4 justify-center'>
            {
                single.length > 0 ? (
                    single.map(item => (
                        <div key={item.id} className='flex flex-col items-center sm:flex-row sm:justify-center p-4'>
                            <img src={item.img1} alt={item.name} className='w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] mb-4 sm:mb-0' />
                            <div className='sm:ml-6 text-center sm:text-left'>
                                <h1 className='text-[24px] font-bold mb-2'>{item.name}</h1>
                                <div className='flex flex-col items-center sm:items-start'>
                                    <h2 className='text-[20px] text-gray-600 mb-2'>{item.price}</h2>
                                    <img src={item.img2} alt={item.name} className='w-[200px] h-[40px] mb-2' />
                                    <p className='text-[16px] text-gray-500'>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-center text-lg text-gray-500'></p>
                )
            }
        </div>
    )
}

export default Korzinka;


