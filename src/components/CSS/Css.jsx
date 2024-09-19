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
          <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, quod dolorum! Cum obcaecati at, accusantium debitis rem labore? Vero nisi molestias porro aliquam excepturi ullam neque! Atque incidunt ducimus veniam!</h4>
          <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ad vitae praesentium alias repellendus atque adipisci. Quaerat, excepturi corporis eveniet ipsa voluptate at optio vero, reiciendis nesciunt harum, possimus obcaecati.</h5>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, praesentium quae illum aut iusto corporis. Enim natus voluptatem sapiente numquam ea labore dolores quidem optio unde culpa, harum laudantium nobis!</h6>
          <p>При уменьшении ширины окна браузера текст автоматически преобразуется в одноколонный формат без буквицы.</p>
        </div>

      </>
    }
    {currentTask == 2 &&
      <>
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Блочный элемент с усечением текста */}
            <div className={styles.textBlock}>
              <p className={styles.truncate}>
                Это длинный текст, который будет усечен при уменьшении размера окна браузера.
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
    }
    {currentTask == 3 &&
      <>
        <div className={styles.container}>
          {/* Объемная надпись */}
          <h1 className={styles.volumeText}>Объемная Надпись</h1>

          {/* Буквица (первый способ) */}
          <div className={styles.dropCap}>
            <span className={styles.initial}>Б</span>
            <span>уквица с использованием псевдокласса и теней.</span>
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

      </>
    }
    {currentTask == 4 &&
      <>
        <div className={styles.container}>
          <h1>Переходы и 2D-преобразования</h1>

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
      </>
    }
    {currentTask == 5 &&
      <>
        <div className={styles.container}>
          {/* Блочный элемент с выравниванием текста */}
          <div className={styles.centeredBlock}>
            <h1>Центрированный текст</h1>
          </div>

          {/* Список с элементами */}
          <ul className={`${styles.flexList} ${styles.reverse}`}>
            <li className={styles.listElement}>Элемент 1</li>
            <li className={styles.listElement}>Элемент 2</li>
            <li className={styles.listElement}>Элемент 3</li>
            <li className={`${styles.listElement} ${styles.rightAlign}`}>Элемент 4 (смещен вправо)</li>
            <li className={styles.listElement}>Элемент 5</li>
          </ul>
        </div>
      </>
    }
  </>)
}