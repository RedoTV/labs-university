import { useState, useEffect } from 'react';

function MovingName() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [direction, setDirection] = useState(0); // 0: вниз, 1: диагональ вверх, 2: диагональ вниз, 3: вверх
    const containerSize = { width: 700, height: 300 }; // Fixed container size
    const step = 5; // Шаг движения
    const textHeight = 50; // Высота текста, учитывается для ограничения по y

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prev) => {
                let newPosition = { ...prev };

                switch (direction) {
                    case 0: // Движение вниз
                        newPosition.y += step;
                        if (newPosition.y >= containerSize.height - textHeight) setDirection(1);
                        break;
                    case 1: // Движение диагонально вверх
                        newPosition.x += step;
                        newPosition.y -= step;
                        if (newPosition.x >= containerSize.width - 200 || newPosition.y <= 0) setDirection(2);
                        break;
                    case 2: // Движение диагонально вниз
                        newPosition.x += step;
                        newPosition.y += step;
                        if (newPosition.x >= containerSize.width - 200 || newPosition.y >= containerSize.height - textHeight) setDirection(3);
                        break;
                    case 3: // Движение вверх
                        newPosition.y -= step;
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
        }, 30); // Увеличил интервал для более плавного движения

        return () => clearInterval(interval);
    }, [direction]);

    return (
        <div style={{
            width: `${containerSize.width}px`,
            height: `${containerSize.height}px`,
            border: '2px solid black',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <h1 style={{
                position: 'absolute', left: `${position.x}px`, top: `${position.y}px`,
                fontSize: '48px', fontWeight: 'bold', color: 'blue', margin: '0'
            }}>
                Вадим
            </h1>
        </div>
    );
}

export default MovingName;
