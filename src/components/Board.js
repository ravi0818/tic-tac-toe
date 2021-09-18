import React from "react";
import { Cell } from "./Cell";
import { calculateWinner } from "./Winner";

export const Board = ({ state, setstate }) => {
  const winner = calculateWinner(state.board);

  const handleClick = (position) => {
    if (state.board[position] || winner) return;
    console.log(state);
    setstate((prev) => {
      console.log(prev);
      const newArray = prev.board.map((element, pos) => {
        if (pos === position) {
          return state.isNext ? "X" : "O";
        }
        return element;
      });
      console.log(newArray);
      return { board: newArray, isNext: !state.isNext };
    });
  };

  const renderCell = (pos) => {
    return <Cell value={state.board[pos]} onClick={() => handleClick(pos)} />;
  };
  const msg = winner
    ? `Winner is: ${winner}`
    : `Next is: ${state.isNext ? "X" : "O"}`;
  return (
    <div>
      <h3>{msg}</h3>
      {/* onClick={() => handleClick(0)}  */}
      <div className="row">
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </div>
      <div className="row">
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </div>
      <div className="row">
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
    </div>
  );
};
