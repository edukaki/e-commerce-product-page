import React from 'react'
import "./Avatar.css"

const Avatar = (props) => {
  return (
    <>
      <img src={props.img} alt="Avatar" className='avatar'/>
    </>
  )
}

export default Avatar
