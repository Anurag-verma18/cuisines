import React from 'react'

const MenuItem = ({ img, title, price, desc }) => {
  return (
    <div className='menu-item'>
        <img className='img' src={img} alt={title} />
        <div className='item-info'>
            <div>
                <h5>{title}</h5>
                <span className='item-price'>${price}</span>
            </div>
            <p className='item-text'>{desc}</p>
        </div>
    </div>
  )
}

export default MenuItem