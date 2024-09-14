import styles from './Header.module.css'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'


const links = [
  { to: "/", content: "Форматирование" },
  { to: "/css", content: "CSS" },
  { to: "/dom", content: "DOM" },
  { to: "/crossword", content: "Кроссворд" },
  { to: "/string", content: "String" },
  { to: "/forms", content: "Формы" },
  { to: "/data", content: "Data" },
  { to: "/object", content: "Object" }
];

export default function Header() {
  const linkItems = links.map((link, ind) => (
    <li key={ind}>
      <Link to={link.to} className={styles.link}>
        {link.content}
      </Link>
    </li>
  ));
  return (
    <>
      <header className={styles.header}>
        <div className={styles.flexbox}>
          <div className={styles.left_block} >
            <h1 className={styles.fio}>Зинович Вадим Александрович</h1>
            <nav className={styles.nav}>
              <ul className={styles.nav_ul}>
                {linkItems}
              </ul>
            </nav>
          </div>
          <div className={styles.right_block}>
            <img className={styles.logo} src={logo} alt="Logo" />
          </div>
        </div>
      </header >
    </>
  )
}
