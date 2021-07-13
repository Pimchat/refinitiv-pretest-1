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
