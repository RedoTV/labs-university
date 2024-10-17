import { useState } from 'react';
import styles from './data.module.css';

export default function Data() {
  const [formData, setFormData] = useState({
    surname: '',
    contractConclusionDate: '',
    duration: ''
  });

  const [employees, setEmployees] = useState([
    { lastName: 'Иванов', contractDate: '15.03.2021', duration: 3 },
    { lastName: 'Петров', contractDate: '01.06.2020', duration: 5 },
    { lastName: 'Сидоров', contractDate: '10.09.2019', duration: 4 },
    { lastName: 'Смирнова', contractDate: '25.12.2022', duration: 2 },
    { lastName: 'Кузнецова', contractDate: '05.07.2018', duration: 6 },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Преобразование даты к формату дд.мм.гггг
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() возвращает месяцы с 0
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };

    // Создаём нового сотрудника с отформатированной датой
    const newEmployee = {
      lastName: formData.surname,
      contractDate: formatDate(formData.contractConclusionDate),
      duration: formData.duration,
    };

    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);

    // Очищаем форму после отправки
    setFormData({
      surname: '',
      contractConclusionDate: '',
      duration: ''
    });
  };

  const Months = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь',
  };

  const getContractEnd = (startDate, duration) => {
    // Преобразование формата даты дд.мм.гггг в ГГГГ-ММ-ДД
    const [day, month, year] = startDate.split('.');  // Разделяем строку по точкам
    const formattedDate = `${year}-${month}-${day}`;  // Преобразуем в формат ГГГГ-ММ-ДД

    const date = new Date(formattedDate);  // Преобразуем строку в объект Date
    if (isNaN(date)) return '';  // Проверяем, если дата некорректная, возвращаем пустую строку

    date.setFullYear(date.getFullYear() + parseInt(duration, 10));  // Добавляем количество лет к дате
    const monthIndex = date.getMonth();  // Получаем индекс месяца (0-11)

    return Months[monthIndex];  // Возвращаем название месяца из enum
  };

  return (
    <>
      <div className={styles.header_container}>
        <h3>Зинович, Вариант 9</h3>
        <p>В анкете заполняется информация о сотрудниках: фамилия, дата заключения контракта и срок (в годах), на какой заключен контракт. Создайте форму для ввода данных. Напишите сценарий, определяющий месяц, о который закончится контракт.</p>
      </div>

      <div className={styles.main_container}>
        {/* Таблица с сотрудниками */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Фамилия</th>
              <th className={styles.th}>Дата заключения контракта</th>
              <th className={styles.th}>Срок (в годах)</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td className={styles.td}>{employee.lastName}</td>
                <td className={styles.td}>{employee.contractDate}</td>
                <td className={styles.td}>{employee.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Форма для добавления нового сотрудника */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Ввод сотрудника</legend>

            <div className={styles.form__group}>
              <label>Фамилия:</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                placeholder="Введите фамилию"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.form__group}>
              <label>Дата заключения контракта:</label>
              <input
                type="date"
                name="contractConclusionDate"
                value={formData.contractConclusionDate}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.form__group}>
              <label>Срок контракта (в годах):</label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>Отправить</button>
          </fieldset>
        </form>
      </div>

      <div className={styles.task}>
        <h3>Задание</h3>
        <table className={styles.task_table}>
          <thead>
            <tr>
              <th className={styles.th}>Фамилия</th>
              <th className={styles.th}>Дата заключения контракта</th>
              <th className={styles.th}>Срок (в годах)</th>
              <th className={styles.th}>Заканчивается в</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td className={styles.td}>{employee.lastName}</td>
                <td className={styles.td}>{employee.contractDate}</td>
                <td className={styles.td}>{employee.duration}</td>
                <td className={styles.td}>{getContractEnd(employee.contractDate, employee.duration)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
