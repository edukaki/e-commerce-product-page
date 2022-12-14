import React, { useState} from 'react';
import BtnQuantity from '../BtnQuantity';
import ImgViewer from '../ImgViewer';
import cartIcon from '../../svg/icon-cart.svg'
import { useParams } from 'react-router-dom';

import "./Product.css";
import '../BtnCallAction/BtnCallAction.css';


const Product = ({productItems, handleAddProduct}) => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const productItem = productItems[id-1];
    return (
        <>
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
                            <span className='product__price--after'>${productItem.price*quantity*2}.00</span>
                            <div className='button__area'>
                                <BtnQuantity quantity={quantity} setQuantity={setQuantity} />
                                <button className='button__call_action' onClick={() => handleAddProduct(productItem,quantity)}><img src={cartIcon} alt="Cart Icon" /> Add to cart</button>
                            </div>
                    </div>
                </section>
        </>
    )
}

export default Product