import "./App.css";
import CheerButton from "./components/CheerButton";
import { useState } from "react";

// state = {letter : "M", setLetter: (value) => {state.letter = value}}
// rendering means that the component will load on the page with the data from its current state
function App() {
  const [letter, setLetter] = useState("Initial State");
  const [word, setWord] = useState("MAKERS");

  console.log(letter)

  return (
     <div className="app">
      <h1>Cheerleadr</h1>
      {word.split("").map((letter) => { 
        return <CheerButton key={ letter } letter={letter} setLetter={ setLetter } />
      })}
      {/* <CheerButton letter={"M"} setLetter={ setLetter } />
      <CheerButton letter={"A"} setLetter={ setLetter }/>
      <CheerButton letter={"K"} setLetter={ setLetter }/>
      <CheerButton letter={"E"} setLetter={ setLetter }/>
      <CheerButton letter={"R"} setLetter={ setLetter }/>
      <CheerButton letter={"S"} setLetter={ setLetter }/> */}
      <p>{letter}</p>
    </div>
  );
}

export default App;
