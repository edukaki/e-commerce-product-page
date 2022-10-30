import React from 'react'
import "./Title.css"

const Title = ({ text }) => {
    return (
        <div className='gallery__title__container'>
            <h1 className='gallery__title'>
                {text}
            </h1>
        </div>
    )
}

export default Title
