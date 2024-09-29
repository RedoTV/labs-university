import { useState } from "react";
import styles from './Crossword.module.css';

// Массив для человечка (30x20)  
const solution = [
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0,],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0,],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0,],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0,],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0,],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0,],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0,],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,]
];

// Функция подсчета непрерывных блоков в строках и столбцах  
const calculateClues = (grid) => {
    const rowClues = grid.map(row => getContinuousBlocks(row));
    const colClues = Array.from({ length: grid[0].length }, (_, col) =>
        getContinuousBlocks(grid.map(row => row[col]))
    );
    return { rowClues, colClues };
};

// Вспомогательная функция для нахождения количества непрерывных блоков  
const getContinuousBlocks = (arr) => {
    const result = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            count++;
        } else if (count > 0) {
            result.push(count);
            count = 0;
        }
    }
    if (count > 0) result.push(count);
    return result.length ? result : [0];
};

export default function Crossword() {
    const [grid, setGrid] = useState(
        Array.from({ length: solution.length }, () =>
            Array.from({ length: solution[0].length }, () => false)
        )
    );

    const { rowClues, colClues } = calculateClues(solution);

    const handleCellClick = (rowIdx, colIdx) => {
        const newGrid = grid.map((row, rIdx) =>
            row.map((cell, cIdx) =>
                rIdx === rowIdx && cIdx === colIdx ? !cell : cell
            )
        );
        setGrid(newGrid);
    };

    const checkSolution = () => {
        const currentGrid = grid.map(row => row.map(cell => (cell ? 1 : 0)));
        return JSON.stringify(currentGrid) === JSON.stringify(solution);
    };

    const clearGrid = () => {
        setGrid(Array.from({ length: solution.length }, () =>
            Array.from({ length: solution[0].length }, () => false)
        ));
    };

    const showSolution = () => {
        setGrid(solution);
    };

    return (
        <div className={styles.outerContainer}>
            <h1>Японский кроссворд</h1>
            <div className={styles.crosswordContainer}>
                {/* Верхний блок с подсказками для столбцов */}
                <div className={styles.flexRow}>
                    <div className={styles.columnHints}>
                        {colClues.map((clue, idx) => (
                            <div key={idx} className={styles.colClue}>
                                {clue.map((cl, key) =>
                                    <div key={key} className={styles.clue}>
                                        {cl}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.flexRow}>
                    {/* Левый блок с подсказками для строк */}
                    <div className={styles.rowHints}>
                        {rowClues.map((clue, idx) => (
                            <div key={idx} className={styles.rowClue}>
                                {clue.map((cl, key) =>
                                    <div key={key} className={styles.clue}>
                                        {cl}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Сетка кроссворда */}
                    <div className={styles.crosswordGrid}>
                        {grid.map((row, rowIdx) => (
                            <div key={rowIdx} className={styles.crosswordRow}>
                                {row.map((cell, colIdx) => (
                                    <div
                                        key={colIdx}
                                        className={`${styles.crosswordCell} ${cell ? styles.filled : ""}`}
                                        onClick={() => handleCellClick(rowIdx, colIdx)}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.controls}>
                <button onClick={clearGrid}>Очистить поле</button>
                <button onClick={() => alert(checkSolution() ? "Верно!" : "Ошибка!")}>
                    Проверить
                </button>
                <button onClick={showSolution}>Показать решение</button>
            </div>
        </div>
    );
}
