import { Cell } from "./Cell";
import { calculateWinner } from "./Winner";

export const Board = ({ state, setstate }) => {
  // checking for winner each time state updated
  const winner = calculateWinner(state.board);

  const handleClick = (position) => {
    //   checking that current cell already filled or winner found
    if (state.board[position] || winner) return;

    // setstate for updating current state
    setstate((prev) => {
      const newArray = prev.board.map((element, pos) => {
        if (pos === position) {
          return state.isNext ? "X" : "O";
        }
        return element;
      });

      //creating new object for state
      return { board: newArray, isNext: !state.isNext, count: state.count + 1 };
    });
  };

  const reset = () => {
    setstate(() => {
      return {
        board: Array(9).fill(null),
        isNext: true,
        count: 0,
      };
    });
  };

  //renderCell returns cell for given position
  const renderCell = (pos) => {
    return <Cell value={state.board[pos]} onClick={() => handleClick(pos)} />;
  };

  //   message for player
  let msg = winner
    ? `Winner is: ${winner}`
    : `Next is: ${state.isNext ? "X" : "O"}`;
  //updating message if all cell are consumed
  if (state.count === 9 && !winner) msg = "Its a draw!";

  return (
    <div>
      <h2>{msg}</h2>
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
      <button id="reset" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};
