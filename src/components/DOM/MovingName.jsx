import { useState, useEffect } from 'react';

function MovingName() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [direction, setDirection] = useState(0); // 0: вниз, 1: диагональ вверх, 2: диагональ вниз, 3: вверх
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prev) => {
                let newPosition = { ...prev };

                switch (direction) {
                    case 0: // Движение вниз
                        newPosition.y += 5;
                        if (newPosition.y >= windowSize.height - 50) setDirection(1);
                        break;
                    case 1: // Движение диагонально вверх
                        newPosition.x += 5;
                        newPosition.y -= 5;
                        if (newPosition.x >= windowSize.width - 200 || newPosition.y <= 0) setDirection(2);
                        break;
                    case 2: // Движение диагонально вниз
                        newPosition.x += 5;
                        newPosition.y += 5;
                        if (newPosition.x >= windowSize.width - 200 || newPosition.y >= windowSize.height - 50) setDirection(3);
                        break;
                    case 3: // Движение вверх
                        newPosition.y -= 5;
                        if (newPosition.y <= 0) {
                            setDirection(0);
                            return { x: 0, y: 0 }; // Возвращаем в начальную позицию
                        }
                        break;
                    default:
                        break;
                }

                return newPosition;
            });
        }, 10);

        return () => clearInterval(interval);
    }, [direction, windowSize]);

    return (
        <div>
            <h1 style={{
                position: 'absolute', left: position.x, top: position.y,
                fontSize: '48px', fontWeight: 'bold', color: 'blue'
            }}>
                Вадим
            </h1>
        </div>
    );
}

export default MovingName;