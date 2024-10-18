import { useState } from 'react';
import styles from './object.module.css';

const initialStudents = [
  { surname: 'Иванов', faculty: 'Математика', group: 'М-102', athletics: 4, volleyball: 5, basketball: 6, swimming: 7 },
  { surname: 'Петров', faculty: 'Физика', group: 'Ф-101', athletics: 5, volleyball: 6, basketball: 7, swimming: 8 },
  { surname: 'Сидоров', faculty: 'Химия', group: 'Х-201', athletics: 8, volleyball: 9, basketball: 7, swimming: 8 },
  { surname: 'Кузнецов', faculty: 'Информатика', group: 'И-301', athletics: 6, volleyball: 6, basketball: 6, swimming: 5 },
  { surname: 'Семенов', faculty: 'Биология', group: 'Б-202', athletics: 3, volleyball: 4, basketball: 5, swimming: 6 },
  { surname: 'Николаев', faculty: 'Философия', group: 'Ф-401', athletics: 7, volleyball: 8, basketball: 9, swimming: 10 },
  { surname: 'Федоров', faculty: 'Экономика', group: 'Э-103', athletics: 5, volleyball: 5, basketball: 5, swimming: 5 },
  { surname: 'Григорьев', faculty: 'Социология', group: 'С-201', athletics: 4, volleyball: 3, basketball: 4, swimming: 2 },
  { surname: 'Егоров', faculty: 'История', group: 'И-104', athletics: 10, volleyball: 10, basketball: 10, swimming: 10 },
  { surname: 'Алексеева', faculty: 'Искусств', group: 'И-202', athletics: 9, volleyball: 8, basketball: 7, swimming: 6 },
  { surname: 'Павлова', faculty: 'Право', group: 'П-305', athletics: 6, volleyball: 6, basketball: 8, swimming: 9 },
  { surname: 'Лебедев', faculty: 'Психология', group: 'ПС-403', athletics: 4, volleyball: 7, basketball: 8, swimming: 6 },
  { surname: 'Тихонов', faculty: 'Медицина', group: 'М-108', athletics: 7, volleyball: 9, basketball: 9, swimming: 8 },
  { surname: 'Васильев', faculty: 'Физическая культура', group: 'ФК-301', athletics: 9, volleyball: 10, basketball: 10, swimming: 10 },
];

