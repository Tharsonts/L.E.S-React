import { useState } from "react";

export default function Counter() 
{
    const [number, setNumber] = useState(0);

    return (
        <>
            <h3>Exercício 03</h3>
            <span> {number} </span>
            <button onClick={() => 
            {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
            }}> +3 </button>
        </>
    )
}