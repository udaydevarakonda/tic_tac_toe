import React from 'react'

import "./Button.css";

const Button = ({value,onClick}) => {
  const style= value==="X" ? "box x":"box o";
  return (
    <div>
      <button className={style} onClick={ onClick}>{value}</button>
    </div>
  )
}

export default Button;
