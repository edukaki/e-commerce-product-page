import React, { useState } from 'react'
import './ImgViewer.css'

const ImgViewer = (props) => {
    const arr = props.arr;
    const [index, setIndex] = useState(0);


    return (
        <>
                <div className="product__container">
                    <img className="product__img--big" src={arr.src[index]} alt="shoes" />
                    <div className="product__thumbnail__container">
                        {arr.src.map((thumbnail, thumbnailId) => (
                            <img className={thumbnailId===index ? "active" : ""} src={thumbnail} alt="" key={thumbnailId}
                                onClick={() => setIndex(thumbnailId)}
                            />
                        ))}
                    </div>
                </div>
        </>
    )
}

export default ImgViewer
