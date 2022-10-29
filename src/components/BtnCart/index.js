import React, { useState } from 'react'
import "./BtnCart.css"
import cartIcon from "../../svg/icon-cart.svg"
import trash from "../../svg/icon-delete.svg"

const BtnCart = ({ cartItems }) => {
    const [showCart, setShowCart] = useState(false);
    
    return (
        <div className="nav-cart">
            <img src={cartIcon} alt='cart' width="20" onClick={() => setShowCart(!showCart)} />
            <span className='nav-cart--counter'>0</span>
            {showCart && (
                <div className='btn__cart--show'>
                    <h3 className='cart__title'>Cart</h3>
                    {cartItems.length === 0 && (
                        <div>Your cart is empty.</div>
                    )}
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart__items__list">
                            <div className='cart__items__list--container'>
                                <img className='cart__items__list--img' src={item.src[0]} alt="Products" />
                                <div>
                                    <p>{item.title}</p>
                                    <div className='price__container'>
                                        <p>${item.price}.00 x {item.quantity} <strong>&nbsp;${item.price * item.quantity}</strong></p>
                                    </div>
                                </div>
                                <button className='cart__items__list--trash'><img src={trash} alt="Trash icon" /></button>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default BtnCart
