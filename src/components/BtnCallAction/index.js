import React from "react";
import './BtnCallAction.css'



const BtnCallAction = (props) => {
    const img = !props.img ? "" : <img src={props.img} alt={props.alt} />

    return (
        <button className='button__call_action'>{img}{props.text}</button>
    )
}

export default BtnCallAction