import './App.css';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';
import Board from "./components/Board";
import { useState } from 'react';


const App =() =>{
  const win_con=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  
  ]

   const [scores,setScores]=useState({xscore:0 , oscore:0});
   const [board,setBoard]=useState(Array(9).fill(null));
   const [xPlaying,setxPlaying]=useState(true);
   const [gameOver,setGameOver]=useState(false);

   const handleClick=(boxIdx)=>{
    const updatedBoard=board.map((value,idx)=>{
      if(idx===boxIdx){
         return  xPlaying?"X":"O";
      }
      else{
        return value;
      }
    })
    setBoard(updatedBoard);
    const winner=checkWinner(updatedBoard);
    if(winner){
      if(winner==="X"){
        let {xscore}=scores;
        xscore+=1;
        setScores({...scores,xscore});

      }
      else{
        let {oscore}=scores;
        oscore+=1;
        setScores({...scores,oscore});
      }
    }

    setxPlaying(!xPlaying);
    

   }
 

   const checkWinner=(board)=>{
    for(let i=0;i<win_con.length;i++){
      const [x,y,z]=win_con[i];
      if(board[x]&& board[x]===board[y]&& board[y]===board[z]){
        setGameOver(true);
        return board[x];
      }
    }
   }

   const resetBoard=()=>{
    setGameOver(false);
    setBoard(Array(9).fill(null));

   }


  return (
    <div className="mainb">
      <h1>Tic-Tac-Toe</h1>
    <ScoreBoard scores={scores} xPlaying={xPlaying}/>
    <Board board={board} onClick={gameOver? resetBoard:handleClick}/>
    <ResetButton reset={resetBoard}/>
    </div>
  );
}
export default App;

