import { useState } from 'react'
import styles from './Home.module.css'
import four from '../../assets/four.jpg'
import Frame from './Frame'

export default function Home() {
  const [currentTask, setCurrentTask] = useState(0)

  const tasks = ['Предварительно отформатированный текст',
    'Цитаты', 'Списки', 'Таблицы', 'escape-последовательности',
    'Закладки', 'Виджет', 'Карта ссылок', 'Плавающий фрейм'
  ]

  const poem = `
    Ветер шумит в листве,
    Солнце светит в лицо.
    В сердце весна цветет,
    Жизнь поет, как птица в небе.
    
    Словно в сказке, словно в мечте,
    Все вокруг — волшебство.
    Каждый миг — как чудо,
    Каждое утро — новый путь.
  `;

  const quotes = [
    {
      text: "Жизнь — это то, что происходит, пока вы заняты строить другие планы.",
      author: "Джон Леннон"
    },
    {
      text: "Счастье не в счастье, а в его достижении.",
      author: "Фёдор Достоевский"
    },
    {
      text: "Будьте тем изменением, которое вы хотите видеть в мире.",
      author: "Махатма Ганди"
    },
    {
      text: "Будьте тем изменением, которое вы хотите видеть в мире.",
      author: "Махатма Ганди"
    }
  ];

  const references = [
    "Иванов И.И. Основы программирования. – М.: Издательство, 2020.",
    "Петров П.П. Введение в JavaScript. – СПб.: Издательство, 2021.",
    "Сидоров С.С. React для начинающих. – Казань: Издательство, 2022.",
    "Смирнов С.С. Алгоритмы и структуры данных. – Новосибирск: Издательство, 2019.",
    "Кузнецова А.А. Основы веб-разработки. – Екатеринбург: Издательство, 2020.",
    "Федоров Ф.Ф. Программирование на Python. – Ростов-на-Дону: Издательство, 2021.",
    "Александров А.А. Основы баз данных. – Уфа: Издательство, 2020.",
    "Лебедев Л.Л. Введение в HTML и CSS. – Челябинск: Издательство, 2021.",
    "Григорьев Г.Г. Современные технологии разработки ПО. – Тула: Издательство, 2022.",
    "Романов Р.Р. Основы компьютерной безопасности. – Воронеж: Издательство, 2019."
  ];

  // Sample bullet points for the unordered list
  const bulletPoints = [
    "Первый пункт",
    "Второй пункт",
    "Третий пункт",
    "Четвертый пункт",
    "Пятый пункт",
    "Шестой пункт",
    "Седьмой пункт",
    "Восьмой пункт",
    "Девятый пункт",
    "Десятый пункт"
  ];

  // Sample definitions for the definition list
  const definitions = [
    { term: "HTML", definition: "Язык разметки гипертекста, используемый для создания веб-страниц." },
    { term: "CSS", definition: "Каскадные таблицы стилей, используемые для описания внешнего вида документа." },
    { term: "JavaScript", definition: "Язык программирования, используемый для создания интерактивных веб-страниц." },
    { term: "React", definition: "Библиотека JavaScript для создания пользовательских интерфейсов." },
    { term: "Node.js", definition: "Среда выполнения JavaScript на стороне сервера." },
    { term: "API", definition: "Интерфейс программирования приложений." },
    { term: "SQL", definition: "Язык структурированных запросов для работы с базами данных." },
    { term: "UX", definition: "Пользовательский опыт, связанный с взаимодействием пользователя с продуктом." },
    { term: "UI", definition: "Пользовательский интерфейс, который включает в себя все элементы, с которыми взаимодействует пользователь." },
    { term: "Git", definition: "Система контроля версий, используемая для отслеживания изменений в коде." },
  ];

  return (
    <>
      <div className={styles.flexbox}>
        <div className={styles.text_field}>

          {currentTask == 0 && <pre>{poem}</pre>}


          {currentTask == 1 &&
            <div>
              {quotes.map((quote, index) => (
                <blockquote key={index}>
                  <p>{quote.text}</p>
                  <cite>{quote.author}</cite>
                </blockquote>
              ))}
            </div>}


          {currentTask == 2 &&
            <div>
              <h2>Нумерованный список (Список литературы)</h2>
              <ol>
                {references.map((ref, index) => (
                  <li key={index}>{ref}</li>
                ))}
              </ol>

              <h2>Маркированный список</h2>
              <ul>
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <h2>Список определений</h2>
              <dl>
                {definitions.map((def, index) => (
                  <div key={index}>
                    <dt>{def.term}</dt>
                    <dd>{def.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          }


          {currentTask == 3 &&
            <div >
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th colSpan="2">Информация о студентах</th>
                  </tr>
                  <tr>
                    <th>Имя</th>
                    <th>Возраст</th>
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <td>Иванов Иван</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>Петров Петр</td>
                    <td>22</td>
                  </tr>
                  <tr>
                    <td>Сидорова Анна</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>Кузнецова Мария</td>
                    <td>21</td>
                  </tr>
                  <tr>
                    <td>Александров Алексей</td>
                    <td>23</td>
                  </tr>
                  <tr>
                    <td colSpan="2" >Средний возраст: 21 год</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2">© 2024 Учебное заведение</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          }
          {currentTask == 4 &&
            <table>
              <thead>
                <tr>
                  <th>Символ</th>
                  <th>Escape-последовательность</th>
                  <th>Описание</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&lt;</td>
                  <td>&amp;lt;</td>
                  <td>Меньше</td>
                </tr>
                <tr>
                  <td>&gt;</td>
                  <td>&amp;gt;</td>
                  <td>Больше</td>
                </tr>
                <tr>
                  <td>&amp;</td>
                  <td>&amp;amp;</td>
                  <td>Амперсанд</td>
                </tr>
                <tr>
                  <td>&quot;</td>
                  <td>&amp;quot;</td>
                  <td>Двойные кавычки</td>
                </tr>
                <tr>
                  <td>&#169;</td>
                  <td>&amp;copy;</td>
                  <td>Знак авторского права</td>
                </tr>
              </tbody>
            </table>}
          {currentTask == 5 &&
            <div className={styles.m_left}>
              <nav>
                <h2>Содержание</h2>
                <ul>
                  <li><a href="#section1">Раздел 1</a></li>
                  <li><a href="#section2">Раздел 2</a></li>
                </ul>
              </nav>

              <section id="section1">
                <h2>Раздел 1: Вода и здоровье</h2>
                <p>
                  Вода — это основа жизни на Земле и важнейший элемент для поддержания здоровья человека.
                  Она участвует в большинстве биохимических процессов в организме, включая пищеварение,
                  усвоение питательных веществ и выведение токсинов.
                  Регулярное потребление достаточного количества воды помогает поддерживать нормальную температуру тела,
                  улучшает работу сердца и сосудов, а также способствует нормализации обмена веществ.
                  Вода также играет важную роль в поддержании здоровья кожи, предотвращая ее обезвоживание и способствуя
                  обновлению клеток.
                </p>
              </section>

              <section id="section2">
                <h2>Раздел 2: Вода в природе</h2>
                <p>
                  Вода занимает около 71% поверхности Земли и является ключевым элементом в экосистемах.
                  Она поддерживает жизнь растений и животных, обеспечивая их необходимыми ресурсами для роста и развития.
                  Вода также играет важную роль в климатических процессах, регулируя температуру и влажность воздуха.
                  Вода в реках, озерах и океанах является домом для множества видов рыб и других водных организмов,
                  что делает ее важной частью пищевой цепи.
                  Сохранение чистоты и доступности водных ресурсов является критически важным для устойчивого развития
                  и благополучия человечества.
                </p>
              </section>
            </div>
          }
          {currentTask == 6 &&
            <div className={styles.m_left}>
              <details >
                <summary >Полезные свойства воды</summary>
                <p>
                  Вода — это основной элемент, необходимый для жизни. Она помогает поддерживать нормальную температуру тела,
                  участвует в пищеварении и выводе токсинов из организма. Регулярное потребление воды способствует
                  улучшению состояния кожи и поддержанию здоровья суставов.
                </p>
              </details>

              <details>
                <summary>Значение воды в природе</summary>
                <p>
                  Вода занимает около 71% поверхности Земли и является ключевым элементом для всех живых организмов.
                  Она регулирует климат, поддерживает экосистемы и является домом для многих видов животных и растений.
                  Сохранение чистоты водных ресурсов имеет критическое значение для устойчивого развития планеты.
                </p>
              </details>
            </div>}

            
          {currentTask == 7 &&
            <div className={styles.m_top}>
              <img src={four} alt="Логотип" useMap="#logo-map" style={{ width: '300px', height: '300px' }} />

              <map name="logo-map">
                <area shape="poly" coords="0,0, 150,0, 150,150, 50,150" onClick={() => setCurrentTask(0)} href="#format-1" alt="Область 1" />
                <area shape="poly" coords="150,0, 300,00, 300,150, 150,150" onClick={() => setCurrentTask(1)} href="#format-2" alt="Область 2" />
                <area shape="poly" coords="0,150, 150,150, 150,300, 0,300" onClick={() => setCurrentTask(2)} href="#format-3" alt="Область 3" />
                <area shape="poly" coords="150,150, 300,150, 300,300, 150,300" onClick={() => setCurrentTask(3)} href="#format-4" alt="Область 4" />
              </map>
            </div>}

          {currentTask == 8 &&
            <div className={styles.centered_iframe}>
              <Frame />
            </div>
          }

        </div>
        <div className={styles.tasks_nav}>
          <ul className={styles.ul}>
            {tasks.map((t, index) => (
              <li className={styles.li} key={index}>
                <button
                  className={`${currentTask === index ? styles.active : ''}`}
                  onClick={() => { setCurrentTask(index) }}>
                  {t}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div >
    </>
  )
}