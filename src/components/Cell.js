import React from "react";

export const Cell = ({ value, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{value}</button>
    </div>
  );
};
