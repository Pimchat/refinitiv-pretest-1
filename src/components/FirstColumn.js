<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./FirstColumn.css";

function FirstCol({ setResInput }) {
  const [inputNum, setInputNum] = useState(1);

  useEffect(() => {
    setResInput(inputNum);
  }, [inputNum]);

  return (
    <div id="first-col">
      <input
        value={inputNum}
        type="text"
        onChange={(e) => {
          e.target.value === "-" || e.target.value < 0
            ? setInputNum(1)
            : e.target.value % 1 === 0
            ? setInputNum(parseInt(e.target.value))
            : setInputNum(Math.round(e.target.value));
        }}
      />
    </div>
  );
}

export default FirstCol;
=======
import React, { useEffect, useState } from "react";
import "./FirstColumn.css";

function FirstCol({ setResInput }) {
  const [inputNum, setInputNum] = useState(1);

  useEffect(() => {
    setResInput(inputNum);
  }, [inputNum]);

  return (
    <div id="first-col">
      <input
        value={inputNum}
        onChange={(e) => {
          e.target.value === "-"
            ? setInputNum(1)
            : e.target.value < 1
            ? setInputNum(1)
            : e.target.value % 1 === 0
            ? setInputNum(e.target.value)
            : setInputNum(Math.round(e.target.value));
        }}
        type="text"
      />
      <br />
      <p>this is {inputNum} .</p>
    </div>
  );
}

export default FirstCol;
>>>>>>> 4de6b1f4cc2757b5b90f0a0d2be3a05123ad83d7
