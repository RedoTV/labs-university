import styles from './selectors.module.css'

export default function SelectorsMarking() {
    return (<>
        <div className={styles.container}>
            <div className={styles.content}>
                {/* Блочный элемент с усечением текста */}
                <div className={styles.textBlock}>
                    <p className={styles.truncate}>
                        Это длинный текст, который будет усечен при увеличении размера окна браузера.
                        При достижении определенной ширины окна текст будет обрезан с добавлением многоточия.
                    </p>
                </div>

                {/* Пример использования селекторов атрибутов */}
                <div data-type="primary" className={styles.primaryButton}>Primary Button</div>
                <div data-type="secondary" className={styles.secondaryButton}>Secondary Button</div>
                <div data-type="mid-value" className={styles.midValue}>Middle Value</div>
                <div data-type="customary" className={styles.customElement}>Custom Element</div>

                {/* Список элементов для демонстрации псевдоклассов */}
                <ul className={styles.list}>
                    <li className={styles.listItem}>Item 1</li>
                    <li className={styles.listItem}>Item 2</li>
                    <li className={styles.listItem}>Item 3</li>
                    <li className={styles.listItem}>Item 4</li>
                    <li className={styles.listItem}>Item 5</li>
                    <li className={styles.listItem}>Item 6</li>
                    <li className={styles.listItem}>Item 7</li>
                    <li className={styles.listItem}>Item 8</li>
                    <li className={styles.listItem}>Item 9</li>
                    <li className={styles.listItem}>Item 10</li>
                </ul>

                {/* Блоки с разными способами отображения */}
                <div className={`${styles.textBlock} ${styles.roundedCorners}`}>Rounded Corners</div>
                <div className={`${styles.textBlock} ${styles.roundedSmooth}`}>Rounded Smooth</div>
                <div className={`${styles.textBlock} ${styles.roundedEllipse}`}>Rounded Ellipse</div>
            </div>
        </div>
    </>
    )
}