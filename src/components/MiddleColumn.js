import React, { useEffect, useState } from "react";
import "./MiddleColumn.css";

function MiddleCol({ resInput, setResult }) {
  const [method, setMethod] = useState("isPrime");
  const [ans, setAns] = useState("true");

  useEffect((resInput) => {
    if (method == "isPrime") {
      Prime(resInput);
    } else {
      Fibonacci(resInput);
    }
  });

  const methodChange = (e) => {
    setMethod(e.target.value);
  };

  const Fibonacci = (n) => {
    n = +n;
    console.log("inFib");
    if (n === 0 || n === 1) {
      console.log("fib: true");
      setAns("true");
    }

    let twoBefore = 0;
    let oneBefore = 1;
    let ans = 0;

    while (ans <= n) {
      ans = twoBefore + oneBefore;

      if (ans === n) {
        console.log("fib: true in while");
        setAns("true");
      }

      twoBefore = oneBefore;
      oneBefore = ans;
    }

    console.log("fib: false");
    setAns("false");
  };

  const Prime = (n) => {
    n = +n;
    console.log("inPrime");
    if (n < 2) {
      console.log("prime: false");
      setAns("false");
    }

    if (n === 2) {
      console.log("prime: true if");
      setAns("true");
    }

    if (n > 2) {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          console.log("prime: false if");
          setAns("false");
        } else {
          console.log("prime: true else");
          setAns("true");
        }
      }
    }
  };

  return (
    <div id="middle-col">
      <select value={method} onChange={methodChange}>
        <option selected value="isPrime">
          isPrime
        </option>
        <option value="isFibonacci">isFibonacci</option>
      </select>

      <div>isPrime or Fibonacci ` {resInput} `</div>
      <div>Method : {method} </div>
      <div>Ans : {ans} </div>
    </div>
  );
}

export default MiddleCol;
