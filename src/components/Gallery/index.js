import React from 'react'
import { Link } from 'react-router-dom';
import cartIcon from "../../svg/icon-cart.svg"

import "./Gallery.css"

const Gallery = ({productItems, handleAddProduct, collection}) => {
    const filter = collection == "all" ? productItems : productItems.filter((productItem) => productItem.collection === collection);
    return (
        <section className='gallery container'>
            {filter.map((productItem) => (
                <div className='product__card' key={productItem.id}>
                    <Link to={`/product/${productItem.collection}/${productItem.id}`}>
                        <img className='product__card__image' src={productItem.src[0]} alt="shoes" />
                    </Link>
                    <span className='product__card__title'>{productItem.title}</span>
                    <span className='product__card__price'>${productItem.price}</span>
                    <button className='button__call_action--gallery' onClick={() => handleAddProduct(productItem,1)}><img src={cartIcon} alt="Cart Icon" /> Add to cart</button>
                </div>
            ))}
        </section>
    )
}

export default Gallery
