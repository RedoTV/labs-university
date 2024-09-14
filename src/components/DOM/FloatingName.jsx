import { useState } from "react";

function FloatingName() {
    const [position, setPosition] = useState({ x: 0, y: 600 });

    const moveUp = () => setPosition((prev) => ({ x: prev.x, y: prev.y - 10 }));
    const moveDown = () => setPosition((prev) => ({ x: prev.x, y: prev.y + 10 }));
    const moveLeft = () => setPosition((prev) => ({ x: prev.x - 10, y: prev.y }));
    const moveRight = () => setPosition((prev) => ({ x: prev.x + 10, y: prev.y }));

    return (
        <div>
            <h1 style={{ position: 'absolute', left: position.x, top: position.y, fontSize: '48px', fontWeight: 'bold', color: 'green' }}>
                Вадим
            </h1>
            <div>
                <button onClick={moveUp}>Вверх</button>
                <button onClick={moveDown}>Вниз</button>
                <button onClick={moveLeft}>Влево</button>
                <button onClick={moveRight}>Вправо</button>
            </div>
        </div>
    );
}

export default FloatingName;