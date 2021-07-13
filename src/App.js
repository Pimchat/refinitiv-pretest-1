import React, { useState } from "react";
import "./App.css";
import FirstCol from "./components/FirstColumn.js";
import LastCol from "./components/LastColumn.js";
import MiddleCol from "./components/MiddleColumn.js";

function App() {
  const [resInput, setResInput] = useState(1);
  const [result, setResult] = useState("...");

  return (
    <div className="App">
      <div className="App2">
        <FirstCol setResInput={setResInput} />
        <MiddleCol
          resInput={parseInt(resInput)}
          setResult={setResult}
          result={result}
        />
        <LastCol result={result} />
      </div>
    </div>
  );
}

export default App;
