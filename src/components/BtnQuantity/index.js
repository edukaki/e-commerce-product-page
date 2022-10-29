import React from 'react'
import './BtnQuantity.css'


export const BtnQuantity = ({ quantity, setQuantity }) => {

    return (
        <div className='button__counter'>
            <button onClick={() => {
                if (quantity > 1) {
                    setQuantity(quantity - 1);
                }
            }}>--</button>
            <span>{quantity}</span>
            <button onClick={() => {
                setQuantity(quantity + 1);
            }}
            >+</button>
        </div>
    )
}

export default BtnQuantity
