import React from "react";
import Buttons from "./ButtonCount";
import imgWoman from "../../img/mulher.png";
import "../Atv02.css";

export default function Woman({ count, setCount }) {
  return (
    <div className="counter">
      <div className="div">
        <h3>Mulheres</h3>
        <img className="imgPerson" src={imgWoman} alt="Woman" />
        <div className="divButton">
          <button className="button-increment" onClick={() => setCount(count + 1)}>+</button>
          <div className="count-display">{count}</div>
          <button className="button-decrement" onClick={() => count > 0 && setCount(count - 1)}>-</button>
        </div>
      </div>
    </div>
  );
}