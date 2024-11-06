import React from "react";
import { Link } from "react-router-dom";
import StarBackground from "../components/StarBackground";
import '../fundo.css';

const Home = () => {
  return (
    <>
      <StarBackground />
      <h1>Página Inicial</h1>
      <h2>Tharson Turbuk Silva</h2>
      <nav>
        <ul>
          <li>
            <Link to="/semana01">Atividade 01</Link>
          </li>
          <li>
            <Link to="/semana02">Atividade 02</Link>
          </li>
          <li>
            <Link to="/semana02">Atividade 03</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
