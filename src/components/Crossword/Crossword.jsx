import { useState } from 'react';
import styles from './Crossword.module.css';

const initialGrid = Array(100).fill(0).map(() => Array(100).fill(false));

export default function Crossword() {
    const [grid, setGrid] = useState(initialGrid);

    // Обработка клика по клетке
    const toggleCell = (rowIndex, colIndex) => {
        const newGrid = grid.map((row, rIdx) =>
            row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? !cell : cell))
        );
        setGrid(newGrid);
    };

    return (
        <div className={styles.app}>
            <h1>Японский кроссворд 100x100</h1>
            <div className={styles.grid}>
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className={styles.row}>
                        {row.map((cell, colIndex) => (
                            <div
                                key={colIndex}
                                className={`${styles.cell} ${cell ? styles.filled : ''}`}
                                onClick={() => toggleCell(rowIndex, colIndex)}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}