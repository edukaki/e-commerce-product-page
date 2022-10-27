import React, {useState} from 'react';
import productDetails from '../../data/productDetails';
import BtnCart from '../BtnCart/BtnCart';
import BtnCounter from '../BtnCounter';

import "./Product.css";

const Product = () => {
    const [index, setIndex] = useState(0);
    
    const fromBtnCounter = () => {

    }

    return (
        <>

            {productDetails.map(product => (
                <section className="section__product container">
                    <div className="product__container">
                        <img className="product__img--big" src={product.src[index]} alt="shoes" />
                        <div className="product__thumbnail__container">
                            {product.src.map((thumbnail, thumbnailId) => (
                                <img src={thumbnail} alt="" id={thumbnailId}
                                onClick={() => setIndex(thumbnailId)}
                                />
                            ))}
                        </div>
                    </div>
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
                                <BtnCart text="Add to cart" />
                            </div>
                    </div>
                </section>
            ))}

        </>
    )
}

export default Product