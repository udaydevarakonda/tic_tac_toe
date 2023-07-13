import React from 'react'
import './Board.css'
import Button from './Button';

const Board = ({board,onClick}) => {
  return (
    <div className='sec'>

    <p className='left'>X</p>
    <div className="boardb">
      {
      board.map((value,idx) =>{
        return <Button value={value} onClick={()=> value ===null && onClick(idx)}/>
      })}
      
    </div>
    <p className='right'>O</p>
    </div>
  )
}

export default Board;
