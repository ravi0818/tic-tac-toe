import React from "react";

export const Cell = ({ value, onClick }) => {
  return (
    <div>
      <button className="cell" onClick={onClick}>
        {value}
      </button>
    </div>
  );
};
