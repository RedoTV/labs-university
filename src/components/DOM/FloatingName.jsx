import { useState } from "react";

function FloatingName() {
    const [position, setPosition] = useState({ x: 200, y: 100 });
    const containerSize = { width: 700, height: 300 }; // Размер контейнера
    const textSize = { width: 150, height: 50 }; // Примерный размер текста

    const moveUp = () => setPosition((prev) => {
        return { x: prev.x, y: Math.max(prev.y - 10, 0) }; // Ограничение по верхней границе
    });

    const moveDown = () => setPosition((prev) => {
        return { x: prev.x, y: Math.min(prev.y + 10, containerSize.height - textSize.height) }; // Ограничение по нижней границе
    });

    const moveLeft = () => setPosition((prev) => {
        return { x: Math.max(prev.x - 10, 0), y: prev.y }; // Ограничение по левой границе
    });

    const moveRight = () => setPosition((prev) => {
        return { x: Math.min(prev.x + 10, containerSize.width - textSize.width), y: prev.y }; // Ограничение по правой границе
    });

    return (
        <>
            <div style={{
                width: `${containerSize.width}px`,
                height: `${containerSize.height}px`,
                border: '2px solid black',
                position: 'relative',
                overflow: 'hidden',
                margin: '20px auto', // Центрирование контейнера
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <h1 style={{
                    position: 'absolute',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    fontSize: '48px',
                    fontWeight: 'bold',
                    color: 'green',
                    margin: 0
                }}>
                    Вадим
                </h1>

            </div>
            <div>
                <button onClick={moveUp}>Вверх</button>
                <button onClick={moveDown}>Вниз</button>
                <button onClick={moveLeft}>Влево</button>
                <button onClick={moveRight}>Вправо</button>
            </div>
        </>

    );
}

export default FloatingName;
