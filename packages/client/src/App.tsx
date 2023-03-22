import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Dog } from "@happy-tails/shared";

function App() {
  const [dog, setDog] = useState<Dog>({
    id: "1",
    name: "Fido",
    description: "A good dog",
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
