import React from 'react'

const Cart = ({ cartItems }) => {
    return (
        <>
            <div>
                cartItems
            </div>

            {cartItems.length === 0 && (
                <div>Your cart is empty.</div>
            )}
            {cartItems.map((item) => (
            <div key={item.id} className="cart__items__list">
                <img src={item.src[1]} alt="" />
            </div>
            ))}

        </>
    )
}

export default Cart
