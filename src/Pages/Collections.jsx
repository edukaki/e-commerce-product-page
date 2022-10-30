import React from 'react'
import Gallery from '../components/Gallery'
import Title from '../components/Title'

const Collections = ({productItems, handleAddProduct}) => {
    return (
        <>
        <Title text="Collections" />
        <Gallery productItems={productItems} handleAddProduct={handleAddProduct} collection="all" />
        </>
    )
}

export default Collections