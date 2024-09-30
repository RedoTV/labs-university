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
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmitShop = (e) => {
        e.preventDefault();
        const tableRow = `
            <tr>
                <td>${formData.shopName}</td>
                <td>${formData.shopAddress}</td>
            </tr>
        `;
        document.getElementById('outputTable').insertAdjacentHTML('beforeend', tableRow);
    };

    const handleSubmitPersonal = (e) => {
        e.preventDefault();
        const tableRow = `
            <tr>
                <td>${formData.shopName}</td>
                <td>${formData.shopAddress}</td>
                <td>${formData.managerSurname}</td>
                <td>${formData.managerPhone}</td>
                <td>${formData.employeeSurname}</td>
                <td>${formData.employeePosition}</td>
                <td>${formData.employeeBirthYear}</td>
                <td>${formData.productName}</td>
                <td>${formData.productQuantity}</td>
                <td>${formData.productPrice}</td>
            </tr>
        `;
        document.getElementById('outputTable').insertAdjacentHTML('beforeend', tableRow);
    };

    return (
        <>
            <div className={styles.container}>
                <form onSubmit={handleSubmitShop} className={styles.form}>
                    {/* Магазин */}
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
                            />
                        </label>
                        <label>
                            Адрес магазина:
                            <input
                                type="text"
                                name="shopAddress"
                                value={formData.shopAddress}
                                onChange={handleChange}
                                placeholder="Введите адрес"
                                className={styles.input}
                                required
                            />
                        </label>
                    </fieldset>
                    <button type="submit" className={styles.submitButton}>Отправить</button>


                    {/* Персонал */}
                    <fieldset>
                        <legend>Персонал</legend>
                        <label>
                            Фамилия заведующего:
                            <input
                                type="text"
                                name="managerSurname"
                                value={formData.managerSurname}
                                onChange={handleChange}
                                placeholder="Фамилия заведующего"
                                className={styles.input}
                            />
                        </label>
                        <label>
                            Телефон заведующего:
                            <input
                                type="tel"
                                name="managerPhone"
                                value={formData.managerPhone}
                                onChange={handleChange}
                                placeholder="Телефон"
                                className={styles.input}
                            />
                        </label>

                        <label>
                            Фамилия сотрудника:
                            <input
                                type="text"
                                name="employeeSurname"
                                value={formData.employeeSurname}
                                onChange={handleChange}
                                placeholder="Фамилия"
                                className={styles.input}
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
                            />
                        </label>
                        <label>
                            Год рождения сотрудника:
                            <input
                                type="number"
                                name="employeeBirthYear"
                                value={formData.employeeBirthYear}
                                onChange={handleChange}
                                placeholder="Год рождения"
                                className={styles.input}
                                min="1900"
                                max={new Date().getFullYear()}
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
                            />
                        </label>
                    </fieldset>
                    <button type="submit" className={styles.submitButton}>Отправить</button>


                    {/* Товар */}
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
                            />
                        </label>
                    </fieldset>

                    <button type="submit" className={styles.submitButton}>Отправить</button>
                </form>


            </div>
            {/* Вывод таблицы */}
            <table id="outputTable" className={styles.table}>
                <thead>
                    <tr>
                        <th>Название магазина</th>
                        <th>Адрес магазина</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>

            {/* Вывод таблицы */}
            <table id="outputTable" className={styles.table}>
                <thead>
                    <tr>
                        <th>Название магазина</th>
                        <th>Адрес магазина</th>
                        <th>Фамилия заведующего</th>
                        <th>Телефон заведующего</th>
                        <th>Фамилия сотрудника</th>
                        <th>Должность сотрудника</th>
                        <th>Год рождения сотрудника</th>
                        <th>Наименование товара</th>
                        <th>Количество</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </>
    );
}
