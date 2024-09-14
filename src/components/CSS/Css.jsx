import { useState } from 'react'
import styles from './Css.module.css'

export default function Css() {
  const [currentTask, setCurrentTask] = useState(0)

  const tasks = ['Стилевые свойства',
    'Медиазапросы', 'Селекторы, разметка, цветовые режимы', 'Создание тени, градиентного фона, фильтры', 'Переходы, преобразования и анимация',
    'Flexbox, переключение разрешения изображений'
  ]


  return (<>
    <div className={styles.tasks_nav}>
      <ul className={styles.ul}>
        {tasks.map((t, index) => (
          <li className={styles.li} key={index}>
            <button
              className={`${currentTask === index ? styles.active : ''} ${styles.full_height}`}
              onClick={() => { setCurrentTask(index) }}>
              {t}
            </button>
          </li>
        ))}
      </ul>
    </div>

    {currentTask == 0 &&
      <>
        <div className={styles.m_left}>
          {/* Задание 1: Обтекание */}
          <div className={styles.nb}>
            Обтекание: этот элемент занимает половину ширины окна браузера и обтекается другими элементами.
          </div>

          {/* Задание 2: Границы */}
          <p className={styles.bordered_paragraph}>
            Это абзац с вертикальными границами слева и справа.
          </p>

          {/* Задание 3: Подложка и надпись */}
          <div className={styles.ground}>
            <div className={styles.poster}>Надпись поверх подложки</div>
          </div>

          {/* Задание 4: Колонки */}
          <div className={styles.columns}>
            <div className={styles.column}>
              <span className={styles.drop_cap}>A</span>
              <p>Это текст в первой колонке. Он будет продолжаться и занимать место в колонке.</p>
            </div>
            <div className={styles.column}>
              <span className={styles.drop_cap}>B</span>
              <p>Это текст во второй колонке. Он также будет занимать место в колонке.</p>
            </div>
          </div>

          {/* Задание 5: Области с линейками прокрутки */}
          <div className={styles.scrollable_area}>
            <h2>Область с прокруткой 1</h2>
            <div>
              <p>Много текста для демонстрации прокрутки...</p>
              <p>Много текста для демонстрации прокрутки...</p>
              <p>Много текста для демонстрации прокрутки...</p>
              <p>Много текста для демонстрации прокрутки...</p>
              <p>Много текста для демонстрации прокрутки...</p>
            </div>
          </div>

          <div className={styles.scrollable_area}>
            <h2>Область с прокруткой 2</h2>
            <div>
              <p>Еще много текста для демонстрации прокрутки...</p>
              <p>Еще много текста для демонстрации прокрутки...</p>
              <p>Еще много текста для демонстрации прокрутки...</p>
              <p>Еще много текста для демонстрации прокрутки...</p>
              <p>Еще много текста для демонстрации прокрутки...</p>
            </div>
          </div>

          {/* Задание 6: Преобразование элементов */}
          <div className={styles.element_transformation}>
            <span className={styles.inline_element}>Я строчный элемент</span>
            <div className={styles.block_element}>Я блочный элемент</div>
          </div>

          {/* Задание 7: z-index и позиционирование */}
          <div className={styles.positioning_example}>
            <div className={styles.name}>Фамилия</div>
            <div className={styles.overlapping_box} style={{ zIndex: 1 }}>Первый слой</div>
            <div className={styles.overlapping_box} style={{ zIndex: 2 }}>Второй слой</div>
          </div>
        </div>
      </>
    }
    {currentTask == 1 &&
      <>
        {/* Меню */}
        <nav className={styles.menu}>
          <ul>
            <li>Главная</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </nav>

        {/* Текст с колонками */}
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Пример с подложкой и надписью */}
        <div className={styles.ground}>
          <div className={styles.poster}>Надпись поверх подложки</div>
        </div>
      </>
    }
    {currentTask == 2 &&
      <>
        <div className={styles.block}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </>
    }
    {currentTask == 3 &&
      <>
      </>
    }
    {currentTask == 4 &&
      <>
      </>
    }
    {currentTask == 5 &&
      <>
      </>
    }
  </>)
}