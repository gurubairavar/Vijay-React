import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={{ padding:"10px",marginRight: "10px" }}>
         Increment
      </button>
      <button onClick={decrement} style={{ padding:"10px",marginRight: "10px" }}> Decrement</button>
    </div>
  );
}

export default Counter;
