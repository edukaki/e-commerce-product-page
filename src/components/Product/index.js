import React from 'react';
import productDetails from '../../data/productDetails';

import "./Product.css";

const Product = () => {
    return (
        <>

            {productDetails.map(product => (
                <section className="section__product container">
                    <div className="product__container">
                        <img src={product.src[0]} alt="shoes" />
                        <div className="product__thumbnail__container">
                            {product.src.map(thumbnail => (
                                <img src={thumbnail} alt="" />
                            ))}
                        </div>
                    </div>
                    <div className='product__container'>
                        <span className='company__name'>Sneaker company</span>
                        <h1 className='product__title'>{product.title}</h1>
                        <p className='product__description'>{product.description}</p>
                        <div>
                            <span className='product__price'>{product.price}</span>
                            <span className='product__sale'>50%</span>
                            <span className='product__price--after'>{product.price*2}</span>
                        </div>
                    </div>
                </section>
            ))}

        </>
    )
}

export default Product