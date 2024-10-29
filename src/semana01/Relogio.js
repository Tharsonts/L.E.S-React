import React, { useState, useEffect } from 'react';

function Relogio() {
    const [hora, setHora] = useState('');

    useEffect(() => {
        const atualizarHora = () => {
            const dataAtual = new Date();
            const hora = dataAtual.getHours().toString().padStart(2, '0');
            const minuto = dataAtual.getMinutes().toString().padStart(2, '0');
            const segundo = dataAtual.getSeconds().toString().padStart(2, '0');

            setHora(`${hora}:${minuto}:${segundo}`);
        };

        const timer = setInterval(atualizarHora, 1000);
        return () => clearInterval(timer);
    }, []);

    return <div id="hora">{hora}</div>;
}

export default Relogio;
