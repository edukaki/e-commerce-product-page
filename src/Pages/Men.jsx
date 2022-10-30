import React from 'react'
import Gallery from '../components/Gallery'
import Title from '../components/Title'

const Men = ({productItems, handleAddProduct}) => {
    return (
        <>
        <Title text="Men" />
        <Gallery productItems={productItems} handleAddProduct={handleAddProduct} collection="men" />
        </>
    )
}

export default Men