import React from 'react'
import "./Cards.css"
const Cards = ({data}) => {
  return (
    <div className='Cards'>
        <div className='container Cards-container'>
           <img className='Cards-img' src={data.img}  alt="" />
           <h1 className='Cards-title'>{data.title}</h1>
           <img className='Cards-img-a' src={data.img1} alt="" />
           <p className='Cards-text'>{data.text}</p>
           <span className='Cards-span'>{data.price}</span>
           <button className='Cards-btn'>{data.button}</button>
        </div>
    </div>
  )
}
import "./Cards.css"
export default Cards