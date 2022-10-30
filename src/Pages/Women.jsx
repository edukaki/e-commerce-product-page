import React from 'react'
import Gallery from '../components/Gallery'
import Title from '../components/Title'

const Women = ({productItems, handleAddProduct}) => {
    return (
        <>
        <Title text="Women" />
        <Gallery productItems={productItems} handleAddProduct={handleAddProduct} collection="women" />
        </>
    )
}

export default Women