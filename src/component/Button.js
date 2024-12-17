import React from "react";

const Button = ({type,text,color,width,...props}) => {
  return (
    <button type={type} className={`ui button ${color} ${width}`} {...props}>{text}</button>
  )
}

export default Button;

