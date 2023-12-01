// File: Game.js
"use client";

import React, { useState } from 'react';
import Board from './Board';
import CalculateWinner from './helper';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = CalculateWinner(board);


  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <div className="game-winner">
        {winner ? `Winner is ${winner}` : ''}
      </div>
      <button className="game-reset" onClick={handleResetGame}>
        Request game!
      </button>
    </div>
  );
};

export default Game;
