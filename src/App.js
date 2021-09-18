import react, { useState } from "react";
import { Board } from "./components/Board";

function App() {
  const [state, setstate] = useState({
    board: Array(9).fill(null),
    isNext: true,
  });
  return (
    <div className="App">
      {console.log(state)}
      <h1>Tic Tac Toe</h1>
      <Board state={state} setstate={setstate} />
    </div>
  );
}

export default App;
