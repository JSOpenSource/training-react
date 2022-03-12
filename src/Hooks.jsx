import { useState } from "react";

function Hooks() {
  let [count, setCount] = useState(0);
  let [scount, setScount] = useState(0);

  function increment() {
    setCount((c) => c + 1);
    setScount(Math.floor((1 + count) / 5));
  }

  function decrement() {
    setCount((c) => c - 1);
    setScount(Math.floor((count - 1) / 5));
  }

  function incAsync(){
    setTimeout(increment, 5000);
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incAsync}>Increment Async</button>
      <h1>{count}</h1>
      <h1>{scount}</h1>
    </div>
  );
}

export default Hooks;
