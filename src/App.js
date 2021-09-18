import react, { useState } from "react";
import { Board } from "./components/Board";

function App() {
  const [state, setstate] = useState({
    board: Array(9).fill(null),
    isNext: true,
    count: 0,
  });
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board state={state} setstate={setstate} />
    </div>
  );
}

export default App;
