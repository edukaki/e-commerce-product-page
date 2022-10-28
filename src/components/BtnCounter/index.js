import React, { useState } from 'react'
import './BtnCounter.css'


export const BtnCounter = ({ toParent }) => {
    let [count, setCount] = useState(0);

    const handleChange = counter => {
        toParent(counter)
    }

    handleChange(count);
    return (
        <div className='button__counter'>
            <button onClick={() => {
                if (count > 0) {
                    setCount(count - 1);
                    handleChange(count);
                }
            }}>--</button>
            <span>{count}</span>
            <button onClick={() => {
                setCount(count + 1);
            }}
            >+</button>
        </div>
    )
}

export default BtnCounter
