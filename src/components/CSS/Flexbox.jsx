import styles from './flexbox.module.css';

export default function Flexbox() {
    return (
        <div className={styles.container}>
            {/* Блочный элемент с выравниванием текста */}
            <div className={styles.centeredBlock}>
                <h1>Центрированный текст</h1>
            </div>

            {/* Список с элементами */}
            <ul className={`${styles.flexList} ${styles.reverse}`}>
                <li className={`${styles.listElement} ${styles.reverseOrder1}`}>Элемент 1</li>
                <li className={`${styles.listElement} ${styles.reverseOrder2}`}>Элемент 2</li>
                <li className={`${styles.listElement} ${styles.reverseOrder3}`}>Элемент 3</li>
                <li className={`${styles.listElement} ${styles.rightAlign} ${styles.reverseOrder4}`}>Элемент 4 (смещен вправо)</li>
                <li className={`${styles.listElement} ${styles.reverseOrder5}`}>Элемент 5</li>
            </ul>
        </div>
    );
}