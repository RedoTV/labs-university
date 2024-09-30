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
                <td>${formData.managerSurname}</td>
                <td>${formData.managerPhone}</td>
            </tr>
        `;
        document.getElementById('outputTableShop').insertAdjacentHTML('beforeend', tableRow);
    };

    const handleSubmitPersonal = (e) => {
        e.preventDefault();
        const tableRow = `
            <tr>
                <td>${formData.employeeSurname}</td>
                <td>${formData.employeePosition}</td>
                <td>${formData.employeeBirthYear}</td>
                <td>${formData.employeeHomeAddress}</td>
                <td>${formData.employeePhone}</td>
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
            </tr>
        `;
        document.getElementById('outputTableProducts').insertAdjacentHTML('beforeend', tableRow);
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
                        <button type="submit" className={styles.submitButton}>Отправить</button>

                    </fieldset>
                </form>

                <form onSubmit={handleSubmitPersonal} className={styles.form}>
                    {/* Персонал */}
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
                            Адрес сотрудника:
                            <input
                                type="text"
                                name="employeeHomeAddress"
                                value={formData.employeeHomeAddress}
                                onChange={handleChange}
                                placeholder="Адрес"
                                className={styles.input}
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
                        <button type="submit" className={styles.submitButton}>Отправить</button>
                    </fieldset>
                </ form>

                <form onSubmit={handleSubmitProducts} className={styles.form}>
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
                        <button type="submit" className={styles.submitButton}>Отправить</button>
                    </fieldset>

                </form >

            </div >
            <div className={styles.container}>
                < table id="outputTableShop" className={styles.table} >
                    <thead>
                        <tr>
                            <th>Название магазина</th>
                            <th>Адрес магазина</th>
                            <th>Фамилия заведующего</th>
                            <th>Телефон заведующего</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table >

                {/* Вывод таблицы */}
                < table id="outputTablePersonal" className={styles.table} >
                    <thead>
                        <tr>
                            <th>Фамилия сотрудника</th>
                            <th>Должность сотрудника</th>
                            <th>Год рождения сотрудника</th>
                            <th>Адрес сотрудника</th>
                            <th>Телефон сотрудника</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table >

                {/* Вывод таблицы */}
                < table id="outputTableProducts" className={styles.table} >
                    <thead>
                        <tr>
                            <th>Наименование товара</th>
                            <th>Количество</th>
                            <th>Цена</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table >
            </div>

        </>
    );
}
