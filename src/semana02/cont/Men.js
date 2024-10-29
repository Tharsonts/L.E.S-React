import React from "react";
import Buttons from "./ButtonCount";
import imgMan from "../../img/homem.png";
import "../Atv02.css";

export default function Men({ count, setCount }) {
  return (
    <div className="counter">
      <div className="div">
        <h3>Homens</h3>
        <img className="imgPerson" src={imgMan} alt="Man" />
        <div className="divButton">
          <button className="button-increment" onClick={() => setCount(count + 1)}>+</button>
          <div className="count-display">{count}</div>
          <button className="button-decrement" onClick={() => count > 0 && setCount(count - 1)}>-</button>
        </div>
      </div>
    </div>
  );
}
