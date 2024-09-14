import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>© 2024 Зинович Вадим Александрович </p>
        <p>Контактный email: <a href="mailto:vadimzinovich06@gmail.com">vadimzinovich06@gmail.com</a></p>
      </footer>
    </>
  )
}
