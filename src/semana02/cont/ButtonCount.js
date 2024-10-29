import React from "react";
import "../Atv02.css";

export default function Buttons({ count, setCount }) {
  return (
    <div className="divButton">
      <button onClick={() => setCount(count + 1)}>+</button>
      <div className="count">
        <h3>{count}</h3>
      </div>
      <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
    </div>
  );
}
