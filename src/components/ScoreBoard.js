import React from 'react'
import "./ScoreBoard.css";
const ScoreBoard = ({scores,xPlaying}) => {
    const {xscore,oscore}=scores;
  return (
    <div className="rap">
        <span className={`board x ${!xPlaying && "inactive"}`}>X Score - {xscore} </span>
        <span className={`board o ${xPlaying && "inactive"}`}>O Score- {oscore} </span>
        
    </div>
  )
}

export default ScoreBoard;
