import { useState } from 'react'
import styles from './Css.module.css'
import MediaRequests from './MediaRequests'
import SelectorsMarking from './SelectorsMarking'
import ShadowGradient from './ShadowGradient'
import TransformsTwoD from './TransformsTwoD'
import Flexbox from './Flexbox'

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
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam magni, officia explicabo natus maiores iusto nisi laborum architecto dignissimos accusantium ullam quasi reiciendis nihil rerum commodi omnis numquam facilis.</div>

          {/* Задание 2: Границы */}
          <p className={styles.bordered_paragraph}>
            Это абзац с вертикальными границами слева и справа.
          </p>

          {/* Задание 3: Подложка и надпись */}
          <div className={styles.ground}>
            Подложка
            <div className={styles.poster}>Надпись поверх подложки</div>
          </div>

          {/* Задание 4: Колонки */}
          <div className={styles.columns}>
            <div className={styles.column}>
              <span className={styles.drop_cap}>A</span>
              <p>Это текст в первой колонке.</p>
            </div>
            <div className={styles.column}>
              <span className={styles.drop_cap}>B</span>
              <p>Это текст во второй колонке.</p>
            </div>
            <div className={styles.column}>
              <span className={styles.drop_cap}>C</span>
              <p>Это текст в третьей колонке.</p>
            </div>
          </div>

          {/* Задание 5: Области с линейками прокрутки */}
          <div className={styles.scrollable_area}>
            <h2>Область с вертикальной прокруткой</h2>
            <div>
              <p>Много текста для демонстрации прокрутки...</p>
              <p>Много текста для демонстрации прокрутки...</p>
              <p>Много текста для демонстрации прокрутки...</p>
              <p>Много текста для демонстрации прокрутки...</p>
              <p>Много текста для демонстрации прокрутки...</p>
            </div>
          </div>

          <div className={styles.scrollable_area}>
            <h2>Область с горизонтальной прокруткой</h2>
            <div className={styles.horizontalScroll}>
              <p>Еще много текста для демонстрации прокрутки...</p>
              <p>Еще много текста для демонстрации прокрутки...</p>
              <p>Еще много текста для демонстрации прокрутки...</p>
              <p>Еще много текста для демонстрации прокрутки...</p>
              <p>Еще много текста для демонстрации прокрутки...</p>
            </div>
          </div>

          {/* Задание 6: Преобразование элементов */}
          <h3>До преобразования</h3>
          <div className={styles.element_transformation}>
            <span>1. Я строчный элемент</span>
            <div>2. Я блочный элемент</div>
          </div>
          <h3>После преобразования</h3>
          <div className={styles.element_transformation}>
            <span className={styles.block_element}>1. Я строчный элемент</span>
            <div className={styles.inline_element}>2. Я блочный элемент</div>
          </div>

          {/* Задание 7: z-index и позиционирование */}
          <div className={styles.container}>
            <div className={styles.layer1}>Зинович</div>
            <div className={styles.layer2}>Зинович</div>
            <div className={styles.layer3}>Зинович</div>
          </div>
        </div>
      </>
    }
    {currentTask == 1 &&
      <>
        <MediaRequests />
      </>
    }
    {currentTask == 2 &&
      <>
        <SelectorsMarking />
      </>
    }
    {currentTask == 3 &&
      <>
        <ShadowGradient />
      </>
    }
    {currentTask == 4 &&
      <>
        <TransformsTwoD />
      </>
    }
    {currentTask == 5 &&
      <Flexbox />
    }
  </>)
}