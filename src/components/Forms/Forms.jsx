import { useState } from 'react';
import styles from './Forms.module.css';

export default function Forms() {
    const [formData, setFormData] = useState({
        shopName: '',
        shopAddress: '',
        managerSurname: '',
        managerPhone: '',
        employeeSurname: '',
        employeePosition: '',
        employeeBirthYear: '',
        employeeHomeAddress: '',
        employeePhone: '',
        productName: '',
        productQuantity: '',
        productPrice: '',
        managerConsent: false,
        managerGender: 'male',
        productRating: 5,
        searchQuery: ''
    });

    const [employeeData, setEmployeeData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmitShop = (e) => {
        e.preventDefault();
        let tableRow = `
            <tr>
                <td>${formData.shopName}</td>
                <td>${formData.shopAddress}</td>
                <td>${formData.managerSurname}</td>
                <td>${formData.managerPhone}</td>
                <td>${formData.managerConsent ? 'Да' : 'Нет'}</td>
        `;
        if (formData.managerConsent)
            tableRow += `<td>${formData.managerGender === 'male' ? 'Мужской' : 'Женский'}</td>`;
        else
            tableRow += "<td>null</td>"

        tableRow += '</tr>'
        document.getElementById('outputTableShop').insertAdjacentHTML('beforeend', tableRow);
    };

    const handleSubmitPersonal = (e) => {
        e.preventDefault();
        const newEmployee = {
            employeeSurname: formData.employeeSurname,
            employeePosition: formData.employeePosition,
            employeeBirthYear: formData.employeeBirthYear,
            employeeHomeAddress: formData.employeeHomeAddress,
            employeePhone: formData.employeePhone
        };
        setEmployeeData([...employeeData, newEmployee]);

        const tableRow = `
            <tr>
                <td>${newEmployee.employeeSurname}</td>
                <td>${newEmployee.employeePosition}</td>
                <td>${newEmployee.employeeBirthYear}</td>
                <td>${newEmployee.employeeHomeAddress}</td>
                <td>${newEmployee.employeePhone}</td>
            </tr>
        `;
        document.getElementById('outputTablePersonal').insertAdjacentHTML('beforeend', tableRow);
    };

    const handleSubmitProducts = (e) => {
        e.preventDefault();
        const tableRow = `
            <tr>
                <td>${formData.productName}</td>
                <td>${formData.productQuantity}</td>
                <td>${formData.productPrice}</td>
                <td>${formData.productRating}</td>
            </tr>
        `;
        document.getElementById('outputTableProducts').insertAdjacentHTML('beforeend', tableRow);
    };

    const handleSearchEmployee = (e) => {
        e.preventDefault();
        const results = employeeData.filter(employee =>
            employee.employeeSurname.toLowerCase().includes(formData.searchQuery.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <>
            <div className={styles.container}>
                {/* Поиск сотрудника */}
                <form onSubmit={handleSearchEmployee} className={styles.form}>
                    <fieldset>
                        <legend>Поиск сотрудника</legend>
                        <label>
                            Поиск сотрудника:
                            <input
                                type="search"
                                name="searchQuery"
                                value={formData.searchQuery}
                                onChange={handleChange}
                                placeholder="Введите фамилию"
                                className={styles.input}
                                required
                                autoFocus
                            />
                        </label>
                        <button type="submit" className={styles.submitButton}>Найти</button>
                    </fieldset>
                </form>

                {/* Результаты поиска */}
                {searchResults.length > 0 && (
                    <div className={styles.container}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Фамилия сотрудника</th>
                                    <th>Должность сотрудника</th>
                                    <th>Дата приема на работу</th>
                                    <th>Адрес сотрудника</th>
                                    <th>Телефон сотрудника</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchResults.map((employee, index) => (
                                    <tr key={index}>
                                        <td>{employee.employeeSurname}</td>
                                        <td>{employee.employeePosition}</td>
                                        <td>{employee.employeeBirthYear}</td>
                                        <td>{employee.employeeHomeAddress}</td>
                                        <td>{employee.employeePhone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Магазин */}
                <form onSubmit={handleSubmitShop} className={styles.form}>
                    <fieldset>
                        <legend>Магазин</legend>
                        <label>
                            Название магазина:
                            <input
                                type="text"
                                name="shopName"
                                value={formData.shopName}
                                onChange={handleChange}
                                placeholder="Введите название"
                                className={styles.input}
                                required
                                autoComplete='off'
                            />
                        </label>
                        <label>
                            Адрес магазина:
                            <input
                                type="url"
                                name="shopAddress"
                                value={formData.shopAddress}
                                onChange={handleChange}
                                placeholder="Введите URL адрес"
                                className={styles.input}
                                required
                            />
                        </label>
                        <label>
                            Фамилия заведующего:
                            <input
                                type="text"
                                name="managerSurname"
                                value={formData.managerSurname}
                                onChange={handleChange}
                                placeholder="Фамилия заведующего"
                                className={styles.input}
                                required
                            />
                        </label>
                        <label>
                            Телефон заведующего:
                            <input
                                type="tel"
                                name="managerPhone"
                                value={formData.managerPhone}
                                onChange={handleChange}
                                placeholder="Телефон заведующего"
                                pattern="^\+?[0-9]{10,15}$"
                                className={styles.input}
                                required
                            />
                        </label>
                        <label>
                            Согласие на обработку данных:
                            <input
                                type="checkbox"
                                name="managerConsent"
                                checked={formData.managerConsent}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Пол заведующего:
                            <input
                                type="radio"
                                name="managerGender"
                                value="male"
                                checked={formData.managerGender === 'male'}
                                onChange={handleChange}
                            /> Мужской
                            <input
                                type="radio"
                                name="managerGender"
                                value="female"
                                checked={formData.managerGender === 'female'}
                                onChange={handleChange}
                            /> Женский
                        </label>
                        <button type="submit" className={styles.submitButton} style={{ backgroundColor: 'red' }}>Отправить</button>
                    </fieldset>
                </form>

                {/* Персонал */}
                <form onSubmit={handleSubmitPersonal} className={styles.form}>
                    <fieldset>
                        <legend>Персонал</legend>
                        <label>
                            Фамилия сотрудника:
                            <input
                                type="text"
                                name="employeeSurname"
                                value={formData.employeeSurname}
                                onChange={handleChange}
                                placeholder="Фамилия"
                                className={styles.input}
                                required
                            />
                        </label>
                        <label>
                            Должность сотрудника:
                            <input
                                type="text"
                                name="employeePosition"
                                value={formData.employeePosition}
                                onChange={handleChange}
                                placeholder="Должность"
                                className={styles.input}
                                required
                            />
                        </label>
                        <label>
                            Дата приема на работу:
                            <input
                                type="date"
                                name="employeeBirthYear"
                                value={formData.employeeBirthYear}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                        </label>
                        <label>
                            Адрес сотрудника:
                            <input
                                type="text"
                                name="employeeHomeAddress"
                                value={formData.employeeHomeAddress}
                                onChange={handleChange}
                                placeholder="Адрес"
                                className={styles.input}
                                required
                            />
                        </label>
                        <label>
                            Телефон сотрудника:
                            <input
                                type="tel"
                                name="employeePhone"
                                value={formData.employeePhone}
                                onChange={handleChange}
                                placeholder="Телефон сотрудника"
                                className={styles.input}
                                required
                            />
                        </label>
                        <button type="submit" className={styles.submitButton} style={{ backgroundColor: 'blue' }} > Отправить</button>
                    </fieldset>
                </form>

                {/* Товар */}
                <form onSubmit={handleSubmitProducts} className={styles.form}>
                    <fieldset>
                        <legend>Товар</legend>
                        <label>
                            Наименование товара:
                            <input
                                type="text"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                                placeholder="Наименование товара"
                                className={styles.input}
                                required
                            />
                        </label>
                        <label>
                            Количество:
                            <input
                                type="number"
                                name="productQuantity"
                                value={formData.productQuantity}
                                onChange={handleChange}
                                placeholder="Количество"
                                className={styles.input}
                                min="1"
                                required
                            />
                        </label>
                        <label>
                            Цена за единицу:
                            <input
                                type="number"
                                name="productPrice"
                                value={formData.productPrice}
                                onChange={handleChange}
                                placeholder="Цена"
                                className={styles.input}
                                step="0.01"
                                required
                            />
                        </label>
                        <label>
                            Рейтинг товара:
                            <input
                                type="range"
                                name="productRating"
                                value={formData.productRating}
                                onChange={handleChange}
                                min="1"
                                max="5"
                                className={styles.input}
                            />
                            <span>{formData.productRating}</span>
                        </label>
                        <button type="submit" className={styles.submitButton} style={{ backgroundColor: 'grey' }}>Отправить</button>
                    </fieldset>
                </form>
            </div >

            {/* Таблицы */}
            < div className={styles.container} >
                <table id="outputTableShop" className={styles.table}>
                    <thead>
                        <tr>
                            <th>Название магазина</th>
                            <th>Адрес магазина</th>
                            <th>Фамилия заведующего</th>
                            <th>Телефон заведующего</th>
                            <th>Согласие на обработку данных</th>
                            <th>Пол заведующего</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>

                <table id="outputTablePersonal" className={styles.table}>
                    <thead>
                        <tr>
                            <th>Фамилия сотрудника</th>
                            <th>Должность сотрудника</th>
                            <th>Дата приема на работу</th>
                            <th>Адрес сотрудника</th>
                            <th>Телефон сотрудника</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>

                <table id="outputTableProducts" className={styles.table}>
                    <thead>
                        <tr>
                            <th>Наименование товара</th>
                            <th>Количество</th>
                            <th>Цена</th>
                            <th>Рейтинг товара</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div >
        </>
    );
}
