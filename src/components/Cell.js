import React from "react";

export const Cell = ({ value, onClick, isWinningCell }) => {
  return (
    <div>
      <button
        className="cell"
        onClick={onClick}
        style={{
          color: value == "X" ? "black" : "white",
          fontSize: isWinningCell ? "100px" : "80px",
        }}
      >
        {value}
      </button>
    </div>
  );
};
