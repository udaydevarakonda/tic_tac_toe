import React from 'react'
import './ResetButton.css';

const ResetButton = ({reset}) => {
  return (
    <div className="rstbtn">
      <button className="btn" onClick={reset}>Reset</button>
    </div>
  )
}

export default ResetButton;
