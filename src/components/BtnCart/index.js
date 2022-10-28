import React, { useState } from 'react'
import "./BtnCart.css"
import cartIcon from "../../svg/icon-cart.svg"

const BtnCart = (props) => {
    const data = !props.arr ? "Your cart is empty" : props.arr;
    const [showCart, setShowCart] = useState(false);

    return (
        <div className="nav-cart">
            <img src={cartIcon} alt='cart' width="20" onClick={() => setShowCart(!showCart)} />
            <span>0</span>
            {showCart && (
                <div className='btn__cart--show'>
                    <h3 className='cart__title'>Cart</h3>
                    {data}
                </div>
            )}
        </div>
    )
}

export default BtnCart
