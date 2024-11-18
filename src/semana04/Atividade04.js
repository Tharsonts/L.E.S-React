import { Link } from "react-router-dom";
import './semana04.css';
import App from "./App";
import Gallery from "./Gallery";
import Form from "./Form";
import MovingDot from "./MovingDot";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Counter from "./Counter";
import List from "./List";
import List2 from "./List2";
import ShapeEditor from "./ShapeEditor";
import CounterList from "./CounterList";
import List3 from "./List3";
import List4 from "./List4";
import BucketList from "./BucketList";

export default function Atividade04() {
  return (
    <div id="semana04-container">
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <button type="button" className="btn btn-dark btn">
            Voltar
          </button>
        </Link>
      </div>
      <div className="component"><App /></div>
      <div className="component"><Gallery /></div>
      <div className="component"><Counter /></div>
      <div className="component"><Form /></div>
      <div className="component"><MovingDot /></div>
      <div className="component"><Form2 /></div>
      <div className="component"><Form3 /></div>
      <div className="component"><List /></div>
      <div className="component"><List2 /></div>
      <div className="component"><ShapeEditor /></div>
      <div className="component"><CounterList /></div>
      <div className="component"><List3 /></div>
      <div className="component"><List4 /></div>
      <div className="component"><BucketList /></div>
    </div>
  );
}
