import React, { useState } from 'react'
import './BtnCounter.css'


export const BtnCounter = ({fromBtnCounter}) => {
    let [count, setCount] =useState(0);

    return (
        <div className='button__counter'>
            <button onClick={() => {
                if (count > 0) { setCount(count - 1) }
            }}>--</button>
            <span>{count}</span>
            <button onClick={() => fromBtnCounter(setCount(count + 1))}>+</button>
        </div>
    )
}

export default BtnCounter
