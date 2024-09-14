import './Header.css'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const links = [
  { to: "/formatting", content: "Форматирование" },
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
      <Link to={link.to} className="block p-2 hover:bg-gray-700 rounded">
        {link.content}
      </Link>
    </li>
  ));
  return (
    <>
      <header>
        <div>
          <div >
            <h1 className='fio'>Зинович Вадим Александрович</h1>
            <nav>
              <ul>
                {linkItems}
              </ul>
            </nav>
          </div>

        </div>
        <div>
          <img className='logo' src={logo} alt="" />
        </div>
      </header>
    </>
  )
}
