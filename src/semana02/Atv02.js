import { useState } from "react";
import { Link } from "react-router-dom";
import "./Atv02.css";
import Men from "./cont/Men";
import Women from "./cont/Woman";
import StarBackground from "../components/StarBackground"; 
import { FaRedo } from "react-icons/fa"; 

export default function Atv02() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const reset = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <>
      <StarBackground />
      <div className="activity-container">
        <Link to="/" className="btn btn-return">Retornar à página inicial</Link>
        <div className="card">
          <div className="header">
            <h1>Total</h1>
            <button className="reset-btn" onClick={reset}>
              <FaRedo />
            </button>
          </div>
          <div className="total-display">{homens + mulheres}</div>
          <div className="counter-section">
            <Men count={homens} setCount={setHomens} />
            <Women count={mulheres} setCount={setMulheres} />
          </div>
        </div>
      </div>
    </>
  );
}
