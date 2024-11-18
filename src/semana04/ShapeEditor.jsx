import { useState } from "react";

let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 }
];

export default function ShapeEditor() {
    const [shapes, setShapes] = useState(initialShapes);

    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                return shape;
            } else {
                return {
                    ...shape,
                    y: shape.y + 50
                };
            }
        });
        setShapes(nextShapes);
    }

    return (
        <div style={{ paddingBottom: "300px", textAlign: "left", marginLeft: "20px" }}>
            <h3>Exercício 10 - ShapeEditor</h3>
            <button onClick={handleClick}>Move Circles Down!</button>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: "20px" }}>
                {shapes.map(shape => (
                    <div
                        key={shape.id}
                        style={{
                            background: 'purple',
                            position: 'relative',
                            left: shape.x,
                            top: shape.y,
                            borderRadius: shape.type === 'circle' ? '50%' : '0',  // Se for círculo, borda arredondada
                            width: 20,   // Tamanho reduzido para os círculos e quadrados
                            height: 20,  // Tamanho reduzido para os círculos e quadrados
                            margin: '0 10px',  // Espaço entre os elementos
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
