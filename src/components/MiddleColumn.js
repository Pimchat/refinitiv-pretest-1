import React, { useEffect, useState } from "react";
import "./MiddleColumn.css";

function MiddleCol({ resInput, setResult }) {
  const [method, setMethod] = useState("isPrime");

  useEffect(() => {
    console.log(resInput + 5);
    method === "isPrime" ? Prime(resInput) : Fibonacci(resInput);
  }, [resInput, method]);

  const methodChange = (e) => {
    setMethod(e.target.value);
  };

  const Fibonacci = (n) => {
    if (n === 0 || n === 1) {
      setResult("true");
      return;
    }

    let twoBefore = 0;
    let oneBefore = 1;
    let ans = 0;

    while (ans <= n) {
      ans = twoBefore + oneBefore;

      if (ans === n) {
        setResult("true");
        return;
      }

      twoBefore = oneBefore;
      oneBefore = ans;
    }

    setResult("false");
    return;
  };

  const Prime = (n) => {
    if (n < 2) {
      setResult("false");
      return;
    }

    if (n === 2) {
      setResult("true");
      return;
    }

    if (n > 2) {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          setResult("false");
          return;
        } else {
          setResult("true");
          return;
        }
      }
    }
  };

  return (
    <div id="middle-col">
      <select value={method} onChange={methodChange} id="drop-down">
        <option selected value="isPrime">
          isPrime
        </option>
        <option value="isFibonacci">isFibonacci</option>
      </select>
    </div>
  );
}

export default MiddleCol;