export default function Object() {
  const [students, setStudents] = useState(initialStudents);
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [excellentStudents, setExcellentStudents] = useState([]); // Состояние для отличных студентов
  const [formData, setFormData] = useState({
    surname: '',
    faculty: '',
    group: '',
    athletics: 0,
    volleyball: 0,
    basketball: 0,
    swimming: 0,
  });
  const [editIndex, setEditIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === 'athletics' || name === 'volleyball' || name === 'basketball' || name === 'swimming'
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let updatedStudents;
      if (editIndex !== null) {
        updatedStudents = [...students];
        updatedStudents[editIndex] = formData;
      } else {
        updatedStudents = [...students, formData];
      }

      setStudents(updatedStudents);
      setFilteredStudents(updatedStudents); // Обновляем отфильтрованных студентов
      clearForm();
    }
  };

  const validateForm = () => {
    const { athletics, volleyball, basketball, swimming } = formData;
    return (
      formData.surname &&
      formData.faculty &&
      formData.group &&
      athletics >= 0 && athletics <= 10 &&
      volleyball >= 0 && volleyball <= 10 &&
      basketball >= 0 && basketball <= 10 &&
      swimming >= 0 && swimming <= 10
    );
  };

  const clearForm = () => {
    setFormData({
      surname: '',
      faculty: '',
      group: '',
      athletics: 0,
      volleyball: 0,
      basketball: 0,
      swimming: 0,
    });
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(students[index]);
  };

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    setFilteredStudents(updatedStudents); // Обновляем отфильтрованных студентов
    if (editIndex === index) {
      clearForm();
    }
  };

  const handleSort = (field) => {
    let direction = 'asc';

    // Проверяем, является ли поле уже отсортированным
    if (sortConfig.key === field) {
      // Если да, то меняем направление
      direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    }

    const sortedStudents = [...filteredStudents].sort((a, b) => {
      if (field === 'sum') {
        const sumA = a.athletics + a.volleyball + a.basketball + a.swimming;
        const sumB = b.athletics + b.volleyball + b.basketball + b.swimming;
        return direction === 'asc' ? sumA - sumB : sumB - sumA;
      }

      // Проверяем, является ли значение числом или строкой
      if (typeof a[field] === 'number' && typeof b[field] === 'number') {
        return direction === 'asc' ? a[field] - b[field] : b[field] - a[field];
      }

      // Сравниваем строки
      const comparison = a[field].localeCompare(b[field]);
      return direction === 'asc' ? comparison : -comparison;
    });

    // Обновляем состояние сортировки
    setSortConfig({ key: field, direction });
    setFilteredStudents(sortedStudents);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = students.filter((student) =>
      student.surname.toLowerCase().includes(query)
    );
    setFilteredStudents(filtered);
  };

  const handleFilterExcellentStudents = () => {
    const excellent = students.filter(student => {
      const totalScore = student.athletics + student.volleyball + student.basketball + student.swimming;
      return totalScore > 30;
    });
    setExcellentStudents(excellent);
  };

  return (
    <>
      <div className={styles.header_container}>
        <h3>Сведения о физической подготовке студентов</h3>
        <p>Заполните информацию о студентах и их физической подготовке по различным видам спорта.</p>
      </div>

      <div className={styles.search_container}>
        <h3>Поиск студентов</h3>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.search_input}
          placeholder="Введите Фамилию для поиска"
        />
      </div>

      <div className={styles.main_container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} placeholder="Фамилия" required />
          <input type="text" name="faculty" value={formData.faculty} onChange={handleInputChange} placeholder="Факультет" required />
          <input type="text" name="group" value={formData.group} onChange={handleInputChange} placeholder="Группа" required />
          <input type="number" name="athletics" value={formData.athletics} onChange={handleInputChange} placeholder="Легкая атлетика" min="0" max="10" required />
          <input type="number" name="volleyball" value={formData.volleyball} onChange={handleInputChange} placeholder="Волейбол" min="0" max="10" required />
          <input type="number" name="basketball" value={formData.basketball} onChange={handleInputChange} placeholder="Баскетбол" min="0" max="10" required />
          <input type="number" name="swimming" value={formData.swimming} onChange={handleInputChange} placeholder="Плавание" min="0" max="10" required />
          <button type="submit">{editIndex !== null ? 'Сохранить изменения' : 'Добавить студента'}</button>
        </form>

        {/* Таблица с студентами */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th onClick={() => handleSort('surname')} className={styles.sorting_header}>Фамилия</th>
              <th onClick={() => handleSort('faculty')} className={styles.sorting_header}>Факультет</th>
              <th onClick={() => handleSort('group')} className={styles.sorting_header}>Группа</th>
              <th onClick={() => handleSort('athletics')} className={styles.sorting_header}>Легкая атлетика</th>
              <th onClick={() => handleSort('volleyball')} className={styles.sorting_header}>Волейбол</th>
              <th onClick={() => handleSort('basketball')} className={styles.sorting_header}>Баскетбол</th>
              <th onClick={() => handleSort('swimming')} className={styles.sorting_header}>Плавание</th>
              <th onClick={() => handleSort('sum')} className={styles.sorting_header}>Сумма баллов</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                {editIndex === index ? (
                  <>
                    <td><input type="text" name="surname" value={formData.surname} onChange={handleInputChange} /></td>
                    <td><input type="text" name="faculty" value={formData.faculty} onChange={handleInputChange} /></td>
                    <td><input type="text" name="group" value={formData.group} onChange={handleInputChange} /></td>
                    <td><input type="number" name="athletics" value={formData.athletics} onChange={handleInputChange} min="0" max="10" /></td>
                    <td><input type="number" name="volleyball" value={formData.volleyball} onChange={handleInputChange} min="0" max="10" /></td>
                    <td><input type="number" name="basketball" value={formData.basketball} onChange={handleInputChange} min="0" max="10" /></td>
                    <td><input type="number" name="swimming" value={formData.swimming} onChange={handleInputChange} min="0" max="10" /></td>
                  </>
                ) : (
                  <>
                    <td>{student.surname}</td>
                    <td>{student.faculty}</td>
                    <td>{student.group}</td>
                    <td>{student.athletics}</td>
                    <td>{student.volleyball}</td>
                    <td>{student.basketball}</td>
                    <td>{student.swimming}</td>
                  </>
                )}
                <td>{student.athletics + student.volleyball + student.basketball + student.swimming}</td>
                <td>
                  {editIndex === index ? (
                    <button onClick={() => setEditIndex(null)}>Отменить</button>
                  ) : (
                    <button className={styles.edit_btn} onClick={() => handleEdit(index)}>Редактировать</button>
                  )}
                  <button className={styles.delete_btn} onClick={() => handleDelete(index)}>Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Кнопка для фильтрации отличных студентов */}
        <button className={styles.processButton} onClick={handleFilterExcellentStudents}>Обработка</button>


        {/* Таблица с отличными студентами */}
        {excellentStudents.length > 0 && (
          <div>
            <h3>Студенты с отличной физической подготовкой:</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Фамилия</th>
                  <th>Факультет</th>
                  <th>Группа</th>
                  <th>Легкая атлетика</th>
                  <th>Волейбол</th>
                  <th>Баскетбол</th>
                  <th>Плавание</th>
                  <th>Сумма баллов</th>
                </tr>
              </thead>
              <tbody>
                {excellentStudents.map((student, index) => (
                  <tr key={index}>
                    <td>{student.surname}</td>
                    <td>{student.faculty}</td>
                    <td>{student.group}</td>
                    <td>{student.athletics}</td>
                    <td>{student.volleyball}</td>
                    <td>{student.basketball}</td>
                    <td>{student.swimming}</td>
                    <td>{student.athletics + student.volleyball + student.basketball + student.swimming}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
