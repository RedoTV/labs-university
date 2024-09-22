import styles from './shadow.module.css'

export default function ShadowGradient() {
    return (<>
        <div className={styles.container}>
            {/* Объемная надпись */}
            <h1 className={styles.volumeText}>Объемная Надпись</h1>

            {/* Буквица (первый способ) */}
            <div className={styles.dropCap}>
                Буквица с использованием псевдокласса и теней.
            </div>

            {/* Буквица (второй способ) */}
            <div className={styles.dropCapShadow}>
                <span className={styles.initial}>Б</span>
                <span>уквица с тенью.</span>
            </div>

            {/* Наложение нескольких теней на текст */}
            <h2 className={styles.multipleShadows}>Текст с несколькими тенями</h2>

            {/* Градиентные фоны */}
            <div className={styles.gradient1}>Градиент 1</div>
            <div className={styles.gradient2}>Градиент 2</div>
            <div className={styles.gradient3}>Градиент 3</div>

            {/* Изображения с фильтрами */}
            <img src="https://via.placeholder.com/150" alt="Example 1" className={styles.filter1} />
            <img src="https://via.placeholder.com/150" alt="Example 2" className={styles.filter2} />
            <img src="https://via.placeholder.com/150" alt="Example 3" className={styles.filter3} />
        </div>

    </>)
}