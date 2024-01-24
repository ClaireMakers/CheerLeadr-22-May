import "./App.css";
import CheerButton from "./components/CheerButton";
import { useState } from "react";

// state = {letter : "M", setLetter: (value) => {state.letter = value}}
// rendering means that the component will load on the page with the data from its current state


function App() {
// React hooks - they keep track and interact with the state of a component.
//  > For instance, here, our hook [letter, setLetter] lets us update the value of "letter", which is held in the state of the component.
//  > useState is an in-built function in React, that lets you access and update the state of a component.
//  > When the state of a component is updated, for instance, when we press our buttons, the component re-renders, i.e. re-displays on the page
//   the right information from its state.
//   
  const [letter, setLetter] = useState("Initial State");
  const [word, setWord] = useState("MAKERS");

  console.log(letter)

  return (
     <div className="app">
      <h1>Cheerleadr</h1>
      {word.split("").map((letter) => { 
        return <CheerButton key={ letter } letter={letter} setLetter={ setLetter } />
      })}

      {/*The curly brackets signal that we are using JSX here - you can write JavaScript code directly inside of them.
        .split turns word into an array, then map allows us to create a button dynamically for each letter in the array.
        For instance, this could be really useful if down the line, I wanted to create some user input for the word itself
      */}
      <p>{letter}</p>
    </div>
  );
}

export default App;
