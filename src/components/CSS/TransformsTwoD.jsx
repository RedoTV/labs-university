import styles from './transforms.module.css'

export default function TransformsTwoD() {
    return (<>
        <div className={styles.container}>
            {/* Переходы */}
            <div className={styles.transitionBox1}>Переход 1</div>
            <div className={styles.transitionBox2}>Переход 2</div>
            <div className={styles.transitionBox3}>Переход 3</div>

            {/* 2D-преобразования */}
            <div className={styles.transformContainer}>
                <div className={styles.scale}>Масштабирование</div>
                <div className={styles.translate}>Перемещение</div>
                <div className={styles.rotate}>Вращение</div>
                <div className={styles.skew}>Наклон</div>
                <div className={styles.center}>Центрирование</div>
            </div>
        </div>
    </>)
}