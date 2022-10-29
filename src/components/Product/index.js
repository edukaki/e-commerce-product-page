import React, { useState } from 'react';
import BtnCallAction from '../BtnCallAction';
import BtnQuantity from '../BtnQuantity';
import ImgViewer from '../ImgViewer';
import cartIcon from '../../svg/icon-cart.svg'

import "./Product.css";


const Product = ({productItems}) => {
    const [quantity, setQuantity] = useState(1);


    return (
        <>
            {productItems.map(productItem => (
                <section className="section__product container">
                    <ImgViewer arr={productItem} />
                    <div className='product__container'>
                        <span className='company__name'>Sneaker company</span>
                        <h1 className='product__title'>{productItem.title}</h1>
                        <p className='product__description'>{productItem.description}</p>
                        <div className='product__price__sale'>
                            <span className='product__price'>${productItem.price*quantity}.00</span>
                            <span className='product__sale'>50%</span>
                        </div>
                            <span className='product__price--after'>${productItem.price*2}.00</span>
                            <div className='button__area'>
                                <BtnQuantity quantity={quantity} setQuantity={setQuantity} />
                                <BtnCallAction img={cartIcon} alt="Cart icon" text="Add to cart" />
                            </div>
                    </div>
                </section>
            ))}

        </>
    )
}

export default Product