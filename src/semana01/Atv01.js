import React from "react";
import Relogio from './Relogio';
import Letreiro from './Letreiro';
import { Link } from "react-router-dom";
import StarBackground from "../components/StarBackground";
import './Atv01.css';

export default function Atv01() {
    return (
        <>
            <StarBackground />
            <div className="atividade-container">
                <h1 className="atividade-title">Atividade 01</h1>
                <Relogio />
                <Letreiro />
                <Link to="/" className="btn btn-return">Retornar à página inicial</Link>
            </div>
        </>
    );
}
