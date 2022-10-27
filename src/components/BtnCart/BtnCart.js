import React from "react";
import './BtnCart.css'
import cart from '../../svg/icon-cart.svg'


const BtnCart = (props) => {
    return (
        <button className='button__add_cart'><img src={cart} alt="cart icon" />{props.text}</button>
    )
}

export default BtnCart