import React from 'react';
import productDetails from '../../data/productDetails';
import BtnCallAction from '../BtnCart';
import BtnCounter from '../BtnCounter';
import ImgViewer from '../ImgViewer';
import cart from '../../svg/icon-cart.svg'

import "./Product.css";

const Product = () => {

    const fromBtnCounter = () => {

    }

    return (
        <>

            {productDetails.map(product => (
                <section className="section__product container">
                    <ImgViewer arr={product} />
                    <div className='product__container'>
                        <span className='company__name'>Sneaker company</span>
                        <h1 className='product__title'>{product.title}</h1>
                        <p className='product__description'>{product.description}</p>
                        <div className='product__price__sale'>
                            <span className='product__price'>${product.price}.00</span>
                            <span className='product__sale'>50%</span>
                        </div>
                            <span className='product__price--after'>${product.price*2}.00</span>
                            <div className='button__area'>
                                <BtnCounter fromBtnCounter={fromBtnCounter} />
                                <BtnCallAction img={cart} alt="Cart icon" text="Add to cart" />
                            </div>
                    </div>
                </section>
            ))}

        </>
    )
}

export default Product